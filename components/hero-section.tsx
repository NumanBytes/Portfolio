"use client"

import { Button } from "../components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-accent rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/2 w-72 h-72 bg-primary/50 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="font-inter font-bold text-4xl sm:text-5xl lg:text-7xl text-foreground mb-6 leading-tight">
            Frontend Developer
            <span className="block text-primary">Building Digital</span>
            <span className="block text-accent">Experiences</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            I&apos;m Numan Razzaq, a passionate frontend developer with expertise in React, TypeScript, and modern web
            technologies. I create interactive, user-centric applications that deliver exceptional digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="px-8 py-3 bg-transparent">
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            <a
              href="https://github.com/NumanBytes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/numan-razzaq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="mailto:numaan.razaq@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}
