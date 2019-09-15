import React, { Component } from 'react'

class InlineTextInput extends Component {
  render() {
    return (
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text" style={{color:this.props.disabled ? 'gray' : 'black'}}>{this.props.header}</div>
        </div>
        <input type="text" className="form-control col-8" id="inlineFormInputGroup" placeholder={ this.props.placeholder} value={this.props.value} 
        onChange={(e)=>{this.props.onChangeText(e.target.value)}}                
        disabled={ this.props.disabled }
        />
      </div>
    );
  }
}


export { InlineTextInput };
