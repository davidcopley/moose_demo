import React from "react"
import Moose from "../image/moose.svg"

class MooseAnimation extends React.Component {
    state = {
        currentOffset: 350,
        direction: 1
    }

    componentDidMount() {
        this.setState({
            currentOffset: this.props.defaultOffset
        }, () => {
            this.animInterval = setInterval(this.animateMoose, Math.random() * 5000 + 2000)
        })

    }

    componentWillUnmount() {
        if (this.animInterval) {
            clearInterval(this.animInterval)
        }
    }

    animateMoose = () => {
        const {defaultOffset} = this.props
        const currentOffset = this.state.currentOffset
        const currentDirection = this.state.direction
        const nextOffset = Math.random() * defaultOffset + 500
        const direction = nextOffset > currentOffset ? 1 : -1
        if(currentDirection !== direction){
            this.setState({direction})
        }else {
            this.setState({currentOffset: nextOffset})
        }
    }


    render() {
        const {currentOffset, direction} = this.state
        const {width, height} = this.props
        return (
            <img
                src={Moose}
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
