# Placify — AI Mock Interview

Placify is a web app for preparing for job interviews. It generates role-specific interview questions with Google Gemini, lets a signed-in user work through them with webcam and speech input, evaluates spoken answers, and stores interview sessions and feedback in a Neon PostgreSQL database.

> **Project status:** This repository is an early-stage prototype. The current home page is a placeholder; open `/dashboard` to use the interview workflow after signing in.

## Features

- Clerk authentication protects the dashboard and interview routes.
- Create a mock interview from a job role, a short job description or tech stack, and years of experience.
- Generate a configurable number of questions and suggested answers with Gemini.
- Browse saved interview sessions on the dashboard.
- View interview questions, move between them, and hear the active question using browser text-to-speech.
- Enable a webcam preview and dictate answers using the browser's Web Speech recognition API.
- Ask Gemini to rate each answer from 1–10 and provide concise improvement feedback.
- Review saved answers, suggested answers, ratings, and feedback, including an average rating for the session.

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [Clerk](https://clerk.com/) for authentication
- [Google Generative AI](https://ai.google.dev/) for question generation and answer evaluation
- [Neon](https://neon.tech/) serverless PostgreSQL and [Drizzle ORM](https://orm.drizzle.team/)
- Tailwind CSS 4, Base UI, and small local UI components
- `react-webcam` and browser speech APIs for the interview experience

## Requirements

- Node.js compatible with the installed Next.js version and npm
- A Clerk application
- A Google Gemini API key
- A Neon PostgreSQL database
- A modern browser with camera/microphone permission and Web Speech recognition support for voice input. Speech recognition availability varies by browser and platform; the app currently expects English (`en-US`).

## Getting started

1. Clone the repository and enter the application directory (the Next.js app is in `Placify/` if you cloned the containing project directory):

   ```bash
   cd Placify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create `.env.local` in the same directory as `package.json` and set the variables below. Use the values from your own Clerk, Gemini, and Neon projects; never commit real credentials.

   ```dotenv
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

   NEXT_PUBLIC_DRIZZLE_DB_URL=your_neon_postgresql_connection_string
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key

   NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=5
   NEXT_PUBLIC_INFORMATION=Review each question carefully and answer as you would in a real interview.
   NEXT_PUBLIC_QUESTION_NOTE=Use specific examples and explain your reasoning.
   ```

   `NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT` controls how many questions the generation prompt requests. `NEXT_PUBLIC_INFORMATION` and `NEXT_PUBLIC_QUESTION_NOTE` supply the informational text shown in the interview UI. The Clerk sign-in and sign-up routes correspond to `/sign-in` and `/sign-up` in this app.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000), sign in, then visit [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to create an interview.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Next.js development server. |
| `npm run build` | Create a production build. |
| `npm run start` | Serve the production build (run `npm run build` first). |
| `npm run db:push` | Push the Drizzle schema to the configured PostgreSQL database. Review `drizzle.config.js` before using; see Database setup below. |
| `npm run db:studio` | Open Drizzle Studio for the configured database. Review `drizzle.config.js` before using. |

## Database setup

The schema is defined in [`utils/schema.js`](utils/schema.js) and contains two tables:

- `mockInterview` stores the generated question/answer JSON, job details, creator email, creation date, and a mock interview ID.
- `userAnswer` stores a response, corresponding question and suggested answer, AI feedback, rating, user email, and interview ID reference.

The application database connection in `utils/db.js` reads `NEXT_PUBLIC_DRIZZLE_DB_URL`. The Drizzle Kit configuration in `drizzle.config.js` currently contains a database URL directly in the file. Before running `db:push` or `db:studio`, replace that configuration with a secure environment-based URL and remove any credentials committed to version control. Do not use a shared or production database until that configuration has been corrected.

## Application routes

| Route | Description |
| --- | --- |
| `/` | Current placeholder landing page. |
| `/sign-in` | Clerk sign-in page. |
| `/sign-up` | Clerk sign-up page. |
| `/dashboard` | Create a mock interview and view saved sessions. Protected by Clerk middleware. |
| `/dashboard/interview/[interviewId]` | Review the selected job details, enable the webcam, and continue to the interview. |
| `/dashboard/interview/[interviewId]/start` | Work through generated questions and record spoken answers. |
| `/dashboard/interview/[interviewId]/feedback` | Review answer ratings and feedback for a session. |

## Project layout

```text
app/
  (auth)/                 Clerk sign-in and sign-up pages
  dashboard/              Dashboard and interview flow
    _components/           Dashboard components
    interview/[interviewId]/
      start/               Question and answer experience
      feedback/            Feedback summary
  globals.css              Global styles
  layout.js                Root layout and Clerk provider
  page.js                  Placeholder home page
components/ui/              Shared UI components
lib/                        Shared utility functions
utils/
  db.js                     Neon and Drizzle connection
  schema.js                 Database table definitions
  GeminiAIModel.js          Gemini chat model configuration
middleware.js               Protected route configuration
```

## Browser permissions and behavior

The browser asks for camera access when the webcam preview is enabled. The answer recording control uses the browser's `SpeechRecognition` or `webkitSpeechRecognition` implementation to transcribe speech; it does not currently save an audio or video recording. Speech transcription may require a supported browser and an internet connection. The browser's speech synthesis API reads questions aloud when the speaker icon is selected.

## Security and deployment notes

This prototype accesses the database and Gemini from client-side components and uses environment variables with the `NEXT_PUBLIC_` prefix for those values. Next.js exposes `NEXT_PUBLIC_` variables to browser code, so the database connection string and Gemini key must be treated as public in the current architecture. Do not deploy this configuration with valuable credentials or real user data. A production-ready deployment should move database and Gemini calls behind authenticated server-side routes/actions, use server-only secrets, enforce ownership checks for interview and answer records, and remove the hard-coded connection URL from `drizzle.config.js`.

Clerk middleware currently protects `/dashboard/:path*`, `/forum/:path*`, and `/api/admin/:path*`. Keep authentication and authorization rules in sync with any new routes or server endpoints.

## Troubleshooting

- **Clerk configuration errors:** Confirm the publishable and secret keys belong to the same Clerk application and that sign-in/sign-up URLs point to the routes above.
- **Database connection errors:** Check that the Neon URL is valid, reachable, and includes SSL settings required by your database. Confirm both the app connection and Drizzle Kit configuration use the intended database.
- **Gemini errors:** Verify the API key and model access. Question generation and evaluation depend on the configured Gemini model in `utils/GeminiAIModel.js`.
- **Camera or microphone unavailable:** Allow permissions for `localhost` or the deployed HTTPS origin, and check whether another application is using the devices.
- **Voice input not supported:** Use a browser/platform that exposes `SpeechRecognition` or `webkitSpeechRecognition`; typed-answer input is not currently implemented.
- **No feedback appears:** Feedback is created after speech transcription is stopped and the app evaluates the recognized answer. Check browser speech recognition, Gemini connectivity, and database access.

## Contributing

1. Create a branch for your change.
2. Keep credentials out of source control and use `.env.local` for local configuration.
3. Make the change and run the relevant checks, such as `npm run build`.
4. Open a pull request describing the behavior changed and any required environment or schema updates.

## License

No license file is currently included. All rights are reserved unless the repository owner specifies otherwise.
