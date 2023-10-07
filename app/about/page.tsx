/*
{
    "ret": 0,
    "text":"当你全力以赴打算对一个人好的时候，你就变成了一个傻子。",
    "author":"张嘉佳",
    "source":"从你的全世界路过"
}
* */
import {Word, WordType} from "@/app/about/Word";
import React from "react";
import Network from "@/app/about/Network";

function About() {

    return (
        <div>
            <div style={{color: 'white'}}>
                Hi <br/>
                <Word/>
                <Network/>
            </div>
        </div>
    );
}

export default About;