import Carousel from 'react-multi-carousel'

import {
  Container,
  Box,
  ImageBox,
  Image
} from './styles'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 991, min: 769 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1
  }
}

const slides = [
  {
    src: '/images/slide1.jpg'
  },
  {
    src: '/images/slide2.jpg'
  },
  {
    src: '/images/slide3.jpg'
  },
  {
    src: '/images/slide4.jpg'
  },
  {
    src: '/images/slide5.jpg'
  },
  {
    src: '/images/slide6.jpg'
  },
  {
    src: '/images/slide7.jpg'
  },
  {
    src: '/images/slide8.jpg'
  },
  {
    src: '/images/slide9.jpg'
  }
]

export default function BalcobarCarousel () {
  return (
    <Container>
      <Box>
        <Carousel
          responsive={responsive}
          ssr
          draggable
          showDots={false}
          slidesToSlide={1}
          infinite
          deviceType=''
          keyBoardControl
        >
          {
            slides.map(img => (
              <ImageBox key={img.src}>
                <Image src={img.src} />
              </ImageBox>
            ))
          }
        </Carousel>
      </Box>
    </Container>
  )
}
