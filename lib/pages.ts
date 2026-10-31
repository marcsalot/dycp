import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const pagesDirectory = path.join(process.cwd(), 'content/pages')

export function getPageContent(page: string): Record<string, unknown> {
  const filePath = path.join(pagesDirectory, `${page}.md`)
  if (!fs.existsSync(filePath)) return {}
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}
