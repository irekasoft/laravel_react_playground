import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar'

import uuid from 'uuid/v4'

import faculties from '../data/faculties.json'

class HomeIndexPage extends Component {
   render() {
       return (
         <React.Fragment>
            <NavBar/>

            <div className="container py-2">

                <h3>This Is React.JS</h3>
                <div className="card">

                    <div className="card-body grid-container">
                        {
                            faculties.map((item)=>{
                                return (
                                    <div className="grid-item" key={uuid()}>
                                        {item.name}<br/>
                                         <a href={item.telegram_url}>Telegram Link</a>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

            </div>
         </React.Fragment>

       );
   }
}


export default HomeIndexPage;

if (document.getElementById("root")) {

    const element = document.getElementById('root');

    const props = Object.assign({},element.dataset);

    ReactDOM.render(<HomeIndexPage {...props} />, document.getElementById("root"));

}
