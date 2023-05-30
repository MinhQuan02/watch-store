import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const slide_item = [
    {
        id: 1,
        nameImage: 'https://cdn.pixabay.com/photo/2018/03/11/09/25/time-3216282_1280.jpg',
    },
    {
        id: 2,
        nameImage: 'https://cdn.pixabay.com/photo/2022/07/01/06/11/watch-7295019_1280.jpg',
    },
    {
        id: 3,
        nameImage: 'https://cdn.pixabay.com/photo/2018/09/03/08/35/wrist-watch-3650658_1280.jpg',
    },
    {
        id: 4,
        nameImage: 'https://cdn.pixabay.com/photo/2017/01/05/17/11/watch-1955856_1280.jpg',
    },
];

function SliderHome() {
    const [currentIndex, setCurrentIndex] = useState(1);

    const handleSliderPrev = () => {
        if (currentIndex === 1) {
            setCurrentIndex(slide_item.length);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleSliderNext = () => {
        if (currentIndex === slide_item.length) {
            setCurrentIndex(1);
        } else {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div className={cx('slider')}>
            {slide_item.map((slide) => {
                return (
                    <img
                        key={slide.id}
                        className={cx(currentIndex === slide.id ? 'active' : 'slide')}
                        src={slide.nameImage}
                        alt="slide"
                    />
                );
            })}
            <button className={cx('btn-prev')} onClick={handleSliderPrev}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <button className={cx('btn-next')} onClick={handleSliderNext}>
                <FontAwesomeIcon icon={faArrowRight} />
            </button>
        </div>
    );
}

export default SliderHome;
