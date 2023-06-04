import classNames from 'classnames/bind';
import styles from './Input.module.scss';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Input = forwardRef((props, ref) => {
    return (
        <div className={cx(!props.error ? 'input-item' : 'input-error')}>
            <span className={cx('error-message')}>{props.error}</span>
            <input className={cx('input')} ref={ref} {...props} />
            <span className={cx('description-input')}>{props.label}</span>
        </div>
    );
});

export default Input;
