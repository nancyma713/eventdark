import { connect } from 'react-redux';
import React from 'react';
import { closeModal } from '../../actions/modal_actions';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}>
                {/* {RegisterContainer} */}
            </div>
        </div>
    )

}

const msp = (state) => ({
    modal: state.ui.modal
});

const mdp = (dispatch) => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(msp, mdp)(Modal);