import React from "react"
import Moose from "../image/moose.svg"

class MooseAnimation extends React.Component {
    state = {
        currentOffset:350,
        direction: 1
    }

    componentDidMount() {
        this.setState({
            currentOffset:this.props.defaultOffset
        },()=>{
            this.animInterval = setInterval(this.animateMoose, Math.random()*5000+5000)
        })

    }

    componentWillUnmount(){
        if(this.animInterval){
            clearInterval(this.animInterval)
        }
    }

    animateMoose = () => {
        const {defaultOffset} = this.props
        const currentOffset = this.state.currentOffset
        const nextOffset = Math.random() * defaultOffset + 100
        const direction = nextOffset > currentOffset ? 1 : -1
        this.setState({currentOffset:nextOffset, direction})
    }


    render() {
        const {currentOffset,direction} = this.state
        console.log(currentOffset)
        const {width,height} = this.props
        return (
            <img src={Moose}
                 style={{
                     width,
                     height,
                     position: "absolute",
                     transform: `translate(${currentOffset}px,0) scaleX(${direction})`,
                     bottom: 30,
                     transition: 'all 3s ease-in-out'
                 }}
                 alt=""
            />
        )
    }
}

export default MooseAnimation
