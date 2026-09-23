/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://neondb_owner:npg_cJK7WlLvG1Ub@ep-snowy-sky-ax8yihsf-pooler.c-4.us-east-2.aws.neon.tech/Placify?sslmode=require&channel_binding=require",
  },
};