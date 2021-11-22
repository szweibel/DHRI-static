import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Workshop from '../components/Workshop'
import { sortByDate } from '../utils'

export default function Home({ workshops }) {

  return (
    <div>

      <div className='workshops'>
        {workshops.map((workshop, index) => (
          <Workshop key={index} workshop={workshop} />
        ))}
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the workshops dir
  const dirents = fs.readdirSync(path.join('workshops'), { withFileTypes: true })
  const workshopFiles = dirents
    .filter((file) => file.isFile())
    .map((file) => file.name);
  // Get slug and frontmatter from workshop
  const workshops = workshopFiles.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('workshops', filename),
      'utf-8',
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      workshops: workshops.sort(sortByDate),
    },
  }
}
