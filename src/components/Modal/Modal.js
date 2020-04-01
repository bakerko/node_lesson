import React, {Component} from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import Button from "../Button/Button";

export default class Modal extends Component {

    render() {

        const {header, text, actions, isOpen, onClose} = this.props;


        let curClassName='modal fade';
        let curStyle={display: 'none'};
        if(isOpen){
            curClassName='modal fade show';
            curStyle={display: 'block', zIndex: 2};
        }

        console.log(curClassName);
        console.log(curStyle);

        const innerStyle={position: 'fixed', left: 0, right: 0, backgroundColor: '#000', opacity: '0.3', zIndex: 1, width: '100%', height: '100%'};

        return (
            <div className={curClassName} id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={curStyle}>

                <div  style={innerStyle}
                      onClick={()=>onClose()}
                >
                </div>

                <div className="modal-dialog modal-dialog-centered " role="document" style={{zIndex: 2}}>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">{header}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"
                                onClick={()=>onClose()}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {text}
                        </div>
                        <div className="modal-footer">
                            {actions}
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

Modal.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.array.isRequired,
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    actions: PropTypes.array.isRequired
};

Modal.defaultProps = {
    isOpen : false
};
