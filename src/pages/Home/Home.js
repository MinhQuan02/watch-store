import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import SliderHome from './SliderHome';
import imgAbout from '~/assets/images/alarm-4895498_preview_rev_1.png';
import Button from '~/Component/Button';
import { Link } from 'react-router-dom';
import ProductPreview from './ProductPreview';

const cx = classNames.bind(styles);

const product_item = [
    {
        id: 1,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 2,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 3,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 4,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 5,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 6,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 7,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
    {
        id: 8,
        name: 'Đồng hồ CITIZEN C7 40 mm Nam',
        brand: 'CITIZEN',
        image: 'https://cdn.tgdd.vn/Products/Images/7264/234656/citizen-nh8395-77e-nam-2-org.jpg',
        price: 6913000,
        machineType: 'Cơ tự động',
        faceThinness: '13mm',
        glassMaterial: 'Kính khoáng Mineral',
    },
];

function Home() {
    return (
        <div className={cx('wrapper')}>
            <SliderHome />
            <div className={cx('about-preview')}>
                <div className={cx('img-about')}>
                    <img src={imgAbout} alt="" />
                </div>
                <div className={cx('about-info')}>
                    <h1 className={cx('title')}>About</h1>
                    <p className={cx('description')}>
                        The reason customers stay loyal to brands is because of your company values. And the About Us
                        page is a perfect place for showing that. The reason customers stay loyal to brands is because
                        of your company values. And the About Us page is a perfect place for showing that.
                    </p>
                    <Link to="/about">
                        <Button className={cx('read-more-btn')}>Read more</Button>
                    </Link>
                </div>
            </div>

            <div className={cx('product-preview')}>
                <h1 className={cx('product-title')}>Our Product</h1>
                <div className={cx('product-content')}>
                    <ProductPreview dataProduct={product_item} />
                </div>
            </div>
        </div>
    );
}

export default Home;
