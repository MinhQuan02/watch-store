import classNames from 'classnames/bind';
import styles from './ProductPreview.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function ProductPreview({ data }) {
    return (
        <div className={cx('list-product')}>
            {data.map((pro, index) => {
                return (
                    <div className={cx('box')} key={pro.id}>
                        <div className={cx('box-img')}>
                            <img className={cx('img')} src={pro.image} alt="" />
                        </div>
                        <h3 className={cx('name')}>{pro.name}</h3>
                        <span className={cx('price')}>
                            {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'vnd' }).format(pro.price)}
                        </span>
                        <p className={cx('product-detail')}>
                            <span>
                                Machine Type: <strong>{pro.machineType}</strong>
                            </span>
                            <span>
                                Face Thinness: <strong>{pro.faceThinness}</strong>
                            </span>
                            <span>
                                Glass Material: <strong>{pro.glassMaterial}</strong>
                            </span>
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

ProductPreview.propTypes = {
    data: PropTypes.node.isRequired,
};

export default ProductPreview;
