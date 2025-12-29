import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Instagram, MapPin, Calendar, GraduationCap, Briefcase, Award, Code, Server } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="py-8 md:py-12 max-w-4xl mx-auto">
      {/* 헤더 */}
      <header className="mb-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-32 h-32 rounded-full overflow-hidden bg-secondary flex-shrink-0">
            <img src="/profile.png" alt="장민준" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">장민준</h1>
            <p className="text-lg text-muted-foreground mb-3">AI/ML Engineer</p>
            <div className="flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Seoul, Korea
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                1998년생
              </span>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Link href="https://github.com/junnystateofmind" target="_blank">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Github className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/%EB%AF%BC%EC%A4%80-%EC%9E%A5-200165210/" target="_blank">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://www.instagram.com/junnystateofmind/" target="_blank">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Instagram className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="mailto:jun1557@snu.ac.kr">
                <Button variant="outline" size="icon" className="h-9 w-9">
                  <Mail className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* 학력 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <GraduationCap className="h-5 w-5" />
          <h2 className="text-xl font-semibold">학력</h2>
        </div>
        <div className="notion-card p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="font-semibold">서울대학교</h3>
              <p className="text-sm text-muted-foreground">조선해양공학과</p>
              <p className="text-sm text-muted-foreground">복수전공: 연합전공 계산과학</p>
            </div>
            <span className="text-sm text-muted-foreground">2019.03 ~ 2026.02 (졸업 예정)</span>
          </div>
        </div>
      </section>

      {/* 기술 스택 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-5 w-5" />
          <h2 className="text-xl font-semibold">기술 스택</h2>
        </div>
        <div className="notion-card p-5">
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">AI/ML</h4>
              <div className="flex flex-wrap gap-1.5">
                {["PyTorch", "Transformers", "LangChain", "LangGraph", "vLLM", "TensorRT", "ONNX"].map((skill) => (
                  <span key={skill} className="notion-tag bg-secondary text-secondary-foreground">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">NLP & Document AI</h4>
              <div className="flex flex-wrap gap-1.5">
                {["RAG", "OCR", "Document Parse", "AI Agent", "Embedding", "Vector DB"].map((skill) => (
                  <span key={skill} className="notion-tag bg-secondary text-secondary-foreground">{skill}</span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-muted-foreground mb-2">Infrastructure</h4>
              <div className="flex flex-wrap gap-1.5">
                {["FastAPI", "Triton Inference Server", "Qdrant", "Docker", "Python"].map((skill) => (
                  <span key={skill} className="notion-tag bg-secondary text-secondary-foreground">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 경력 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Briefcase className="h-5 w-5" />
          <h2 className="text-xl font-semibold">경력</h2>
        </div>
        <div className="space-y-4">
          {/* 아이메코 */}
          <div className="notion-card p-5">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold">아이메코 (IMECO)</h3>
                <p className="text-sm text-primary">채널개발본부 주임연구원</p>
              </div>
              <span className="notion-tag bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300">
                2025.04 ~ 재직 중
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">AI 에이전트 플랫폼 및 Agentic PDF 분석 시스템 개발</p>
            <ul className="text-sm space-y-2 text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Document Parser 엔진:</strong> Layout 탐지 및 OCR을 결합한 PDF 텍스트 추출 및 Markdown/HTML 변환 솔루션 최적화</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Contextual Image Captioning:</strong> Local VLM 활용, 문서 내 이미지/테이블 캡셔닝을 통한 RAG 검색 품질 향상</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">Multi-Agent Workflow:</strong> LangGraph 기반 멀티 에이전트 시스템 구축 (요약, 분석, 출처 태깅)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-foreground">•</span>
                <span><strong className="text-foreground">추론 인프라 최적화:</strong> Triton Inference Server, vLLM, sglang 기반 온프레미스 서버 구축</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 인턴 및 대외활동 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Server className="h-5 w-5" />
          <h2 className="text-xl font-semibold">인턴 및 대외활동</h2>
        </div>
        <div className="space-y-4">
          {/* KAIST IC Lab */}
          <div className="notion-card p-5">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold">KAIST IC Lab</h3>
                <p className="text-sm text-primary">연구 인턴</p>
              </div>
              <span className="notion-tag bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                2025.01 ~ 2025.02
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">스마트폰 기반 정신 건강 평가를 위한 On-device SLM 개발</p>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              <li>• Qwen2.5 3B, Llama 3.2 3B 모델 대상 QLoRA 기반 미세 조정 (PEFT)</li>
              <li>• Qualcomm Snapdragon 8 Elite 환경 구동을 위한 SNPE 기반 모델 최적화</li>
            </ul>
          </div>

          {/* AVIKUS */}
          <div className="notion-card p-5">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
              <div>
                <h3 className="font-semibold">AVIKUS (HD현대)</h3>
                <p className="text-sm text-primary">연구 인턴</p>
              </div>
              <span className="notion-tag bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                2024.06 ~ 2024.07
              </span>
            </div>
            <p className="text-sm text-muted-foreground mb-3">자율운항 선박 인식 모델 성능 평가 및 데이터 엔지니어링</p>
            <ul className="text-sm space-y-1.5 text-muted-foreground">
              <li>• YOLOv5 기반 선박 예측 모델 벤치마크 및 객체 추적(Tracking) 복원 알고리즘 개발</li>
              <li>• TensorRT 기반 Vision 모델 가속화 및 최적화</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 수상 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Award className="h-5 w-5" />
          <h2 className="text-xl font-semibold">수상</h2>
        </div>
        <div className="notion-card p-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="font-semibold">KABOAT 2024 장려상</h3>
              <p className="text-sm text-muted-foreground">대한조선학회 주최 자율운항보트 경진대회</p>
            </div>
            <span className="text-sm text-muted-foreground">2024</span>
          </div>
        </div>
      </section>

      {/* 기타 */}
      <section className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Calendar className="h-5 w-5" />
          <h2 className="text-xl font-semibold">기타</h2>
        </div>
        <div className="notion-card p-5">
          <div className="space-y-2 text-sm">
            <div className="flex gap-4">
              <span className="text-muted-foreground w-20">병역</span>
              <span>육군 병장 만기전역 (2021.02 ~ 2022.08)</span>
            </div>
            <div className="flex gap-4">
              <span className="text-muted-foreground w-20">관심 분야</span>
              <span>AI/ML 엔지니어링, LLM, NLP, Document AI, AI Agent</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="text-center text-sm text-muted-foreground">
        최종 수정일: 2025년 12월 28일
      </footer>
    </div>
  )
}
