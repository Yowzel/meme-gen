import React from "react"

export default function Header() {
    return (<header className="header">

        <div className="title">
            <span>
                <img className="title--image" src="/images/memeface.png" alt="memeface"></img>
            </span>
            <span>
                <h2 className="title--info">Meme Generator</h2>
            </span>
        </div>
        
        <p className="about">React Course - Project 3</p>
    </header>)
}