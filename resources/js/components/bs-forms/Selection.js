import React, { Component } from 'react'
import uuid from 'uuid/v4'

class Selection extends Component {

  constructor(props){
    super(props);

    this.state = {
      dataSource: [],
    };

  }

  componentDidMount(){
    this.setState({
      dataSource: this.props.dataSource,
    });
  }

  componentWillReceiveProps(props){

    this.setState({
      dataSource: props.dataSource,
    });
  }

  render() {
    return (
      <div className="form-group">
        { this.props.label && (
            <label htmlFor="">{this.props.label}</label>
        )
        }
        <select className={"form-control " + this.props.className} value={this.props.value} onChange={this.props.onChange} name={this.props.name} disabled={this.props.disabled} >
          <option value={this.props.default_value ? this.props.default_value : -1} >{this.props.placeholder}</option>
          {
            this.state.dataSource.map((item,index)=>{
              return (
              <React.Fragment key={uuid()}>
              <option value={item.value ? item.value : index} >{item.label}</option>
              </React.Fragment>
            )
            })
          }
        </select>
      </div>
    );
  }


}

export { Selection };
