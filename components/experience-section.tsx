import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar, MapPin } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "CloudCard Inc.",
      location: "Lahore, Pakistan",
      period: "May 2024 - Present",
      type: "Full-time",
      achievements: [
        "Engineered a new card theme and core functionalities for a digital card widget application for a key banking client, improving user experience and aligning with design specifications",
        "Developed and maintained multiple user-facing screens for a banking application used by Yes Bank, ensuring seamless data flow and consistent user experience",
        "Implemented significant feature enhancements and new functionalities for a banking application serving Intermex, a US-based client, which directly led to increased client satisfaction",
        "Enhanced the user interface of an internal Service Portal application (built with Angular) for the contact support team, streamlining their workflow and improving usability",
        "Collaborated closely with business analysts and backend teams to integrate new features and deliver software solutions in an agile environment",
        "Coordinated with backend teams to integrate GraphQL APIs, efficiently managing data within the frontend architecture",
      ],
      technologies: ["React", "TypeScript", "Material UI", "GraphQL", "Angular"],
    },
    {
      title: "Web Developer",
      company: "Freelance",
      location: "Lahore, Pakistan",
      period: "Jul 2023 - May 2024",
      type: "Freelance",
      achievements: [
        "Delivered responsive and accessible websites and web applications to enhance user engagement and satisfaction",
        "Utilized HTML, CSS, and JavaScript to build custom web solutions that improved website performance and client outcomes",
        "Developed and integrated RESTful APIs for seamless data interaction between front-end and back-end systems",
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "RESTful APIs", "Responsive Design"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-foreground mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions for clients across various industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="font-inter text-xl text-foreground mb-2">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-muted-foreground mb-2">
                      <Building className="h-4 w-4" />
                      <span className="font-medium">{exp.company}</span>
                      <Badge variant="secondary" className="ml-2">
                        {exp.type}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border/50">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Technologies Used:</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="text-xs border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
