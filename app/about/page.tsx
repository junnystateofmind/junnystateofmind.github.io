import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, Instagram, MapPin, Calendar, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"
import TechStack from "../components/tech-stack"

export default function AboutPage() {
  return (
    <div className="py-12 md:py-24">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
            About Me
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            AI 개발자 장민준입니다
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
            <h2 className="text-2xl font-bold mb-4">Hello, I'm Minjun Jang</h2>
            <div className="space-y-3 text-gray-600 dark:text-gray-300">
              <p>
                서울대학교 조선해양공학과와 계산과학 연계전공을 복수전공하고 있으며,
                AI 솔루션 개발에 열정을 가지고 있습니다.
              </p>
              <p>
                자율 해양 내비게이션, 컴퓨터 비전, 자연어 처리, 온디바이스 머신러닝 분야에서
                경험을 쌓아왔습니다.
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

        {/* Social Links */}
        <div className="space-x-4">
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

        {/* Tech Stack */}
        <div className="w-full max-w-4xl mt-12">
          <h2 className="text-2xl font-bold mb-8">Tech Stack</h2>
          <TechStack />
        </div>
      </div>
    </div>
  )
}
