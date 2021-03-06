import React, {Component} from 'react';
import TopBar from "./containers/TopBar"
import Mountain from "./image/mountains.svg"
import MooseAnimation from "./components/MooseAnimation"
import ResultBlock from "./components/ResultBlock"

class App extends Component {

    state = {
        results: null
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
        <img key='mnt1' src={Mountain} style={{position: "relative", width: "10vw", height: "10vw", bottom: -50}} alt=""/>,
        <img key='mnt2' src={Mountain} style={{position: "relative", width: "20vw", height: "20vw", bottom: -50}} alt=""/>,
        <img key='mnt3' src={Mountain} style={{position: "relative", width: "30vw", height: "30vw", bottom: -50}} alt=""/>,
        <img key='mnt4' src={Mountain} style={{position: "relative", width: "20vw", height: "20vw", bottom: -50}} alt=""/>,
        <img key='mnt5' src={Mountain} style={{position: "relative", width: "30vw", height: "30vw", bottom: -50}} alt=""/>,
        <img key='mnt6' src={Mountain} style={{position: "relative", width: "15vw", height: "15vw", bottom: -50}} alt=""/>,
    ])

    renderMooose = () => ([
        <MooseAnimation key='ms1' width={'10vh'} height={'10vh'} defaultOffset={window.innerWidth / 4}/>,
        <MooseAnimation key='ms2' width={'12vh'} height={'12vh'} defaultOffset={window.innerWidth / 2}/>,
        <MooseAnimation key='ms3' width={'6vh'} height={'6vh'} defaultOffset={window.innerWidth / 3}/>,
        <MooseAnimation key='ms4' width={'11vh'} height={'11vh'} defaultOffset={window.innerWidth / 1.5}/>,
        <MooseAnimation key='ms5' width={'8vh'} height={'8vh'} defaultOffset={window.innerWidth / 4 * 3}/>,
        <MooseAnimation key='ms6' width={'13vh'} height={'13vh'} defaultOffset={window.innerWidth - 200}/>,
    ])

    renderResults = () => {
        if(this.state.results == null){
            return(
                <div style={{width:'100vh',height:'calc(100vh - 200px)',display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span
                        style={{
                            fontFamily: 'Yellowtail',
                            fontSize: 50,
                            color: "#da2f47",
                            display: 'inline-block',
                            transform: 'rotate(-1deg)',
                            marginLeft: 10
                        }}
                        className={'shine'}
                    >
                        Start asking questions!
                    </span>
                </div>
            )
        }
        const results = this.state.results
        if(results.length === 0){
            return(
                <div style={{width:'100vh',height:'calc(100vh - 100px)',display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <span
                        style={{
                            fontFamily: 'Yellowtail',
                            fontSize: 50,
                            color: "#da2f47",
                            display: 'inline-block',
                            transform: 'rotate(-1deg)',
                            marginLeft: 10
                        }}
                        className={'shine'}
                    >
                        Sorry, 0 results...
                    </span>
                </div>
            )
        }
        const resultBlocks = results.map((result,i) => {
            const name = result['name']
            const description = result['description']
            const category = result['category']
            const subcategory = result['subcategory']
            const unitcode = result['unitcode']
            let meta = result['meta']
            if(meta){
                meta = JSON.parse(meta)
            }
            return (
                <ResultBlock
                    key={`${name}+${category}+${subcategory}+${description}+${meta}+${i}`}
                    name={name}
                    unitcode={unitcode}
                    category={category}
                    subcategory={subcategory}
                    description={description}
                    meta={meta}
                />
            )
        })
        return resultBlocks
    }

    render() {
        return (
            <div className="App" style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                <TopBar setResults={this.setResults} style={{zIndex:10}}/>
                {this.renderResults()}
                {this.state.results&&this.state.results.length>0&&<div style={{height:200}}/>}
                <div
                    style={{
                        flex: 1,
                        position: "fixed",
                        bottom: -30,
                        display: "flex",
                        alignItems: "flex-end",
                        background: 'linear-gradient(#fff, #b3e3ff)',
                        zIndex: -10,
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
