import "./CardList.css";

import { observer } from 'mobx-react-lite';
import MyLoader from '../MyLoader/MyLoader';
import { getProducts } from "../../utils/api";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CardList = observer(() => {
    const [isLoading, setIsLoading] = useState(false);
    const [cards, setCards] = useState([]);
    useEffect(() => {
        setIsLoading(true);
        setTimeout(() => {
            getProducts(1, 10)
                .then((data) => {
                    setCards(data);
                    setIsLoading(false);
                })
                .catch((err) => console.log(err));
        }, 3000);

    }, []);
    return (
        <section className="card-list">
            <ul className="card-list__container">
                {cards &&
                    cards.map((card, key) => (
                        <Card key={key} card={card} />
                    ))}
            </ul>
            <div className="card-list__loading-container">
                {isLoading && <MyLoader />}
            </div>
        </section>
    );
});

export default CardList
