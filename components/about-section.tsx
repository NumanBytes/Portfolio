import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating exceptional digital experiences through clean code and innovative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              I'm a dedicated Frontend Developer with over a year of experience building interactive web applications
              using React, JavaScript, and TypeScript. My expertise lies in crafting responsive interfaces with Material
              UI and developing modular, maintainable components.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Currently working at CloudCard Inc., I've successfully engineered digital card widgets for banking
              clients, enhanced user interfaces for major financial institutions like Yes Bank, and collaborated with
              cross-functional teams to deliver high-quality software solutions in agile environments.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              I'm committed to continuous learning and staying updated with the latest technologies to deliver
              user-centric solutions that enhance client satisfaction and drive business success.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-foreground">Location</h3>
                    <p className="text-muted-foreground">Lahore, Punjab, Pakistan</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Calendar className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-foreground">Experience</h3>
                    <p className="text-muted-foreground">1+ Years in Frontend Development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:border-primary/50 transition-colors duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-inter font-semibold text-lg text-foreground">Education</h3>
                    <p className="text-muted-foreground">B.S Information Technology</p>
                    <p className="text-sm text-muted-foreground">Punjab University College of IT</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
