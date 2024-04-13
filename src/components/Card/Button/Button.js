import "./Button.css";
import { observer } from 'mobx-react-lite';

const Button = observer(() => {
    const isTest = false;
    return isTest
        ? (<button className='button'>купить</button >)
        : (
            <div className='button-list'>
                <button className='decrement-button'>-</button >
                <input type='number' className='count-input' />
                <button className='increment-button'>+</button >
            </div >
        );
});

export default Button
