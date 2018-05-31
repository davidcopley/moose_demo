import React from "react"
import {Card, CardTitle, CardText, CardMedia,List, ListItem} from "material-ui"
import animatedEnter from 'react-animated-enter';


class ResultBlock extends React.Component{
    render(){
        const {name,description,category,subcategory,meta} = this.props
        console.log(meta)
        return (
            <Card style={{minWidth:300,width:"70vw", maxHeight:500,marginTop:20,background:"rgba(255,255,255,0.8)"}}>
                <CardTitle>
                    Name
                </CardTitle>
                <CardText>
                    <span style={{fontSize:20}}>{name||"No Name"}</span> - {subcategory||"No Subcategory"}, {category||"No Subcategory"}
                </CardText>
                <CardTitle>
                    Description
                </CardTitle>
                <CardText style={{overflowY:'auto'}}>
                    {description||"No Description"}
                </CardText>
                <CardTitle>Meta Data</CardTitle>
                <CardMedia style={{maxHeight:150,overflowY:'auto'}}>
                    <List style={{background:"#eeeeee"}}>
                        {meta?Object.keys(meta).filter(key=>meta[key] !== " ").map(key=>{
                            return(
                                <ListItem style={{fontSize:15}}><span style={{fontSize:10}}>{key}</span><br/>{meta[key]}</ListItem>
                            )
                        }):<CardText>No Meta Data</CardText>}
                    </List>
                </CardMedia>
            </Card>
        )
    }
}

export default animatedEnter('fadeIn',1)(ResultBlock)