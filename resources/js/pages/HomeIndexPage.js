import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import NavBar from '../components/NavBar'

import faculties from '../data/faculties.json'

class HomeIndexPage extends Component {
   render() {
       return (
         <div>

            <NavBar/>

            <div className="container">
                <h3>This Is React.JS</h3>

                <div className="card">
                <div className="card-header">
                    Hello
                </div>
                    <div className="card-body">
                        {
                            faculties.map((item)=>{
                                return (
                                    <li>
                                        {item.name}
                                         - <a href={item.telegram_url}>Telegram Link</a>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

         </div>


       );
   }
}


export default HomeIndexPage;

if (document.getElementById("root")) {

    const element = document.getElementById('root');

    const props = Object.assign({},element.dataset);

    ReactDOM.render(<HomeIndexPage {...props} />, document.getElementById("root"));

  }
