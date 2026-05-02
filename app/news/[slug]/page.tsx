import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPostBySlug } from '@/lib/posts'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
  }
}

export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)
  if (!post) notFound()

  return (
    <>
      {/* ── POST HERO ─────────────────────────────────────────── */}
      <section
        className="relative pt-40 pb-24 text-white"
        style={{
          backgroundImage: post.coverImage
            ? `linear-gradient(rgba(6,24,48,0.82), rgba(6,24,48,0.92)), url('${post.coverImage}')`
            : undefined,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#061830',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-gold/80 hover:text-gold text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to News
          </Link>
          <p className="text-gold tracking-[0.25em] uppercase text-xs font-medium mb-4">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
          <h1 className="font-serif font-bold text-4xl md:text-5xl leading-tight mb-4">
            {post.title}
          </h1>
          <div className="w-16 h-px bg-gold mt-6" />
        </div>
      </section>

      {/* ── POST CONTENT ──────────────────────────────────────── */}
      <section className="bg-cream py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none
              prose-headings:font-serif prose-headings:text-navy
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-a:text-gold prose-a:no-underline hover:prose-a:underline
              prose-strong:text-navy
              prose-blockquote:border-gold prose-blockquote:text-gray-500"
            dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
          />

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-gold hover:text-gold-dark font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              All News &amp; Updates
            </Link>
          </div>
        </div>
      </section>

      {/* ── DONATE CTA ────────────────────────────────────────── */}
      <section className="bg-navy py-14 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-serif text-2xl font-bold text-white mb-3">
            Support the Dallas Young Cellist Project
          </h2>
          <p className="text-white/70 text-sm mb-7">
            Stories like this are only possible because of generous donors like you.
          </p>
          <Link href="/donate" className="btn-gold">
            Donate Today
          </Link>
        </div>
      </section>
    </>
  )
}
