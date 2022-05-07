import React from "react";
import './styles.css';


class About extends React.Component {

    state = {

    }

    render() {
        return (
            <main>
                <p id="test">fksghdjs</p>
                <button onClick={() => change("test")}>click</button>
            </main>
        )
    }
}

newChange();
function change(id){
    let element = document.getElementById(id);
    setTimeout(() => {
        element.innerHTML = "awetaserf"
    }, 2000);
    
    console.log(element)
}



async function newChange(){
    await change();
    console.log('done')
}
export default About;