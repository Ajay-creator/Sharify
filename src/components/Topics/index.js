import React from 'react'

//styles
import { Wrapper,Content,Box,Heading } from './Topics.styles' 

const Topics = () =>{
    const Topics = ["Blockchain","Health","Cryptocurrency","Gaming","Technology","Student"];
    return(
        <Wrapper>
            <Heading>
                <h3>Famous Topics</h3>
            </Heading>
            <Content>
                {Topics.map(element => (
                    <Box>
                        <div className="back">
                            <h4>{element}</h4>
                            <p>Find all the articles related to the topic. Make use of all the info 
                                to get most out of it.
                            </p>
                        </div>
                        <h2>{element}</h2>
                        
                    </Box>
                    ))
                }   
            </Content>
        </Wrapper>
    )
    
}

export default Topics;