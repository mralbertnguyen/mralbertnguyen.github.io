import React, { Component } from 'react'
import {Card} from 'antd'

const {Meta} = Card;

interface Props {
    id : string,
    titleCard : string, 
    descCard : string,
    alt : string,
    srcBR : string
}

export default class ItemCardPostPanel extends Component<Props,{}>{
    render(){
        return(
            <Card hoverable
            key={this.props.id}
            style={{ width: 240 }}
            cover={
            <img alt={this.props.alt} src={this.props.srcBR} />}>
                <Meta title={this.props.titleCard} description={this.props.descCard}/>
            </Card>
        );
    }
}