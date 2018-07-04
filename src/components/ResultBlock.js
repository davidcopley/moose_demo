import React from "react"
import {Card, CardTitle, CardText, CardMedia,List, ListItem} from "material-ui"


class ResultBlock extends React.Component{
    render(){
        const {name,unitcode,description,category,subcategory,meta} = this.props
        return (
            <Card style={{minWidth:300,width:"70vw", maxHeight:600,marginTop:20,background:"rgba(255,255,255,0.8)"}}>
                <CardTitle style={{paddingBottom:0, color:'gray'}}>
                    Name
                </CardTitle>
                <CardText>
                    <span style={{fontSize:20}}><b>{/([A-Z]{3}[0-9]{3,4})/.test(unitcode) ?`[${unitcode}] `:''}{name||"No Name"}</b></span> - {subcategory||"No Subcategory"}, {category||"No Subcategory"}
                </CardText>
                <CardTitle style={{paddingBottom:0, color:'gray'}}>
                    Description
                </CardTitle>
                <CardText style={{overflowY:'auto'}}>
                    {description||"No Description"}
                </CardText>
                <CardTitle style={{color:'gray'}}>
                    Meta Data
                </CardTitle>
                <CardMedia style={{maxHeight:325,overflowY:'auto'}}>
                    <List style={{background:"#eeeeee"}}>
                        {meta?Object.keys(meta).filter(key=>meta[key] !== " ").map(key=>{
                            return(
                                <ListItem key={key} disabled style={{fontSize:15}}>
                                    <span style={{fontSize:10}}>
                                        {key}
                                    </span>
                                    <br/>
                                    {meta[key]}
                                </ListItem>
                            )
                        }):<CardText>No Meta Data</CardText>}
                    </List>
                </CardMedia>
            </Card>
        )
    }
}

export default ResultBlock