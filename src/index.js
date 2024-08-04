import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import one from "./images/one.jpeg";
import two from "./images/two.jpeg";
import three from "./images/three.jpeg";
import four from "./images/four.jpeg";
import five from "./images/five.jpeg";
import six from "./images/six.jpeg";
import seven from "./images/seven.jpeg";
import eight from "./images/eight.jpeg"

const root = ReactDOM.createRoot(document.getElementById("root"))

function Header() {
    return (
        <div className="head">
            <u>
            <h1>Image Gallery</h1></u>
        </div>
    )
}

function Image(props) {
    return (
        <div className="cont">
            <div className="imagespa">
                <img src={props.img} alt="#"/>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

var img = [
    {
        img: eight,
        name:"MOUNTAIN LAKE"

    },
    {
        img: one,
        name:"SUNSET FIELD"
    },
    {
        img: two,
        name:"FLOWER VALLEY"
    },
    {
        img: three,
        name:"SUNRISE HILL"
    },
    {
        img: four,
        name:"MOUNTAIN PATH"
    },
    {
        img: five,
        name:"ALPINE LAKE"
    },
    {
        img: six,
        name:"FOREST PATHS"
    },
    {
        img: seven,
        name:"TERRACED HILLS"
    }
]



root.render(
    <div>
        <Header></Header>
        <div className="container">
        {
            img.map(function (items) {
                return <Image img={items.img} name = {items.name}></Image>
            })
        }
        </div>
    </div>
)