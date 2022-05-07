import React from "react";
import './styles.css'
function Chatbox() {
    return (
        <div className="chatbox">
            <div className="onchat" style={{ display: 'none' }}>
                <div className="chat-title">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <h5 style={{ color: 'red', fontWeight: 'bold' }}>Paradise Hotel</h5>
                            </div>
                            <div className="col-md-5" >
                                <img src={require('../images/down.png')} onClick={onCloseChat} />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-chat">

                </div>
                <div className="chat-bottom">
                    {/* <img src={require('https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp')} alt="avatar 3" style="width: 40px; height: 100%;"/> */}
                    <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                        <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1 inputChat"
                            placeholder="Type message" />
                        <a class="ms-3" href="#!"><img style={{ width: '20px' }} src={require('../images/send.png')}/></a>
                    </div>
                </div>
            </div>
            <img style={{ width: '100%' }} src={require('../images/chat.png')} onClick={onChat} />
            <img style={{ width: '50px', display: 'none' }} src={require('../images/cross.png')} onClick={onCloseChat} />
        </div>
    );
}
let chatOn = false;
let chatRecord = ["hello"];
function onChat() {
    if (!chatOn) {
        let chat = document.getElementsByClassName('onchat')[0];
        chat.style.display = "block";
        let box = document.getElementsByClassName('chatbox')[0];
        box.style.height = "500px";
        box.style.width = "300px";
        chat.style.height = "500px";
        chat.style.width = "300px";
        chat.style.backgroundColor = "#ccc";
        box.childNodes[1].style.display = "none";
        // box.childNodes[2].style.display = "block";
        chatOn = true;
        box.classList.add('slideup');
        setTimeout(() => {
            box.classList.remove('slideup');
        }, 500);
    }
}


function onCloseChat() {
    console.log(chatOn);

    let chat = document.getElementsByClassName('onchat')[0];
    chat.style.display = "none";
    let box = document.getElementsByClassName('chatbox')[0];
    box.style.height = "50px";
    box.style.width = "50px";
    chat.style.removeProperty('background-color');
    box.childNodes[1].style.display = "block";
    // box.childNodes[2].style.display = "none";
    chatOn = false;


}


export default Chatbox;