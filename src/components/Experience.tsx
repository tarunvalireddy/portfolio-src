import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Self Employed • begindevops",
      company: "Hashnode",
      type: "Full-time",
      period: "Jul 2025 - Sep 2025",
      duration: "3 mos",
      description:
        "Writing a beginner-friendly blog series on DevOps, starting from the very basics and building step by step toward real-world implementations. From understanding SDLC, Linux, and networking fundamentals to hands-on practice with tools and cloud platforms like AWS, my goal is to simplify concepts and make DevOps learning approachable for everyone.",
      highlights: [
        "Created comprehensive DevOps learning content",
        "Covered SDLC, Linux, and networking fundamentals",
        "Hands-on tutorials with AWS and DevOps tools",
      ],
    },
    {
      title: "Manager",
      company: "Self-Employed",
      type: "YouTube Content Management",
      period: "Aug 2024 - Jul 2025",
      duration: "12 mos",
      description:
        "Built and managed 2 faceless YouTube channels in self-improvement & philosophy niche.",
      highlights: [
        "Oversaw video scripting and voiceovers",
        "SEO optimization and thumbnail design",
        "Audience growth through retention strategies",
        "Utilized ChatGPT and CapCut for content production",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 md:pl-20">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-0 w-4 h-4 bg-primary rounded-full border-4 border-background glow-effect"></div>

                  <div className="gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 card-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <p className="text-primary font-medium flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          {exp.company} • {exp.type}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                        <span className="text-primary">({exp.duration})</span>
                      </div>
                    </div>

                    <p className="text-foreground/90 mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">▪</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
