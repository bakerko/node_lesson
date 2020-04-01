import React, {Component} from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import Modal from "../Modal/Modal";

export default class Button extends Component {


    render() {


        const {id, onClick, text, backgroundColor, color, buttonClassName} = this.props;
        const buttonStyle= {backgroundColor: backgroundColor, color: color};


        return (
            <div>
                <button
                    className={buttonClassName}
                    style={buttonStyle}
                    onClick = {()=>onClick({id})}
                >
                    {text}
                </button>
            </div>
        );
    }
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string.isRequired,
    color: PropTypes.string,
    buttonClassName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
    color : 'pink'
};