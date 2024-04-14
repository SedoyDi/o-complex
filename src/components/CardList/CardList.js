import "./CardList.css";
import { useEffect } from "react";
import { observer } from 'mobx-react-lite';
import MyLoader from '../MyLoader/MyLoader';
import Card from "../Card/Card";
import cardListStore from '../../stores/CardListStore';


const CardList = observer(() => {

    const { isLoading, cards, setCards, incrementCount, decrementCount } = cardListStore;

    useEffect(() => {

        let page = 1;
        const pageSize = 20;

        setCards(page, pageSize);
        function heandleScroll() {
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
                setCards(page, pageSize);
                page++;
            }
        }

        window.addEventListener('scroll', heandleScroll);
        return () => {
            window.removeEventListener('scroll', heandleScroll);
        };
    }, []);

    return (
        <section className="card-list">
            <ul className="card-list__container">
                {cards &&
                    cards.map((card, key) => (
                        <Card key={key} card={card} incrementCount={incrementCount} decrementCount={decrementCount} />
                    ))}
            </ul>
            <div className="card-list__loading-container">
                {isLoading && <MyLoader />}
            </div>
        </section>
    );
});

export default CardList
