import { Cloud, Container, GitBranch, Server, Terminal, FileCode, Shield, Workflow } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "AWS", icon: Cloud, level: 85 },
    { name: "Docker", icon: Container, level: 80 },
    { name: "Kubernetes", icon: Server, level: 75 },
    { name: "Jenkins", icon: GitBranch, level: 80 },
    { name: "Terraform", icon: FileCode, level: 75 },
    { name: "Ansible", icon: Workflow, level: 70 },
    { name: "Linux", icon: Terminal, level: 85 },
    { name: "Python", icon: FileCode, level: 75 },
    { name: "Shell Scripting", icon: Terminal, level: 80 },
    { name: "SonarQube", icon: Shield, level: 70 },
    { name: "ArgoCD", icon: GitBranch, level: 70 },
    { name: "YAML", icon: FileCode, level: 85 },
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Technical <span className="text-primary">Skills</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 card-shadow group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">{skill.name}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className="text-primary font-medium">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 max-w-4xl mx-auto gradient-card p-8 rounded-xl border border-border">
          <h3 className="text-2xl font-semibold mb-4 text-center">Core Strengths</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              "Problem-solving",
              "Debugging",
              "Project Ownership",
              "CI/CD Knowledge",
              "Fast Learner",
              "Effective Communicator",
            ].map((strength) => (
              <span
                key={strength}
                className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
