import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Instagram, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Minjun.dev</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                About
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projects
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contact
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="ml-auto">
            Resume
          </Button>
        </div>
      </header>

      <main className="container px-4 md:px-6">
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  AI Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Building intelligent solutions with AI and machine learning. Focused on creating innovative AI
                  applications and autonomous systems.
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20">
                    <img src="/profile.png" alt="Minjun Jang" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex-1 max-w-2xl text-center md:text-left">
                  <h2 className="text-2xl font-bold mb-4">Hello, I'm Minjun Jang 👋</h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-300">
                    <p>
                      I'm an AI developer and researcher currently pursuing my B.S. in Naval Architecture and Ocean
                      Engineering with an Interdisciplinary Major in Computational Sciences at Seoul National
                      University. Born in 1998, I'm passionate about developing AI solutions for real-world problems.
                    </p>
                    <p>
                      My experience spans autonomous maritime navigation, computer vision, natural language processing,
                      and on-device machine learning. I've worked with leading companies and research labs to develop
                      cutting-edge AI applications.
                    </p>
                    <div className="flex items-center gap-2 justify-center md:justify-start text-sm">
                      <MapPin className="h-4 w-4" />
                      <span>Seoul, Korea</span>
                      <Calendar className="h-4 w-4 ml-4" />
                      <span>Available for opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Education & Experience Cards */}
              <div className="grid md:grid-cols-2 gap-6 w-full max-w-4xl mt-12">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Education</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Seoul National University</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          B.S. Naval Architecture & Ocean Engineering
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Interdisciplinary Major in Computational Sciences
                        </p>
                        <p className="text-xs text-gray-500">Mar 2019 - Aug 2025 (Expected)</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold">Research Experience</h3>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">KAIST IC Lab</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Research Intern</p>
                        <p className="text-xs text-gray-500">Jan 2025 - Feb 2025</p>
                      </div>
                      <div>
                        <h4 className="font-medium">Aardvark</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Computer Vision Engineer</p>
                        <p className="text-xs text-gray-500">Nov 2024 - Jan 2025</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Work Experience Section */}
              <div className="w-full max-w-4xl mt-8">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-6">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="text-xl font-semibold">Work Experience</h3>
                    </div>
                    <div className="space-y-6">
                      <div className="border-l-2 border-primary/20 pl-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold">AI Developer</h4>
                            <p className="text-primary font-medium">IMECO Co., Ltd</p>
                          </div>
                          <span className="text-sm text-gray-500 bg-green-100 dark:bg-green-900 px-2 py-1 rounded-full">
                            April 2025 - Present
                          </span>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Developing AI Agent System for intelligent automation</li>
                          <li>• Implementing advanced machine learning algorithms for agent decision-making</li>
                          <li>• Collaborating with cross-functional teams to integrate AI solutions</li>
                        </ul>
                      </div>

                      <div className="border-l-2 border-primary/20 pl-4">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div>
                            <h4 className="text-lg font-semibold">Research Intern</h4>
                            <p className="text-primary font-medium">Avikus Co., Ltd</p>
                          </div>
                          <span className="text-sm text-gray-500 bg-blue-100 dark:bg-blue-900 px-2 py-1 rounded-full">
                            June 2024 - July 2024
                          </span>
                        </div>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Developed Autonomous Maritime Navigation solutions</li>
                          <li>• Contributed to Computer Vision team projects</li>
                          <li>• Implemented sensor fusion algorithms for maritime applications</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Key Achievements */}
              <div className="w-full max-w-4xl mt-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Key Projects & Achievements</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-left">On-device LLM Development</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Smartphone-based mental health evaluation system
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-left">KABOAT Competition</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Sensor fusion and computer vision integration
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-left">AI Education Mentor</p>
                            <p className="text-gray-600 dark:text-gray-400">AI Big-Data Camp with SNU & Gangnam-gu</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-left">Financial AI Research</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              BigData-based investment modeling with QUANTIT
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <div>
                            <p className="font-medium text-left">Military Service</p>
                            <p className="text-gray-600 dark:text-gray-400">Sergeant, ROK Army 6th Infantry Division</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-x-4 mt-8">
                <Link href="https://github.com/junnystateofmind" target="_blank">
                  <Button variant="outline" size="icon">
                    <Github className="h-4 w-4" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/%EB%AF%BC%EC%A4%80-%EC%9E%A5-200165210/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="https://www.instagram.com/junnystateofmind/" target="_blank">
                  <Button variant="outline" size="icon">
                    <Instagram className="h-4 w-4" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:jun1557@snu.ac.kr">
                  <Button variant="outline" size="icon">
                    <Mail className="h-4 w-4" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projects</h2>
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="text-center max-w-2xl">
                <p className="text-gray-500 dark:text-gray-400 mb-4">Featured projects showcase coming soon...</p>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-sm text-yellow-800 dark:text-yellow-200">
                    📝 <strong>Note:</strong> This section is currently being updated with my latest AI projects. Check
                    back soon for detailed project showcases including AI Agent systems, computer vision applications,
                    and machine learning models.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6">
          <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Minjun Jang. All rights reserved.</p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs hover:underline underline-offset-4" href="#">
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
