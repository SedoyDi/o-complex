import './ShoppingCart.css';
import InputMask from 'react-input-mask';
import { observer } from 'mobx-react-lite';
import cardListStore from '../../stores/CardListStore';
import popUpStore from '../../stores/PopUpStore';
import { useEffect, useState } from 'react';
import { createOrder } from '../../utils/api';

const ShoppingCart = observer(() => {

    const [items, setItems] = useState([])
    const [maskFilled, setMaskFilled] = useState(false);

    const { cards } = cardListStore;
    const { setIsOpen } = popUpStore;
    const cardsJSON = JSON.stringify(cards);

    const maskClassName = maskFilled
        ? "shopping-cart__input valid"
        : "shopping-cart__input"



    const handleMaskCheck = (event) => {
        if (event.target.value.replace(/[^0-9]/g, '').length === 11) {
            setMaskFilled(true);
        } else {
            setMaskFilled(false);
        }
    };

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

    function handleSubmit(event) {
        event.preventDefault();
        const result = {
            phone: event.target[0].value.replace(/\D/g, ""),
            cart: items.map((item) => {
                return {
                    id: item.id,
                    quantity: item.count
                }
            })
        };

        createOrder(result)
            .then((data) => setIsOpen(true))
            .catch((error) => console.error(error));

    }

    useEffect(() => {
        changeCount();
        console.log(items)
    }, [cardsJSON]);

    return (
        <section className="shopping-cart">
            <form className="shopping-cart__form" onSubmit={handleSubmit}>
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
                        className={maskClassName}
                        mask="+7 (999) 999 99-99"
                        alwaysShowMask={true}
                        onChange={handleMaskCheck}
                    />
                    <button type='submit' className="shopping-cart__button" disabled={!maskFilled || !items.length}>заказать</button>
                </div>
            </form>
        </section>
    );
});

export default ShoppingCart
