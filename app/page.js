"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  Bot,
  Video,
  Mic,
  BrainCircuit,
  CheckCircle2,
  Zap,
  BarChart3,
  ShieldCheck,
  Award,
  ChevronRight,
  Menu,
  X,
  Star,
  PlayCircle,
  FileCheck2
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How does the AI Mock Interview work?",
      answer:
        "Simply enter your desired job position, job description, and years of experience. Our AI generates customized technical and behavioral interview questions. You answer via audio/video, and the AI evaluates your response with detailed scoring and constructive feedback."
    },
    {
      question: "Will I get instant feedback on my answers?",
      answer:
        "Yes! As soon as you record and submit your answer, our AI analyzes your speech, key points, and technical correctness to provide a rating out of 10, sample ideal answers, and actionable suggestions for improvement."
    },
    {
      question: "Can I practice for any tech stack or industry role?",
      answer:
        "Absolutely. Whether you are a Full Stack Developer, Data Scientist, Product Manager, or DevOps Engineer, you can tailor the interview settings to any role, technology, or experience level."
    },
    {
      question: "Do I need a webcam and microphone?",
      answer:
        "Yes, to get the full interactive experience with speech-to-text recording, you'll need a working microphone and optional webcam to simulate a live video interview environment."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground font-sans selection:bg-primary/10">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              width={150}
              height={38}
              alt="InterviewAI Logo"
              priority
              className="h-9 w-auto cursor-pointer"
            />
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How it works
            </a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="font-medium text-sm">
                Sign In
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button className="font-semibold shadow-md hover:shadow-lg transition-all rounded-full px-5">
                Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-muted-foreground hover:text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border px-4 pt-2 pb-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-medium font-medium hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-medium font-medium hover:text-primary transition-colors"
            >
              How it works
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-medium font-medium hover:text-primary transition-colors"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-medium font-medium hover:text-primary transition-colors"
            >
              FAQ
            </a>
            <div className="pt-2 flex flex-col gap-3">
              <Link href="/dashboard" className="w-full">
                <Button variant="outline" className="w-full justify-center">
                  Sign In
                </Button>
              </Link>
              <Link href="/dashboard" className="w-full">
                <Button className="w-full justify-center font-semibold rounded-full">
                  Get Started <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>AI-Powered Personal Interview Coach</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight sm:leading-tight">
            Ace Your Next Job Interview with{" "}
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Real-Time AI Practice
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-normal leading-relaxed">
            Generate role-tailored interview questions, practice live responses using your webcam and mic, and receive instant score ratings with expert feedback.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
              >
                Get Started Free <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <a href="#how-it-works" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-medium rounded-full border-border hover:bg-secondary transition-all"
              >
                <PlayCircle className="w-5 h-5 mr-2 text-muted-foreground" /> See How It Works
              </Button>
            </a>
          </div>

          {/* Value Highlights */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-muted-foreground font-medium">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Tailored to your tech stack</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Instant AI evaluation</span>
            </div>
          </div>

          {/* Hero Visual Card / Interactive Preview */}
          <div className="mt-14 max-w-4xl mx-auto rounded-2xl border border-border/80 bg-card p-4 sm:p-6 shadow-2xl relative overflow-hidden text-left">
            <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-2 text-xs font-mono text-muted-foreground">Mock Session: Senior React & Node.js Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 border border-emerald-200 dark:border-emerald-800 text-xs px-2.5 py-1 rounded-md font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Live Recording
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Question & AI Prompt Column */}
              <div className="md:col-span-2 space-y-4">
                <div className="p-4 rounded-xl bg-secondary/60 border border-border/50">
                  <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
                    <Bot className="w-4 h-4" /> AI Interviewer Question
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    "Can you explain the key differences between Server-Side Rendering (SSR) and Client-Side Rendering (CSR) in Next.js, and when you would prefer one over the other?"
                  </p>
                </div>

                {/* User Response Preview */}
                <div className="p-4 rounded-xl border border-border/60 bg-background space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium text-foreground">
                      <Mic className="w-3.5 h-3.5 text-primary" /> Your Recorded Answer
                    </span>
                    <span className="font-mono text-xs">01:45 / 03:00</span>
                  </div>
                  <p className="text-xs text-muted-foreground italic leading-relaxed">
                    "SSR pre-renders HTML on the server for each request, improving SEO and initial page load speed. CSR fetches data dynamically via JavaScript on the client side..."
                  </p>
                </div>
              </div>

              {/* AI Feedback & Score Column */}
              <div className="p-4 rounded-xl bg-primary/5 border border-primary/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">AI Evaluation</span>
                    <span className="text-lg font-extrabold text-primary">8.5 / 10</span>
                  </div>
                  <div className="space-y-2 text-xs text-muted-foreground">
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Accurate explanation of SSR vs CSR data fetching.</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>Good mention of SEO benefits and initial load time.</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                      <span>Tip: Mention Server Components for Next.js App Router context.</span>
                    </div>
                  </div>
                </div>

                <Link href="/dashboard" className="mt-4">
                  <Button size="sm" className="w-full text-xs font-medium rounded-lg">
                    Try Your Own Mock Session
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Features</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Designed to give you full interview confidence
            </p>
            <p className="mt-4 text-muted-foreground text-base sm:text-lg">
              Our platform combines generative AI, speech processing, and performance tracking to deliver realistic mock interview scenarios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Role-Tailored Questions</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Provide your target job role, tech stack, and experience level. The AI generates relevant technical, situational, and behavioral questions.
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Mic className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Voice & Video Recording</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Practice answering aloud with webcam integration and speech-to-text conversion to simulate real-world video interviews seamlessly.
              </p>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Instant AI Feedback</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive instant evaluation ratings, strengths, key missing points, and sample ideal answers for every question you answer.
              </p>
            </div>

            {/* Card 4 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Detailed Scoring & Analytics</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Track your ratings across different interviews to identify weaknesses, measure your progress over time, and perfect your pitch.
              </p>
            </div>

            {/* Card 5 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Past Interview History</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                All mock interview sessions are saved to your dashboard so you can review feedback, study ideal answers, and prepare anytime.
              </p>
            </div>

            {/* Card 6 */}
            <div className="p-6 rounded-2xl border border-border/70 bg-card hover:border-primary/40 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-2">Private & Safe Practice</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Practice in a stress-free environment. Build confidence without fear of judgment before your actual high-stakes interviews.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-secondary/30 border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Simple Process</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get interview ready in 3 easy steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/60 shadow-xs relative">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-4 shadow-md">
                1
              </div>
              <h3 className="text-lg font-bold mb-2">Enter Role & Tech Stack</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Specify your target position, job description, and years of experience to tailor the question set.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/60 shadow-xs relative">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-4 shadow-md">
                2
              </div>
              <h3 className="text-lg font-bold mb-2">Answer AI Questions</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use your microphone or video camera to answer generated questions just like in a real interview.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border/60 shadow-xs relative">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg flex items-center justify-center mb-4 shadow-md">
                3
              </div>
              <h3 className="text-lg font-bold mb-2">Get AI Rating & Feedback</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Review your instant score out of 10, key missing points, and exact model answers to improve fast.
              </p>
            </div>
          </div>

          {/* CTA Link */}
          <div className="mt-12 text-center">
            <Link href="/dashboard">
              <Button size="lg" className="rounded-full px-8 font-semibold shadow-md hover:shadow-lg">
                Start Your First Mock Interview <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">User Feedback</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Trusted by developers & professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-border/60 bg-card space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "The AI feedback was spot-on. It pointed out technical gaps in my explanation of system design that I wouldn't have noticed otherwise!"
              </p>
              <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold">Alex Rivera</h4>
                  <p className="text-xs text-muted-foreground">Frontend Engineer</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "I was really nervous about live technical interviews. Practicing 5 mock sessions here boosted my confidence drastically."
              </p>
              <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold">Priya Sharma</h4>
                  <p className="text-xs text-muted-foreground">Full Stack Developer</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-border/60 bg-card space-y-4">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                "Having model answers for every question gave me clear frameworks on how to structure my answers concisely during real interviews."
              </p>
              <div className="pt-2 border-t border-border/40 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold">David Chen</h4>
                  <p className="text-xs text-muted-foreground">Backend Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary/20 border-t border-border/40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-xs font-bold text-primary uppercase tracking-widest mb-3">FAQ</h2>
            <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Frequently Asked Questions
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-border/70 bg-card overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-semibold text-foreground flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 shrink-0 ${
                      activeFaq === index ? "rotate-90 text-primary" : ""
                    }`}
                  />
                </button>
                {activeFaq === index && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-20 bg-background border-t border-border/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 sm:p-14 text-center relative overflow-hidden shadow-2xl">
            <div className="relative z-10 max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
                Ready to Ace Your Next Job Interview?
              </h2>
              <p className="text-primary-foreground/80 text-base sm:text-lg leading-relaxed">
                Start practicing with AI today. Generate customized questions, record your answers, and receive instant feedback.
              </p>
              <div className="pt-4">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="px-8 py-6 text-base font-bold rounded-full shadow-lg hover:bg-secondary/90 transition-all hover:scale-105"
                  >
                    Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-border/60 bg-background py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" width={130} height={32} alt="Logo" className="h-7 w-auto" />
            <span className="text-xs text-muted-foreground">© {new Date().getFullYear()} InterviewAI. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground font-medium">
            <Link href="/dashboard" className="hover:text-foreground transition-colors">
              Dashboard
            </Link>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-foreground transition-colors">
              How it Works
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
