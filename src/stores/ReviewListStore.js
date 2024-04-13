import { makeAutoObservable } from "mobx";
import { getReviews } from '../utils/api';

class ReviewsListStore {

    isLoading = false;
    reviews = [];
    constructor() {
        makeAutoObservable(this);
    }

    _setLoading = (value) => {
        this.isLoading = value;
    }

    setReviews = () => {
        this._setLoading(true);
        setInterval(() => {
            getReviews()
                .then((data) => {
                    if (data.length > this.reviews.length) {
                        this.reviews = data;
                        this._setLoading(false);
                    }
                    this._setLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }
}

const reviewsListStore = new ReviewsListStore();
export default reviewsListStore;