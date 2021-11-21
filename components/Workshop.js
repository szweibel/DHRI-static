import Link from 'next/link'

export default function Workshop({ workshop }) {
  return (
    <div className='card'>
      <img src={workshop.frontmatter.cover_image} alt='' />

      <h3>{workshop.frontmatter.title}</h3>

      <p>{workshop.frontmatter.excerpt}</p>

      <Link href={`/workshops/${workshop.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}
