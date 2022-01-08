import React from "react";

function TextInput() {
  return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          Input the next line:
          <input type="text" />
        </label>
      </form>
    </div>
  );
}

export default TextInput;
