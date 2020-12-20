import React, {Component} from 'react';
// import './Button.css';

class EqualsButton extends Component {
    render() {
        return(
            <p className="col-auto">
               <button className="button btn--yellow" onClick={()=>this.props.handleSolve(this.props.children)}>
                    {this.props.children}
               </button>
            </p>
        )
    }
}

export default EqualsButton