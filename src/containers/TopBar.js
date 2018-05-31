import React from "react"
import MooseIcon from "../image/moose_icon.png"
import SearchIcon from "../image/search.svg"
import {IconButton, TextField, Checkbox, CircularProgress} from "material-ui";
import "./textReflection.css"
import axios from "axios"
import Loading from 'react-loading-bar'
import 'react-loading-bar/dist/index.css'




const isMobileDevice = () => {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};


export default class extends React.Component {
    state = {
        name: true,
        score: true,
        category: true,
        subcategory: true,
        description: true,
        meta: true,
        query: "",
        numResults:null,
        loading: false,
        error:false
    }

    handleCheckboxClick = (checkbox, isChecked) => {
        this.setState({[checkbox]: isChecked},this.search)
    }

    search = () => {
        this.setState({ loading: true, error: false })
        const {
            name,
            score,
            category,
            subcategory,
            description,
            meta,
            query
        } = this.state
        const url = "https://monash-moose-mvp-api.herokuapp.com/graphiql"
        axios.post(url, {
            query: `
            query{
              search(query:"${query}"){
                responses{
                  ${name?'name':''}
                  ${score?'score':''}
                  ${category?'category':''}
                  ${subcategory?'subcategory':''}
                  ${description?'description':''}
                  ${meta?'meta':''}
                }
              }
            }
        `
        }).then(result => {
            console.log(result)
            this.setState({ loading: false })
            if (result.data) {
                if (result.data.data) {
                    if (result.data.data.search) {
                        if (result.data.data.search.responses) {
                            this.setState({numResults:result.data.data.search.responses.length},this.props.setResults(result.data.data.search.responses))

                        }
                    }
                }
            }
        }).catch(err => {
            this.setState({ loading: false , error: true})
            console.log(err)
        })
    }

    render() {
        const {
            name,
            score,
            category,
            subcategory,
            description,
            meta,
            query,
            loading
        } = this.state
        return (
            <div
                style={{
                    width: '100%',
                    height: 100,
                    boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)',
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap:'wrap',
                    ...this.props.style
                }}
            >
                <div style={{position:"fixed",top:0}}><Loading show={loading} color={'#da2f47'} showSpinner={false}/></div>
                <div style={{display: "flex", alignItems: "center", left: 0}}>
                    <img src={MooseIcon} style={{width: 80, height: 80, marginLeft: 10}} alt=""/>
                    {isMobileDevice() ||
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
                        MOOSE <sup style={{fontSize: 15}}>demo</sup>
                </span>
                    }
                </div>
                <TextField
                    style={{minWidth: 500, fontSize: 40}}
                    inputStyle={{color: "rgba(70,70,70,0.7)"}}
                    hintText={"Ask me anything..."}
                    underlineShow={false}
                    value={query}
                    onChange={(e) => this.setState({query: e.target.value})}
                    onKeyDown={e=>{
                        if(e.keyCode === 13){
                            this.search()
                        }
                    }}
                />
                <IconButton
                    iconStyle={{width: '48px', height: '48px'}}
                    style={{width: '96px', height: '96px', padding: '24px'}}
                    onClick={() => this.search()}
                >
                    <img src={SearchIcon} style={{width: 50, height: 50, position: 'relative'}} alt=""/>
                </IconButton>
                <div style={{position: "fixed", top: 130, left: 10, width: 200, height: 'auto'}}>
                    {this.state.numResults!==null&&`Found ${this.state.numResults} results`}
                </div>
                <div style={{position: "fixed", top: 200, left: 10, width: 200, height: 'auto'}}>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('name', i)} checked={name} label={"name"}
                              labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('score', i)} checked={score} label={'score'}
                              labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('category', i)} checked={category}
                              label={'category'} labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('subcategory', i)} checked={subcategory}
                              label={'subcategory'} labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('description', i)} checked={description}
                              label={'description'} labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                    <Checkbox onCheck={(e, i) => this.handleCheckboxClick('meta', i)} checked={meta} label={'meta data'}
                              labelStyle={{letterSpacing: 1}} iconStyle={{fill: "#1C73D4"}}/>
                </div>
            </div>
        )
    }
}