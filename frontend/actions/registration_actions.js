import * as RegistrationApiUtil from '../utils/registration_api_util';

export const RECEIVE_REGISTRATION = 'RECEIVE_REGISTRATION';
export const REMOVE_REGISTRATION = 'REMOVE_REGISTRATION';
export const RECEIVE_REGISTRATION_ERRORS = 'RECEIVE_REGISTRATION_ERRORS';
// export const CLEAR_REGISTRATION_ERRORS = 'CLEAR_REGISTRATION_ERRORS';

const receiveRegistration = (event) => ({
    type: RECEIVE_REGISTRATION,
    event
});

const removeRegistration = (registrationId, event) => ({
    type: REMOVE_REGISTRATION,
    registrationId,
    event
});

const receiveRegistrationErrors = (errors) => ({
    type: RECEIVE_REGISTRATION_ERRORS,
    errors
})

// const clearRegistrationErrors = () => ({
//     type: CLEAR_REGISTRATION_ERRORS
// })

export const createRegistration = (registration) => dispatch => (
    RegistrationApiUtil.createRegistration(registration)
        .then((registration) => dispatch(receiveRegistration(registration)), e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);

export const deleteRegistration = (registrationId) => dispatch => (
    RegistrationApiUtil.deleteRegistration(registrationId)
        .then((registrationId) => dispatch(removeRegistration(registrationId)), e => dispatch(receiveRegistrationErrors(e.responseJSON)))
);