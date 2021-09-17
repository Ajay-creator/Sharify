import React from 'react'

//styles
import { Wrapper,Content,Text,Image,Button} from './Hero.styles'

//videos
// import bg from "../../videos/bg.mp4"

//images
import hero from '../../images/heroImg.svg';

const Hero = () =>(
    <Wrapper>
        <Content>
        {/* <video src={bg} width="100%" autoPlay muted>
        </video> */}
            <Text>
                <h1>One Stop.</h1>
                <h2>Everything you need at one place</h2>
                <Button href="https://google.com/">Explore</Button>
            </Text>
            <Image src={hero} alt='hero-img'/>
            
        </Content>
    </Wrapper>
)
    

export default Hero