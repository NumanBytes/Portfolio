import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: ["React", "JavaScript", "TypeScript", "HTML5", "CSS3"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
    {
      title: "UI/UX Libraries",
      skills: ["Material UI", "Ant Design", "Tailwind CSS", "Bootstrap"],
      color: "bg-accent/10 text-accent border-accent/20",
    },
    {
      title: "Backend & APIs",
      skills: ["Node.js", "Express.js", "GraphQL", "RESTful APIs", "Axios"],
      color: "bg-chart-2/10 text-chart-2 border-chart-2/20",
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MySQL", "MongoDB"],
      color: "bg-chart-3/10 text-chart-3 border-chart-3/20",
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "AWS CodePipeline", "Nginx", "Apache"],
      color: "bg-chart-4/10 text-chart-4 border-chart-4/20",
    },
    {
      title: "Development Tools",
      skills: ["Visual Studio Code", "WebStorm", "GitHub", "Bitbucket", "Jira", "Postman", "DBeaver"],
      color: "bg-chart-5/10 text-chart-5 border-chart-5/20",
    },
    {
      title: "State Management & Libraries",
      skills: ["Redux", "Chart.js"],
      color: "bg-primary/10 text-primary border-primary/20",
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-foreground mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
            >
              <CardContent className="p-6">
                <h3 className="font-inter font-semibold text-lg text-foreground mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-transform duration-200`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
