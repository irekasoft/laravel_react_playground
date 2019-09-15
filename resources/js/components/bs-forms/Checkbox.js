import React, { Component } from 'react';

class Checkbox extends Component {

  constructor(props){
    super(props);

    this.state = {
      isChecked: props.checked,
    };

  }

  toggleCheckboxChange(){
    const { handleCheckboxChange, label } = this.props;
    this.setState(({ isChecked }) => (
      {
        isChecked: !isChecked,
      }
    ));
    handleCheckboxChange(label);
  }

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="form-check">
        <label className="form-check-label" style={{color:this.props.disabled ? 'gray' : 'black'}}>
          <input
            type="checkbox"
            className="form-check-input"
            value={label}
            checked={isChecked}
            onChange={()=>{this.toggleCheckboxChange()}}
            disabled={this.props.disabled}
        />
        {label}
        </label>
      </div>
    );
  }
}


export { Checkbox };
