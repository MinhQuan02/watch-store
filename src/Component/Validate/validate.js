// Validate data
const validateRegister = (values) => {
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regexPhoneNumber = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    // validate username
    if (!values.userName) {
        errors.userName = 'Username is required!';
    } else if (values.userName.length < 5) {
        errors.userName = 'Username must be more than 4 characters!';
    } else if (values.userName.length > 20) {
        errors.userName = 'Username must be less than 20 characters!';
    }
    // validate email
    if (!values.email) {
        errors.email = 'Email is required!';
    } else if (!regex.test(values.email)) {
        errors.email = 'This is not a valid email format!';
    }
    // validate password
    if (!values.password) {
        errors.password = 'Password is required!';
    } else if (values.password.length < 6) {
        errors.password = 'Password be must than 6 characters!';
    } else if (!/[a-z]/.test(values.password)) {
        errors.password = 'The required password has at least one lower case!';
    } else if (!/[A-Z]/.test(values.password)) {
        errors.password = 'The required password has at least one upper case!';
    } else if (!/\d/.test(values.password)) {
        errors.password = 'The required password has at least one digit!';
    }

    if (!values.firstName) {
        errors.firstName = 'First Name is required!';
    }

    if (!values.lastName) {
        errors.lastName = 'Last Name is required!';
    }

    if (!values.phoneNumber) {
        errors.phoneNumber = 'Phone Number is required!';
    } else if (!regexPhoneNumber.test(values.phoneNumber)) {
        errors.phoneNumber = 'This is not a valid Phone Number format!';
    }

    if (!values.address) {
        errors.address = 'Address is required!';
    }

    return errors;
};

export default validateRegister;
