import { makeAutoObservable } from "mobx";
import { getProducts } from "../utils/api";

class CardListStore {

    cards = [];
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    _setLoading = (value) => {
        this.isLoading = value;
    }

    incrementCount = (id) => {
        const card = this.cards.find((item) => item.id === id);
        card.count++;
    }
    decrementCount = (id) => {
        const card = this.cards.find((item) => item.id === id);
        card.count--;
    }
    changeCount = (id, value) => {
        const card = this.cards.find((item) => item.id === id);
        if (card) {
            card.count = value;
        }
    }

    setCards = (page, pageSize) => {
        this._setLoading(true);
        setTimeout(() => {
            getProducts(page, pageSize)
                .then((data) => {
                    data.forEach((item) => {
                        const existingCard = this.cards.find((card) => card.id === item.id);
                        if (existingCard) {
                            Object.assign(existingCard, item);
                        } else {
                            item.count = 0;
                            this.cards.push(item);
                        }
                    });
                    this._setLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);
    }
}

const cardListStore = new CardListStore();
export default cardListStore;