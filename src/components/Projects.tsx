import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Attend-AI",
      subtitle: "Face Recognition Attendance System",
      description: "Web-based real-time face recognition attendance application with admin dashboard, student registration, and multi-angle recognition capabilities.",
      tech: ["Python", "Flask", "OpenCV", "dlib", "Bootstrap"],
      date: "Apr 2025",
      features: [
        "Live webcam attendance tracking",
        "Admin dashboard for management",
        "Multi-angle face recognition",
        "Duplicate detection system",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="gradient-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground font-medium">{project.subtitle}</p>
                  <p className="text-sm text-primary mt-1">{project.date}</p>
                </div>
              </div>

              <p className="text-foreground/90 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-muted-foreground mb-3">Key Features:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            More projects coming soon...
          </p>
          <Button
            onClick={() => window.open("https://linkedin.com/in/tarunvalireddy", "_blank")}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <Github className="mr-2 h-4 w-4" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
