import React from "react"
import {Card, CardTitle, CardText} from "material-ui"


class ResultBlock extends React.Component{
    render(){
        const {name,description,category,subcategory} = this.props
        return (
            <Card style={{minWidth:300,width:"70vw", maxHeight:500,marginTop:20,background:"rgba(255,255,255,0.5)"}}>
                <CardTitle>
                    {name} - {subcategory}, {category}
                </CardTitle>
                <CardText style={{overflowY:'auto'}}>
                    {description}
                </CardText>
            </Card>
        )
    }
}

export default ResultBlock