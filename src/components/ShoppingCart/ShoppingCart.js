import './ShoppingCart.css';

function ShoppingCart() {
    return (
        <section className="shopping-cart">
            <form className="shopping-cart__form">
                <h1 className="shopping-cart__title">Добавленные товары</h1>
                <ul className="shopping-cart__list">
                </ul>
                <div className="shopping-cart__container">
                    <input
                        className="shopping-cart__input"
                        type=""
                        placeholder="+7(___) ___-__-__" />
                    <button className="shopping-cart__button">заказать</button>
                </div>

            </form>
        </section>
    )
}

export default ShoppingCart
