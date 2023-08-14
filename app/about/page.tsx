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



export async function generateStaticParam() {
    console.log("generateStaticParam")
    return [{id: '1'}, {id: '2'}]
}

async function Text({params}: { params: any }): Promise<React.JSX.Element> {
    const res: Response = await fetch('https://api.wrdan.com/hitokoto', {cache: 'no-store'});
    const word: WordType = await res.json();
    console.log('params:', params)
    return <>
        {word.text} <br/>
        {word.source} <br/>
        {word.author}
    </>
}

function About() {

    return (
        <div>
            <div style={{color: 'white'}}>
                Hi <br/>
                <Word/>
                {/*<Text/>*/}
                <Network/>
            </div>
        </div>
    );
}

export default About;