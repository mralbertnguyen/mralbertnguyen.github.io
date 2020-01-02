import React, { Component } from 'react'
import styled from 'styled-components'



const SCContainer = styled.div`
  height: auto;
  margin: 0px 15%;
  top: 100px;
  width: 70%;
  position: absolute;
  background-color: red;
`
const SCContainerHeadPosts = styled.div`
  height : 300px;
  width : 100%;
  background-color : blue;
`
class HeadPosts extends Component{
  render(){
    return(
      <SCContainerHeadPosts>
        Head posts
      </SCContainerHeadPosts>
    )
  }
}

export default class BlogContent extends Component{
    render(){
        return(
          <SCContainer>
            <HeadPosts/>
              
          </SCContainer>
        )
    }
}