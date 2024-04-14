import './Card.css';
import Button from './Button/Button';
import { observer } from 'mobx-react-lite';


const Card = observer(({ card, incrementCount, decrementCount, changeCount }) => {
    return (
        <li className="card">
            <img src={card.image_url} alt='img' className='card__img' />
            <div className='card__info-list'>
                <h2 className='card__title'>{card.title}</h2>
                <p className='card__description'>{card.description}</p>
            </div>
            <span className='card__price'>Цена: {card.price}&#x20bd;</span>
            <Button id={card.id} count={card.count} incrementCount={incrementCount} decrementCount={decrementCount} changeCount={changeCount} />
        </li>
    );
});

export default Card
