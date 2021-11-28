import Link from 'next/link'
import allPatterns from '../components/Backgrounds';
import Grid from '@mui/material/Grid';


export default function Workshop({ workshop }) {
  return (
    <div className='card'>
      <img src={workshop.frontmatter.cover_image} alt='' />
          <Link href={`/workshops/${workshop.slug}`}>
            <div key={workshop.slug} className='paperWorkshop workshopBackground' style={allPatterns[Math.floor(Math.random() * allPatterns.length)]}>
                  <a>{workshop.frontmatter.title}</a>
            </div>
          </Link>

      {/* <h3>{workshop.frontmatter.title}</h3> */}

      <p>{workshop.frontmatter.excerpt}</p>

      <Link href={`/workshops/${workshop.slug}`} >
        <a className='btn startButton'>Start</a>
      </Link>
    </div>
    
  )
}
