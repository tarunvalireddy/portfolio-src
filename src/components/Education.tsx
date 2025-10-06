import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lendi Institute of Engineering and Technology",
      score: "8.04 CGPA",
      year: "2026",
      status: "In Progress",
    },
    {
      degree: "Intermediate",
      institution: "Kalam's Junior College",
      score: "60%",
      year: "2022",
      status: "Completed",
    },
    {
      degree: "10th (Matriculation)",
      institution: "Aim English Medium School",
      score: "9.8 CGPA",
      year: "2020",
      status: "Completed",
    },
  ];

  const certifications = [
    {
      name: "AWS Certification",
      issuer: "AICTE",
      date: "Sep 2024",
    },
    {
      name: "IoT Certification",
      issuer: "NPTEL",
      date: "Nov 2023",
    },
  ];

  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Education & <span className="text-primary">Certifications</span>
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <span className="text-sm px-3 py-1 bg-primary/10 text-primary rounded-full">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary font-semibold">{edu.score}</span>
                    <span className="text-sm text-muted-foreground">{edu.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                      <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                      <span className="text-sm text-primary">{cert.date}</span>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="gradient-primary p-6 rounded-xl border border-primary/30 text-center">
                <p className="text-muted-foreground text-sm">
                  Continuously learning and pursuing more certifications in DevOps and Cloud technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
