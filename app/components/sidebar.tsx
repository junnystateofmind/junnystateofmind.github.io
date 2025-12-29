"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

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
    <aside className="w-full lg:w-72 space-y-6 lg:sticky lg:top-20 lg:self-start">
      {/* 프로필 */}
      <div className="notion-card p-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden bg-secondary flex-shrink-0">
            <img src="/profile.png" alt="Minjun Jang" className="w-full h-full object-cover" />
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold truncate">장민준</h3>
            <p className="text-sm text-muted-foreground">AI Agent Developer</p>
          </div>
        </div>
        <Link
          href="/about"
          className="mt-4 flex items-center justify-between w-full px-3 py-2 text-sm rounded-md notion-hover group"
        >
          <span>자기소개</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
        </Link>
      </div>

      {/* 최근 글 */}
      <div className="notion-card p-5">
        <h4 className="text-sm font-semibold text-muted-foreground mb-3">최근 글</h4>
        {posts.length === 0 ? (
          <p className="text-sm text-muted-foreground">아직 글이 없습니다.</p>
        ) : (
          <ul className="space-y-1">
            {posts.slice(0, 5).map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className={cn(
                    "block px-3 py-2 text-sm rounded-md notion-hover truncate",
                    pathname === `/blog/${post.slug}` && "bg-secondary font-medium"
                  )}
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* 태그 */}
      {allTags.length > 0 && (
        <div className="notion-card p-5">
          <h4 className="text-sm font-semibold text-muted-foreground mb-3">태그</h4>
          <div className="flex flex-wrap gap-1.5">
            {allTags.map((tag) => (
              <span
                key={tag}
                className="notion-tag bg-secondary text-secondary-foreground hover:bg-secondary/80 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      )}
    </aside>
  )
}
