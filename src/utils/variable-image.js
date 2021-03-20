import React from 'react'
import styled from '@emotion/styled'


const VariableImage = ({children}) => {
    return (
        <ImageWrapper>
            <ImageContainer>
                {children}
            </ImageContainer>
        </ImageWrapper>
    )
}

const ImageWrapper = styled.div`
    position: relative;
    width: 100%;
    height: auto;
    &:before {
        content: '';
        display: block;
        width: 100%;
        padding-top: 50%;
    }
`

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`

export default VariableImage