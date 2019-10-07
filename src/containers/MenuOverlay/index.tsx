import React from 'react'
import styled from 'styled-components'
// import HamburgerButton from '../../components/HambergerButton'

const StyledContainerMenuOverlay = styled.div`
    background-color : white;
    height : 100%;
    width : 100%;
    justify-content : center;
    align-items : center;
    position : fixed;
`
const StyledContainerBlur = styled.div`
    background-color : black;
    height : 100%;
    width : 100%;
    opacity : 0.8;
    position : absolute;
`

const StyledContainerContentMenu = styled.div`
    height : 100%;
    width : 100%;
    background-color : black;
    display : flex;
    align-items : center;
    justify-content : center;
`

interface States {

}

interface Props {
    display: boolean
}

export default class MenuOverlay extends React.Component<Props, States>{
    render() {
        return (
            (this.props.display) ? 
                <StyledContainerMenuOverlay> 
                    {/* <StyledContainerBlur/>
                    <StyledContainerContentMenu>
                        Menu
                    </StyledContainerContentMenu> */}

                </StyledContainerMenuOverlay> : null
        )
    }
}