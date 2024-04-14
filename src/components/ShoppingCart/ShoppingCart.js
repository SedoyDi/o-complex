import './ShoppingCart.css';
import InputMask from 'react-input-mask';
import { observer } from 'mobx-react-lite';
import cardListStore from '../../stores/CardListStore';
import { useEffect, useState } from 'react';

const ShoppingCart = observer(() => {
    const { cards } = cardListStore;
    const cardsJSON = JSON.stringify(cards);

    const [items, setItems] = useState([])

    function changeCount() {
        const updatedItems = cards.reduce((acc, card) => {
            if (card.count > 0) {
                const existingItemIndex = acc.findIndex((item) => item.id === card.id);
                if (existingItemIndex !== -1) {
                    acc[existingItemIndex] = card;
                } else {
                    acc.push(card);
                }
            }
            return acc;
        }, []);

        setItems(updatedItems);
    }

    useEffect(() => {
        changeCount();
        console.log(items)
    }, [cardsJSON]);

    return (
        <section className="shopping-cart">
            <form className="shopping-cart__form">
                <h2 className="shopping-cart__title">Добавленные товары</h2>
                <ul className="shopping-cart__list">
                    {items && items.map((item) => (
                        <div>
                            <h3>{item.title}</h3>
                            <span>x{item.count}</span>
                            <span>{item.count * item.price}&#x20bd;</span>
                        </div>
                    ))}
                </ul>
                <div className="shopping-cart__container">
                    <InputMask
                        className="shopping-cart__input"
                        mask="+7 (999) 999 99-99"
                        alwaysShowMask={true}
                    />
                    <button className="shopping-cart__button">заказать</button>
                </div>
            </form>
        </section>
    );
});

export default ShoppingCart
