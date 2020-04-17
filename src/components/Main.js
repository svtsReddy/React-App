import React from 'react';
import {Link} from 'react-router-dom';
import AlertExample from "./AlertExample"

class Main extends React.Component{
    render(){
        return(
            <div>
                <AlertExample/>
                <Link to="/login">Click here to go back to Login page</Link>
                </div>
        );
    }
}
export default Main;

