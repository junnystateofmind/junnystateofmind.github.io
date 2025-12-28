import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getAllPosts } from "@/lib/posts"
import Link from "next/link"
import { Calendar } from "lucide-react"
import Sidebar from "./components/sidebar"

export default function HomePage() {
  const posts = getAllPosts()

  // 모든 태그 추출
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags)))

  return (
    <div className="py-8 md:py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* 메인 컨텐츠 */}
        <div className="flex-1">
          <div className="space-y-2 mb-8">
            <h1 className="text-2xl font-bold tracking-tight">블로그</h1>
            <p className="text-gray-500 dark:text-gray-400">
              AI, 개발, 그리고 기술에 대한 이야기를 나눕니다.
            </p>
          </div>

          {posts.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-500 dark:text-gray-400">
                아직 작성된 글이 없습니다. 곧 새로운 글이 올라올 예정입니다!
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-1">
                        <Calendar className="h-4 w-4" />
                        <time dateTime={post.date}>{post.date}</time>
                      </div>
                      <CardTitle className="text-lg hover:text-primary transition-colors">
                        {post.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
                        {post.description}
                      </p>
                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>
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
