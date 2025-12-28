import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Sidebar from "./components/sidebar"

export default function HomePage() {
  const posts = getAllPosts()
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* 메인 컨텐츠 */}
        <div className="flex-1 min-w-0">
          <div className="mb-10">
            <h1 className="text-3xl font-bold mb-2">블로그</h1>
            <p className="text-muted-foreground">
              AI, 개발, 그리고 기술에 대한 이야기를 나눕니다.
            </p>
          </div>

          {posts.length === 0 ? (
            <div className="notion-card p-8 text-center">
              <p className="text-muted-foreground">
                아직 작성된 글이 없습니다. 곧 새로운 글이 올라올 예정입니다!
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
                  <article className="notion-card p-5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Calendar className="h-3.5 w-3.5" />
                      <time dateTime={post.date}>{post.date}</time>
                    </div>
                    <h2 className="text-lg font-semibold mb-2 group-hover:text-primary">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {post.description}
                    </p>
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="notion-tag bg-secondary text-secondary-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* 사이드바 */}
        <Sidebar posts={posts} allTags={allTags} />
      </div>
    </div>
  )
}
