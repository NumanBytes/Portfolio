import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "Full Stack Authentication System",
      description:
        "A complete, secure authentication system featuring 2FA, email verification, and password recovery. Built with modern security practices and user experience in mind.",
      image: "/modern-auth-dashboard.png",
      technologies: ["React", "TypeScript", "Express.js", "PostgreSQL", "2FA", "JWT"],
      features: [
        "Secure user registration with email validation",
        "2-Factor Authentication with QR code setup",
        "Time-based One-Time Password (TOTP) integration",
        "Password recovery with secure email reset links",
        "Cloud deployment with continuous availability",
      ],
      githubUrl: "https://github.com/NumanBytes/auth-system",
      liveUrl: "#",
      category: "Full Stack",
    },
    {
      title: "Store Admin Dashboard",
      description:
        "Comprehensive e-commerce administration dashboard providing intuitive management of products, customers, and sales with real-time analytics and order tracking.",
      image: "/ecommerce-admin-dashboard.png",
      technologies: ["React", "Express.js", "MongoDB", "RESTful API", "Payment Gateway"],
      features: [
        "Dynamic product and category management",
        "Real-time order processing and tracking",
        "Customer data management system",
        "Integrated payment gateway processing",
        "Sales analytics and reporting dashboard",
      ],
      githubUrl: "https://github.com/muneeb787/store-admin-dashboard",
      liveUrl: "#",
      category: "E-commerce",
    },
    {
      title: "Shopping Store Application",
      description:
        "Sophisticated e-commerce platform with seamless frontend-backend integration, providing an intuitive shopping experience with modern UI/UX design.",
      image: "/modern-ecommerce-website.png",
      technologies: ["React.js", "Node.js", "Axios", "RESTful API", "Responsive Design"],
      features: [
        "Responsive product catalog with filtering",
        "Shopping cart and checkout functionality",
        "User authentication and profiles",
        "Order history and tracking",
        "Mobile-optimized interface",
      ],
      githubUrl: "https://github.com/NumanBytes/Ecommerce_Store_App",
      liveUrl: "#",
      category: "E-commerce",
    },
    {
      title: "E-commerce Web Application (FYP)",
      description:
        "Final year project featuring a comprehensive e-commerce platform built with Django backend and modern frontend, showcasing full-stack development capabilities.",
      image: "/ecommerce-platform-ui.png",
      technologies: ["Django", "Python", "Frontend Integration", "Database Design", "API Development"],
      features: [
        "Robust backend API with Django framework",
        "Product management and inventory system",
        "User authentication and authorization",
        "Order processing and management",
        "Frontend-backend integration architecture",
      ],
      githubUrl: "https://github.com/NumanBytes/Project-code",
      liveUrl: "#",
      category: "Full Stack",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-inter font-bold text-3xl sm:text-4xl text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my technical expertise and problem-solving capabilities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-xl group overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary/90 text-primary-foreground">{project.category}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-inter text-xl text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-secondary/50 hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild size="sm" className="flex-1">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button asChild size="sm" variant="outline" className="flex-1 bg-transparent">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
