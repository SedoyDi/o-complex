import './ShoppingCart.css';
import InputMask from 'react-input-mask';

function ShoppingCart() {
    return (
        <section className="shopping-cart">
            <form className="shopping-cart__form">
                <h1 className="shopping-cart__title">Добавленные товары</h1>
                <ul className="shopping-cart__list">
                </ul>
                <div className="shopping-cart__container">
                    <InputMask className="shopping-cart__input" mask="+7 (999) 999 99-99" alwaysShowMask={true} />
                    <button className="shopping-cart__button">заказать</button>
                </div>
            </form>
        </section>
    )
}

export default ShoppingCart
