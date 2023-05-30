import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
import { FacebookIcon, InstagramIcon, LinkedInkIcon, TwitterIcon } from '~/assets/icons';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <footer className={cx('footer')}>
            <div className={cx('footer-company')}>
                <h2>Company</h2>
                <ul>
                    <li>
                        <Link to="/">About Us</Link>
                    </li>
                    <li>
                        <Link to="/">Our Services</Link>
                    </li>
                    <li>
                        <Link to="/">Privacy Police</Link>
                    </li>
                    <li>
                        <Link to="/">Affiliate Program</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('footer-getHelp')}>
                <h2>Get Help</h2>
                <ul>
                    <li>
                        <Link to="/">FAQ</Link>
                    </li>
                    <li>
                        <Link to="/">Shipping</Link>
                    </li>
                    <li>
                        <Link to="/">Returns</Link>
                    </li>
                    <li>
                        <Link to="/">Order Status</Link>
                    </li>
                    <li>
                        <Link to="/">Payment Options</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('footer-onlineShop')}>
                <h2>Online Shop</h2>
                <ul>
                    <li>
                        <Link to="/">Watch</Link>
                    </li>
                    <li>
                        <Link to="/">Accessory</Link>
                    </li>
                </ul>
            </div>
            <div className={cx('footer-followUs')}>
                <h2>Follow Us</h2>
                <span className={cx('footer-icon')}>
                    <FacebookIcon />
                </span>
                <span className={cx('footer-icon')}>
                    <TwitterIcon />
                </span>
                <span className={cx('footer-icon')}>
                    <InstagramIcon />
                </span>
                <span className={cx('footer-icon')}>
                    <LinkedInkIcon />
                </span>
            </div>
        </footer>
    );
}

export default Footer;
