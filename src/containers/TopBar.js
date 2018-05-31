import React from "react"
import MooseIcon from "../image/moose_icon.png"
import SearchIcon from "../image/search.svg"
import {IconButton, TextField} from "material-ui";
import "./textReflection.css"
export default (props) => {
    return (
        <div
            style={{
                width: '100%',
                height: 100,
                boxShadow: '1px 1px 1px 1px rgba(0,0,0,0.2)',
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <div style={{display: "flex", alignItems: "center", position: "absolute", left: 0}}>
                <img src={MooseIcon} style={{width: 80, height: 80, marginLeft: 10}} alt=""/>
                <span
                    style={{
                        fontFamily: 'Yellowtail',
                        fontSize: 50,
                        color: "#da2f47",
                        display: 'inline-block',
                        transform: 'rotate(-1deg)',
                        marginLeft: 10
                    }}
                    className={'text-reflect'}
                >
                        MOOSE <sup style={{fontSize:15}}>demo</sup>
                </span>
            </div>
            <TextField
                style={{minWidth: 500, fontSize: 40}}
                inputStyle={{color: "rgba(70,70,70,0.7)"}}
                hintText={"Ask me anything..."}
                underlineShow={false}
            />
            <IconButton
                iconStyle={{width: '48px', height: '48px'}}
                style={{width: '96px', height: '96px', padding: '24px'}}
            >
                <img src={SearchIcon} style={{width: 50, height: 50, position: 'relative'}} alt=""/>
            </IconButton>
        </div>
    )
}