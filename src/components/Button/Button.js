import React, {Component} from 'react';
// import './Button.css';

class Button extends Component {
    render() {
        return(
            <p className="col-auto">
               <button className="button" onClick={()=>this.props.handleClick(this.props.children)}>
                    {this.props.children}
               </button>
            </p>
        )
    }
}

export default Button