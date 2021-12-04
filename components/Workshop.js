import Link from 'next/link'
import Grid from '@mui/material/Grid';
import randomColor from '../node_modules/randomcolor'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Workshop({ workshop }) {
  const color1 = randomColor({
    luminosity: 'light',
    count: 1,
  })[0]
  const color2 = randomColor({
    luminosity: 'light',
    count: 1,
  })[0]

  // render color as image
  const renderColor = (color) => {
    return `<svg width="100" height="100" style="background-color: ${color}"></svg>`
  }


  const style = {
    // background: `linear-gradient(to right, ${color1}, ${color2})`,
    background: `${color1}`,
    height: '140px',
  }

  //   return (
  //     <div className='card'>
  //     <Link href={`/workshops/${workshop.slug}`} key={workshop.slug}>
  //       <div className='paperWorkshop workshopBackground' style={style} >
  //         <a>{workshop.title}</a>
  //       </div>
  //     </Link>
  //       <p>{workshop.excerpt}</p>
  //       <div className='workshop-footer'>
  //       <Link href={`/workshops/${workshop.slug}`} >
  //         <a className='btn startButton'>Start »</a>
  //       </Link>
  //       </div>
  //     </div>

  //   )
  // }

  return (
    <Card sx={{ maxWidth: 500 }} className='card'>
      <CardContent className='card-content'>
        {
          workshop.cover_image ?
            <CardMedia
              component="img"
              height='140'
              className='card-media'
              image={workshop.cover_image}
              title={workshop.title}
            /> :
            <div className='card-media' style={style}>
              <div className='workshop-color' dangerouslySetInnerHTML={{ __html: renderColor(color1) }} />
            </div>
        }
        <Typography gutterBottom variant="h5" component="h2" className='overlay'>
          {workshop.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {workshop.excerpt}
        </Typography>
        <CardActions>
          <Link href={`/workshops/${workshop.slug}`} >
            <Button size="small" color="primary">
              Start »
            </Button>
          </Link>
        </CardActions>
      </CardContent>
    </Card>
  )
}
