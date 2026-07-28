import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'News & Updates',
  description:
    "Stay up to date with the latest news, events, and stories from the Nadya's Music Bridge.",
}

export default function NewsPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* ── PAGE HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage:
            "linear-gradient(rgba(6,24,48,0.85), rgba(6,24,48,0.93)), url('/images/programs-ensemble.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Stay Informed
          </p>
          <h1 className="section-title text-white text-5xl md:text-6xl mb-6">News &amp; Updates</h1>
          <div className="w-16 h-px bg-gold mb-6" />
          <p className="text-white/75 max-w-xl text-lg leading-relaxed">
            Stories, announcements, and milestones from the NMB community.
          </p>
        </div>
      </section>

      {/* ── POSTS GRID ────────────────────────────────────────── */}
      <section className="bg-cream py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-2xl text-navy mb-4">No posts yet</p>
              <p className="text-gray-500 text-sm">
                Check back soon — stories from our students and community are on the way.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/news/${post.slug}`}
                  className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* Cover */}
                  <div
                    className="h-52 bg-navy-light"
                    style={
                      post.coverImage
                        ? {
                            backgroundImage: `url('${post.coverImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                          }
                        : undefined
                    }
                  />
                  <div className="p-6">
                    <p className="text-gold text-xs uppercase tracking-widest mb-2">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <h2 className="font-serif text-lg font-bold text-navy mb-3 group-hover:text-navy-light transition-colors leading-snug">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <span className="inline-block mt-4 text-gold text-sm font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
