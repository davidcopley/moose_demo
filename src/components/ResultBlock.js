import React from "react"
import {Card, CardTitle, CardText} from "material-ui"


class ResultBlock extends React.Component{
    render(){
        const {title,description} = this.props
        return (
            <Card style={{minWidth:300,width:"70vw", maxHeight:500,marginTop:50,background:"rgba(255,255,255,0.5)"}}>
                <CardTitle>
                    {title}
                </CardTitle>
                <CardText style={{overflowY:'auto'}}>
                    {description}
                </CardText>
            </Card>
        )
    }
}

export default ResultBlock