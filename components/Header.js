import Link from 'next/link'
import path from 'path'
import matter from 'gray-matter'
import Drawer from '../components/Drawer'


export default function Header({workshops}) {
  return (
    <header>
      <div className=''>
        <Link href='/' passHref>
          <h2>DHRI Curriculum</h2>
        </Link>
        <nav>
          <Drawer workshops={workshops} />
        </nav>
      </div>
    </header>
  )
}