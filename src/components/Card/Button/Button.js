import "./Button.css";
import { observer } from 'mobx-react-lite';

const Button = observer(({ id, count, incrementCount, decrementCount, changeCount }) => {
    function handleChange(event) {
        changeCount(id, event.target.value);
    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            changeCount(id, event.target.value);
        }
    }

    return count === 0 ? (
        <button type="button" className="button" onClick={() => incrementCount(id)}>
            купить
        </button>
    ) : (
        <div className="button-list">
            <button type="button" className="decrement-button" onClick={() => decrementCount(id)} >
                -
            </button>
            <input type="number" className="count-input" value={count} onChange={handleChange} onKeyDown={handleKeyDown} />
            <button type="button" className="increment-button" onClick={() => incrementCount(id)} >
                +
            </button>
        </div>
    );
});

export default Button;