import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar';

import { TextInput } from '../components/bs-forms'

class HomeSecondPage extends Component {

    constructor(props){
        super(props);

        this.state = {
            title: 'Form Biasa',
        };

    }

   render() {
       return (
           <React.Fragment>
           <div>
               <NavBar/>



            <div className="container">
                <h1>{this.state.title}</h1>
                <TextInput label="Nama" isInvalid={false}/>
                <TextInput label="IC"/>
                <TextInput label="Nama"/>
                <TextInput label="Nama"/>

                <a onClick={()=>{  }} className="btn btn-primary">Btn</a>
            </div>



           </div>
           </React.Fragment>
       );
   }
}


export default HomeSecondPage;


if (document.getElementById("root")) {

    const element = document.getElementById('root');

    const props = Object.assign({},element.dataset);

    ReactDOM.render(<HomeSecondPage {...props} />, document.getElementById("root"));

}

