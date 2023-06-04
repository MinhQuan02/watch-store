import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

import authImage from '~/assets/images/clock-1015428_1920.png';
import Input from '~/Component/Input';
import Button from '~/Component/Button';

const cx = classNames.bind(styles);

function Login() {
    const initialValue = {
        userName: '',
        password: '',
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

    // Check required
    const validate = (values) => {
        const errors = {};
        if (!values.userName) {
            errors.userName = 'Username is required!';
        }
        if (!values.password) {
            errors.password = 'Password is required!';
        }
        return errors;
    };

    // Check exist or not
    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmit) {
            axios
                .post('http://localhost:3000/customers/login', data)
                .then((res) => {
                    if (res.status === 200) {
                        navigate('/');
                        loginSuccess();
                    }
                })
                .catch((res) => {
                    loginFailed();
                });
        }
    }, [errors]);

    // Notification success
    const loginSuccess = () =>
        toast.success('Login Successfully!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });

    // Notification failed
    const loginFailed = () =>
        toast.error('Login Fail ! (username or password incorrect!)', {
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
                <form className={cx('form-login')} onSubmit={(e) => handleSubmit(e)}>
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
                        error={errors.password}
                        label="Password"
                        placeholder=" "
                        onChange={(e) => handleData(e)}
                        value={data.password}
                        name="password"
                        type="password"
                    />

                    <Button className="btn-login" large onClick={handleSubmit}>
                        Login
                    </Button>
                </form>

                <div className={cx('auth-img')}>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Login;
