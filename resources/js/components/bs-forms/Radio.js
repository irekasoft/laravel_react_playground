import React, { Component } from 'react'

class Radio extends Component {

  constructor(props){
    super(props);
    this.state = {
      isChecked: false,
    };
  }

  toggleCheckboxChange(){
    const { handleCheckboxChange, label } = this.props;

    handleCheckboxChange(label);
  }

  render() {

    return (
      <div className="form-check">
          <label className="form-check-label" style={{color:this.props.disabled ? 'gray' : 'black'}}>
          <input className="form-check-input" type="radio" name={this.props.name} label={this.props.label} checked={this.props.currentSelectedValue === this.props.label}
          onChange={()=>{this.props.handleCheckboxChange(this.props.label)}}
          disabled={this.props.disabled}
            />
          {this.props.label}
          </label>
        </div>
    );
  }
}

export { Radio };
