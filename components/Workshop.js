import Link from 'next/link'
import Grid from '@mui/material/Grid';
import randomColor from '../node_modules/randomcolor'



export default function Workshop({ workshop }) {
  const color1 = randomColor({
    luminosity: 'light',
    count: 1,
  })[0]
  const color2 = randomColor({
    luminosity: 'light',
    count: 1,
  })[0]

  const style = {
    // background: `linear-gradient(to right, ${color1}, ${color2})`,
    background: `${color1}`,
  }

  return (
    <div className='card'>
      <Link href={`/workshops/${workshop.slug}`}>
        <div key={workshop.slug} className='paperWorkshop workshopBackground' style={style} >
          <a>{workshop.title}</a>
        </div>
      </Link>
      <p>{workshop.excerpt}</p>
      <div className='workshop-footer'>
      <Link href={`/workshops/${workshop.slug}`} >
        <a className='btn startButton'>Start »</a>
      </Link>
      </div>
    </div>

  )
}
