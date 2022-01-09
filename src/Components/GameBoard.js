import React from "react";

//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';
//import Container from 'react-bootstrap/Container';
import { FloatingLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

//import './App.css';
var lines = 0;

var text;
/*("div").on("keydown", "input", function (e) {
  if (e == 14) {
    ("div").append("<p>" + getText() + "</p>");
  }
});*/

function getText() {
  var x = document.getElementById("myText").value;
  //document.getElementsByTagName("div").append("<p>" + x + "</p>");

  var node = document.createElement("p");
  var textnode = document.createTextNode(x);
  node.appendChild(textnode);
  document.getElementById("usertext").append(node);
}

function GameBoard() {
  return (
    <div id="scrollbar" className="mx-auto px-3 my-auto py-3 bg-dark">
      <div className="d-flex justify-content-center bg-dark ">
        <h1 className="text-light bg-dark">Welcome to StoryMaker</h1>
      </div>
      <div className="mx-auto bg-dark text-light" id="usertext">

      </div>
      <div className="row mx-3 gx-5 fixed-bottom justify-content-center bg-dark">
        
        <div className="col-xs-6 align-self-center bg-dark">
          <FloatingLabel className="bg-dark text-light">
            Input the next line:
            <input className="bg-dark text-light" type="textArea" id="myText" onkeypress="getText" />
          </FloatingLabel>
        </div>

        <div className="col-xs-6 bg-dark">
          <Button className="py-auto" onClick={getText}>
            Activate Lasers
          </Button>
        </div>
      </div>
      

    </div>
  );
}

export default GameBoard;
