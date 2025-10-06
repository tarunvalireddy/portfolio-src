import profileImage from "@/assets/profile.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                <img
                  src={profileImage}
                  alt="Tarun Valireddy"
                  className="relative rounded-full w-64 h-64 object-cover border-4 border-primary/30 card-shadow"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Tarun Valireddy</h3>
                <p className="text-primary font-medium mb-4">Aspiring AWS DevOps Engineer</p>
                <p className="text-muted-foreground leading-relaxed">
                  Aspiring AWS DevOps Engineer with a solid understanding of cloud infrastructure, 
                  CI/CD pipelines, containerization, and Infrastructure as Code (IaC) using tools 
                  like Terraform and Ansible. Passionate about automating deployments, ensuring 
                  system reliability, and building scalable cloud solutions.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Vizianagaram, AP</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-sm">tarunvalireddyy@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9441375906</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a 
                    href="https://linkedin.com/in/tarunvalireddy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-medium text-primary hover:underline"
                  >
                    /tarunvalireddy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
