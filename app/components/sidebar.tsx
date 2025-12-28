"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Post {
  slug: string
  title: string
  date: string
  tags: string[]
}

interface SidebarProps {
  posts: Post[]
  allTags: string[]
}

export default function Sidebar({ posts, allTags }: SidebarProps) {
  const pathname = usePathname()

  return (
    <aside className="w-full lg:w-80 space-y-6">
      {/* 프로필 카드 */}
      <Card>
        <CardContent className="p-6 text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-primary/20 mx-auto mb-4">
            <img src="/profile.png" alt="Minjun Jang" className="w-full h-full object-cover" />
          </div>
          <h3 className="font-bold text-lg">장민준</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">AI Developer</p>
          <Link href="/about" className="text-sm text-primary hover:underline mt-2 inline-block">
            자기소개 보기 →
          </Link>
        </CardContent>
      </Card>

      {/* 최근 글 */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">최근 글</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          {posts.length === 0 ? (
            <p className="text-sm text-gray-500">아직 글이 없습니다.</p>
          ) : (
            <ul className="space-y-2">
              {posts.slice(0, 5).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className={cn(
                      "block text-sm hover:text-primary transition-colors py-1 border-l-2 pl-3",
                      pathname === `/blog/${post.slug}`
                        ? "border-primary text-primary font-medium"
                        : "border-transparent"
                    )}
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </CardContent>
      </Card>

      {/* 태그 */}
      {allTags.length > 0 && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">태그</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge key={tag} variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </aside>
  )
}
