import React, {Component} from 'react';
import TopBar from "./containers/TopBar"
import Mountain from "./image/mountains.svg"
import MooseAnimation from "./components/MooseAnimation"
import ResultBlock from "./components/ResultBlock"
import {exampleResult} from "./mockData/example_result"

class App extends Component {

    state = {
        results: []
    }

    setResults = results => {
        this.setState({results})
    }

    componentDidMount() {
        window.addEventListener('resize', () => {
            this.forceUpdate()
        })
    }

    renderMountains = () => ([
        <img src={Mountain} style={{position: "relative", width: "10vw", height: "10vw", bottom: -50}} alt=""/>,
        <img src={Mountain} style={{position: "relative", width: "20vw", height: "20vw", bottom: -50}} alt=""/>,
        <img src={Mountain} style={{position: "relative", width: "30vw", height: "30vw", bottom: -50}} alt=""/>,
        <img src={Mountain} style={{position: "relative", width: "20vw", height: "20vw", bottom: -50}} alt=""/>,
        <img src={Mountain} style={{position: "relative", width: "30vw", height: "30vw", bottom: -50}} alt=""/>,
        <img src={Mountain} style={{position: "relative", width: "15vw", height: "15vw", bottom: -50}} alt=""/>,
    ])

    renderMooose = () => ([
        <MooseAnimation width={'10vh'} height={'10vh'} defaultOffset={window.innerWidth / 4}/>,
        <MooseAnimation width={'11vh'} height={'11vh'} defaultOffset={window.innerWidth / 2}/>,
        <MooseAnimation width={'8vh'} height={'8vh'} defaultOffset={window.innerWidth / 4 * 3}/>,
        <MooseAnimation width={'13vh'} height={'13vh'} defaultOffset={window.innerWidth - 200}/>,
    ])

    renderResults = () => {
        const resultBlocks = this.state.results.map(result => {
            console.log(result)
            const name = result['name']
            const description = result['description']
            const category = result['category']
            const subcategory = result['subcategory']
            if (name && description && category && subcategory) {
                return (
                    <ResultBlock
                        key={name}
                        name={name}
                        category={category}
                        subcategory={subcategory}
                        description={description}
                    />
                )
            }
            return null
        })
        return resultBlocks
    }

    render() {
        return (
            <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TopBar setResults={this.setResults}/>
                {this.renderResults()}
                <div
                    style={{
                        flex: 1,
                        position: "fixed",
                        bottom: -30,
                        display: "flex",
                        alignItems: "flex-end",
                        background: 'linear-gradient(#fff, #b3e3ff)',
                        zIndex: -10
                    }}
                >
                    {this.renderMountains()}
                    {this.renderMooose()}
                </div>
            </div>
        );
    }
}

export default App;
