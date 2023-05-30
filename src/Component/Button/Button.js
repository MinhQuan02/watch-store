import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({ children, outline = false, primary = false, icon, className, ...props }) {
    return (
        <button className={cx('wrapper-btn')}>
            {children}
            {icon}
        </button>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    outline: PropTypes.bool,
    primary: PropTypes.bool,
    icon: PropTypes.node,
};

export default Button;
