import type { NextPage } from 'next'
import Image from 'next/image'
import { NextSeo} from 'next-seo'
import { Box, Container } from 'theme-ui'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title={'My page refresh example'}
        description={
          'something useful here!'
        }
      />
      <Container>
        <Image 
          src={'https://i.picsum.photos/id/1020/1200/400.jpg?hmac=H0jRja1zEOXIjjmRGGUv9WOkPrKj2zdek7jKPMJlUbg'}
          layout='intrinsic'
          height={400}
          width={1200}
          />
          <Box>
            <h1>Lets Celebrate</h1>
            <p>This is awesome picture taken while celebrating the colors!</p>
          </Box>
      </Container>
      <Container>
        <Image 
          src={'https://i.picsum.photos/id/482/1200/400.jpg?hmac=IXH-l3honsW5mKUHsrYbzpKLx18wEbQmWl_tqYA_02E'}
          layout='intrinsic'
          height={400}
          width={1200}
          />
          <Box>
            <h1>Lets Celebrate</h1>
            <p>This is awesome picture taken while celebrating the colors!</p>
          </Box>
      </Container>
      <Container>
        <Image 
          src={'https://i.picsum.photos/id/203/1200/400.jpg?hmac=_cZQoE8JT8iUGvFPEIrWVbndskkg18PFDAm1zLzProk'}
          layout='intrinsic'
          height={400}
          width={1200}
          />
          <Box>
            <h1>Lets Celebrate</h1>
            <p>This is awesome picture taken while celebrating the colors!</p>
          </Box>
      </Container>
    </>
  )
}

export default Home
