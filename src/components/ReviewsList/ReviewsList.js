import './ReviewsList.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import MyLoader from '../MyLoader/MyLoader';
import ReviewCard from '../ReviewCard/ReviewCard';
import reviewsListStore from '../../stores/ReviewListStore';


const ReviewsList = observer(() => {

    const { isLoading, reviews, setReviews } = reviewsListStore;

    useEffect(() => {
        setReviews();
    }, []);

    return isLoading
        ? (<MyLoader />)
        : (<section className="reviews-list">
            <ul className="reviews-list__container">
                {reviews &&
                    reviews.map((review, key) => (
                        <ReviewCard key={key} review={review} />
                    ))}
            </ul>
        </section>
        );
});

export default ReviewsList
