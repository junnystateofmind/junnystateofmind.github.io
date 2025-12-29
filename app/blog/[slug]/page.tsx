import { getAllPostSlugs, getPostBySlug } from "@/lib/posts"
import Link from "next/link"
import { notFound } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export async function generateStaticParams() {
  const slugs = getAllPostSlugs()
  return slugs.map((slug) => ({ slug }))
}

function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

interface Props {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const readingTime = getReadingTime(post.content)

  return (
    <article className="py-12 md:py-20 max-w-2xl mx-auto">
      {/* 헤더 */}
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary">
            <img src="/profile.png" alt="장민준" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-medium">장민준</div>
            <div className="text-sm text-muted-foreground flex items-center gap-2">
              <time dateTime={post.date}>{post.date}</time>
              <span>·</span>
              <span>{readingTime} min read</span>
            </div>
          </div>
        </div>
      </header>

      {/* 본문 */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>

      {/* 태그 */}
      {post.tags.length > 0 && (
        <footer className="mt-12 pt-8 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="medium-tag">
                {tag}
              </span>
            ))}
          </div>
        </footer>
      )}

      {/* 돌아가기 */}
      <div className="mt-12">
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  )
}
