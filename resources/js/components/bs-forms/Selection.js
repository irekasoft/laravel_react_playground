import React, { Component } from 'react'

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
        <label htmlFor="">{this.props.label}</label>      <select className="form-control col-md-6" value={this.props.value} onChange={this.props.onChange}>
          <option value="-1">{this.props.placeholder}</option>
          {
            this.state.dataSource.map((item,index)=>{
              return (
              <React.Fragment>
              <option value={index}>{item.name}</option>
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
