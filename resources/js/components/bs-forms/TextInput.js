import React, { Component } from 'react'

class TextInput extends Component {

  isInvalid(){
    return this.props.isInvalid ?  "is-invalid" : "";
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="my_id" className="control-label">{this.props.label}</label>
        <input className={"form-control " + this.isInvalid()} name="my_id" type="text" id="my_id" placeholder={ this.props.placeholder } value={this.props.value}
        onChange={(e)=>{this.props.onChangeText(e.target.value)}}

        disabled={ this.props.disabled } />
      </div>
    );
  }
}

export { TextInput };
