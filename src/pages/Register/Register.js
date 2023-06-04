import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Register.module.scss';
import request from '~/utils/httpRequest';
import Input from '~/Component/Input/';
import Button from '~/Component/Button';
import authImage from '~/assets/images/clock-1015428_1920.png';
import validate from '~/Component/Validate/validate';

const cx = classNames.bind(styles);

function Register() {
    const initialValue = {
        userName: '',
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: '',
    };
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const [data, setData] = useState(initialValue);

    const handleData = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(data));
        setIsSubmit(true);
    };

    // validate exist customer
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            axios
                .get('http://localhost:3000/customers', {
                    params: {
                        userName: data.userName,
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setErrors({ userName: 'Username is existed!' });
                    }
                })
                .catch((res) => {
                    insertCustomerAPI();
                });
        }
    }, [errors]);

    // send data create Customer
    const insertCustomerAPI = () => {
        request
            .postRegister('customers/register', data)
            .then((res) => {
                if (res) {
                    navigate('/');
                    registerSuccess();
                }
            })
            .catch((res) => {
                console.log(res);
            });
    };

    // Notification
    const registerSuccess = () =>
        toast.success('Register Successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <form className={cx('form-register')} onSubmit={(e) => handleSubmit(e)}>
                    <h1 className={cx('heading')}>Register Account</h1>
                    <Input
                        error={errors.userName}
                        label="Username"
                        name="userName"
                        type="text"
                        value={data.userName}
                        placeholder=" "
                        onChange={(e) => handleData(e)}
                    />
                    <Input
                        error={errors.email}
                        label="Email"
                        placeholder=" "
                        onChange={(e) => handleData(e)}
                        value={data.email}
                        name="email"
                        type="text"
                    />
                    <Input
                        error={errors.password}
                        label="Password"
                        onChange={(e) => handleData(e)}
                        value={data.password}
                        placeholder=" "
                        name="password"
                        type="password"
                    />
                    <Input
                        error={errors.firstName}
                        label="First Name"
                        onChange={(e) => handleData(e)}
                        value={data.firstName}
                        placeholder=" "
                        name="firstName"
                        type="text"
                    />
                    <Input
                        error={errors.lastName}
                        label="Last Name"
                        onChange={(e) => handleData(e)}
                        value={data.lastName}
                        name="lastName"
                        placeholder=" "
                        type="text"
                    />
                    <Input
                        error={errors.phoneNumber}
                        label="Phone Number"
                        onChange={(e) => handleData(e)}
                        value={data.phoneNumber}
                        placeholder=" "
                        name="phoneNumber"
                        type="text"
                    />
                    <Input
                        error={errors.address}
                        label="Address"
                        placeholder=" "
                        onChange={(e) => handleData(e)}
                        value={data.address}
                        name="address"
                        type="text"
                    />

                    <Button className="btn-register" large onClick={handleSubmit}>
                        Register
                    </Button>
                </form>

                <div className={cx('auth-img')}>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Register;
