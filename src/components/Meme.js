import React from "react"


export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(function() {
        console.log("effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
    }, [])


    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange (event) {
        const{name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,
                [name] : value
            }
        })
    }

    return (
        <main>
            <div>
                <div className="meme--form">
                    <input type="text" className="form--inputs" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange}/>
                    <input type="text" className="form--inputs" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange}/>
                    <button onClick={getMemeImage} className="form--button">Get a new meme image</button>
                
                </div>
            </div>

            <div className="meme--container">
                <img className="meme--image" src={meme.randomImage} alt="test"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
            
        </main>
        
    )
}