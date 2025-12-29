import { getAllPosts } from "@/lib/posts"
import Link from "next/link"

function getReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

export default function HomePage() {
  const posts = getAllPosts()

  return (
    <div className="py-12 md:py-20 max-w-2xl mx-auto">
      {/* 인트로 */}
      <header className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog</h1>
        <p className="text-xl text-muted-foreground">
          AI, 개발, 그리고 기술에 대한 생각을 기록합니다.
        </p>
      </header>

      {/* 글 목록 */}
      {posts.length === 0 ? (
        <div className="py-12 text-center">
          <p className="text-muted-foreground">
            아직 작성된 글이 없습니다.
          </p>
        </div>
      ) : (
        <div className="divide-y divide-border">
          {posts.map((post) => (
            <article key={post.slug} className="py-8">
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-3 text-sm text-muted-foreground mb-3">
                  <span>장민준</span>
                  <span>·</span>
                  <time dateTime={post.date}>{post.date}</time>
                  <span>·</span>
                  <span>{getReadingTime(post.content)} min read</span>
                </div>

                <h2 className="text-2xl font-bold mb-2 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h2>

                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {post.description}
                </p>

                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="medium-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
