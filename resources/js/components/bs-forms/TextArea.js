import React, { Component } from 'react'

class TextArea extends Component {

  isInvalid(){
    return this.props.isInvalid ? "is-invalid": "";
  }

  render() {
    return (
      <div className="form-group">
        <label htmlFor="phone_no_office" className="control-label"><h6>{this.props.label}</h6></label>
        <textarea className={"form-control " + this.isInvalid()} name="phone_no_office" type="text" rows={this.props.rows ? this.props.rows : "6"}
        placeholder={ this.props.placeholder } value={this.props.value}
        onChange={(e)=>{this.props.onChangeText(e.target.value)}}
        disabled={ this.props.disabled }>
        </textarea>
      </div>
    );
  }
}

export { TextArea };
