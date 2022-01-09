import React from "react";

function getText() {
  var x = document.getElementById("myText").value;
  return x
}

function TextInput() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Input the next line:
          <input type="text" id="myText"/>
        </label>
      </form>
    </div>
  );
}

export default TextInput;
