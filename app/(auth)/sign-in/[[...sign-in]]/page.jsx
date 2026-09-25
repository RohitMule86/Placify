import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <section className="min-h-screen bg-background flex flex-col lg:flex-row font-sans selection:bg-primary/10">
      {/* Left Branding & Highlights Panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-12 flex-col justify-between overflow-hidden">
        {/* Decorative background glow accents */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        {/* Top Header Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <Link href="/">
            <div className="bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/15 inline-block hover:bg-white/15 transition-all">
              <Image
                src="/logo.svg"
                width={150}
                height={36}
                alt="InterviewAI Logo"
                priority
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
          </Link>
        </div>

        {/* Middle Content Section */}
        <div className="relative z-10 max-w-lg my-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold border border-white/15 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>AI-Powered Interview Coach</span>
          </div>

          <h1 className="text-4xl xl:text-5xl font-extrabold tracking-tight leading-tight">
            Master Your Interviews with AI Confidence
          </h1>

          <p className="text-slate-300 text-base leading-relaxed">
            Practice customized technical and behavioral interview questions tailored to your target job position. Get instant AI evaluations and actionable feedback.
          </p>

          <div className="space-y-4 pt-2 text-sm text-slate-200">
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span>Role-specific technical & behavioral interview questions</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span>Real-time voice speech analysis & webcam response recording</span>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span>Instant AI ratings, detailed feedback & model answers</span>
            </div>
          </div>
        </div>

        {/* Bottom Footer Note */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Placify. All rights reserved.</span>
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to Home
          </Link>
        </div>
      </div>

      {/* Right Clerk Auth Form Panel */}
      <div className="flex-1 flex flex-col justify-center items-center p-6 sm:p-12 bg-background relative">
        {/* Mobile Header Logo */}
        <div className="w-full max-w-md flex items-center justify-between mb-8 lg:hidden">
          <Link href="/">
            <Image
              src="/logo.svg"
              width={140}
              height={34}
              alt="InterviewAI Logo"
              priority
              className="h-8 w-auto"
            />
          </Link>
          <Link href="/" className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back
          </Link>
        </div>

        {/* Back to Home Button (Desktop) */}
        <div className="hidden lg:block absolute top-8 right-8">
          <Link href="/" className="text-xs font-medium text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
          </Link>
        </div>

        {/* Clerk Sign In Box Wrapper */}
        <div className="w-full max-w-md flex justify-center items-center">
          <SignIn />
        </div>
      </div>
    </section>
  );
}