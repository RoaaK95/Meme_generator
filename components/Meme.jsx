import React from "react";

export default function Meme(){
    return(
       <main>
        <div className="form">
            <input 
                type="text"
                placeholder="Top Text"
                className="form--input"
            />
            <input 
                type="text"
                placeholder="Bottom Text"
                className="form--input"
            />
            <button 
               className="form--button"
            >
               Get a new meme image 🖼
            </button>
        </div>

        <div className="meme">
             <img src="./images/One-Does-Not-Simply-m1zju.jpg" className="meme--image" />
             <h2 className="meme--text top">Top text</h2>
             <h2 className="meme--text bottom">Bottom text</h2>
        </div>
        
       </main>
    )
}