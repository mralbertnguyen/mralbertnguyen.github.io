import React, { Component } from 'react'
import styled from 'styled-components'
import { ItemNewestPostType } from '../../../utils/types/blog.post.types'
import { DEFAUTL_BR_PATH } from '../../../utils/constants'

const SCContainer = styled.div`
  height: auto;
  margin: 0px 15%;
  top: 100px;
  width: 70%;
  position: absolute;
  background-color: red;
`
const SCContainerHeadPosts = styled.div`
  height : 400px;
  width : 100%;
  background-color : blue;
  display: flex; 
  flex-direction: row;
`

const HeadLeftCol = styled.div`
  width : 50%;
  height: 100%;
  background-color: green;
  display: flex;
  justify-content:center;
  align-item:center;
`

const HeadRightCol = styled.div`
  width: 50%;
  height: 100%;
  display:flex;
  flex-direction: column;
  background-color: yellow
`

const ContainerItemNewest = styled.div`
  background-color:pink;
  height : 100%;
  width : 100%;
  display: flex;
  align-items: flex-end;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url(${DEFAUTL_BR_PATH});  
`

const ViewLabelOverlayNewest = styled.div`
  background-color: black;
  opacity: 0.5;
  height : 50%;
  width : 100%;
`

interface ItemNewestPostProps {
  data : ItemNewestPostType;
}
const ItemNewestPost: React.SFC<ItemNewestPostProps> = (props) =>{
  return(
    <ContainerItemNewest>
      <ViewLabelOverlayNewest>
        <p className="title post-newest">{props.data.title}</p>
      </ViewLabelOverlayNewest>
    </ContainerItemNewest>
  );
}

interface PropTypes {

}

interface StateTypes {
  newestData : ItemNewestPostType
}

class HeadPosts extends Component<PropTypes , StateTypes>{
  constructor(props: PropTypes){
    super(props);
    this.state={
      newestData : {} as ItemNewestPostType
    }
  }

  componentDidMount(){
    // Get API post here
  }

  render(){
    const {newestData} = this.state;
    return(
      <SCContainerHeadPosts>
        <HeadLeftCol>
          <ItemNewestPost data={newestData}/>
        </HeadLeftCol>
        <HeadRightCol></HeadRightCol>
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