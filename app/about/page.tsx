import { Github, Linkedin, Mail, Instagram } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20 max-w-2xl mx-auto">
      {/* 프로필 헤더 */}
      <header className="mb-12">
        <div className="flex items-center gap-6 mb-6">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-secondary">
            <img src="/profile.png" alt="장민준" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">장민준</h1>
            <p className="text-muted-foreground">AI Agent Developer</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="https://github.com/junnystateofmind" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
          </Link>
          <Link href="https://www.linkedin.com/in/%EB%AF%BC%EC%A4%80-%EC%9E%A5-200165210/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
          </Link>
          <Link href="https://www.instagram.com/junnystateofmind/" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
            <Instagram className="h-5 w-5" />
          </Link>
          <Link href="mailto:jun1557@snu.ac.kr" className="text-muted-foreground hover:text-foreground transition-colors">
            <Mail className="h-5 w-5" />
          </Link>
        </div>
      </header>

      {/* 학력 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Education</h2>
        <div className="border-l-2 border-border pl-4">
          <h3 className="font-semibold">서울대학교</h3>
          <p className="text-sm text-muted-foreground">조선해양공학과 · 복수전공: 연합전공 계산과학</p>
          <p className="text-sm text-muted-foreground">2019.03 ~ 2026.02 (졸업 예정)</p>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Skills</h2>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">AI/ML</h4>
            <div className="flex flex-wrap gap-2">
              {["PyTorch", "Transformers", "LangChain", "LangGraph", "vLLM", "TensorRT"].map((skill) => (
                <span key={skill} className="medium-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">NLP & Document AI</h4>
            <div className="flex flex-wrap gap-2">
              {["RAG", "OCR", "Document Parse", "AI Agent", "Vector DB"].map((skill) => (
                <span key={skill} className="medium-tag">{skill}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-muted-foreground mb-2">Infrastructure</h4>
            <div className="flex flex-wrap gap-2">
              {["FastAPI", "Triton", "Qdrant", "Docker", "Python"].map((skill) => (
                <span key={skill} className="medium-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 경력 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          <div className="border-l-2 border-border pl-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold">아이메코 (IMECO)</h3>
              <span className="text-sm text-muted-foreground">2025.04 ~ 현재</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">채널개발본부 주임연구원</p>
            <p className="text-sm">AI 에이전트 플랫폼 개발</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["LangGraph", "RAG", "Document AI", "vLLM"].map((tech) => (
                <span key={tech} className="medium-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-border pl-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold">KAIST IC Lab</h3>
              <span className="text-sm text-muted-foreground">2025.01 ~ 2025.02</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">연구 인턴</p>
            <p className="text-sm">On-device SLM 개발</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["QLoRA", "PEFT", "Llama", "SNPE"].map((tech) => (
                <span key={tech} className="medium-tag">{tech}</span>
              ))}
            </div>
          </div>

          <div className="border-l-2 border-border pl-4">
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold">AVIKUS (HD현대)</h3>
              <span className="text-sm text-muted-foreground">2024.06 ~ 2024.07</span>
            </div>
            <p className="text-sm text-muted-foreground mb-2">연구 인턴</p>
            <p className="text-sm">자율운항 선박 인식 모델 개발</p>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {["YOLOv5", "TensorRT", "Computer Vision"].map((tech) => (
                <span key={tech} className="medium-tag">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 수상 */}
      <section className="mb-10">
        <h2 className="text-xl font-bold mb-4">Awards</h2>
        <div className="border-l-2 border-border pl-4">
          <h3 className="font-semibold">KABOAT 2024 장려상</h3>
          <p className="text-sm text-muted-foreground">대한조선학회 · 자율운항보트 경진대회</p>
        </div>
      </section>

      {/* 기타 */}
      <section>
        <h2 className="text-xl font-bold mb-4">Other</h2>
        <div className="text-sm space-y-1">
          <p><span className="text-muted-foreground">Military:</span> 육군 병장 만기전역 (2021.02 ~ 2022.08)</p>
          <p><span className="text-muted-foreground">Interests:</span> AI Agent, LLM, NLP, Document AI</p>
        </div>
      </section>
    </div>
  )
}
