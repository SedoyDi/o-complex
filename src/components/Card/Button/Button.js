import "./Button.css";
import { observer } from 'mobx-react-lite';

const Button = observer(({ id, count, incrementCount, decrementCount }) => {

    return count === 0 ? (
        <button type="button" className="button" onClick={() => incrementCount(id)}>
            купить
        </button>
    ) : (
        <div className="button-list">
            <button type="button" className="decrement-button" onClick={() => decrementCount(id)} >
                -
            </button>
            <input type="number" className="count-input" value={count} />
            <button type="button" className="increment-button" onClick={() => incrementCount(id)} >
                +
            </button>
        </div>
    );
});

export default Button
