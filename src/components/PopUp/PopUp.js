import './PopUp.css';
import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import icon from "../../images/popup-icon.svg";
import popUpStore from '../../stores/PopUpStore';

const PopUp = observer(() => {
    const { isOpen, setIsOpen } = popUpStore;
    const className = isOpen
        ? "popup active"
        : "popup";

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') {
                setIsOpen(false);
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        };
    }, []);

    return (
        <div className={className} onClick={() => setIsOpen(false)}>
            <div className="popup__container">
                <img src={icon} alt="icon" className="popup__icon" />
                <h2 className='popup__title'>Спасибо !!!</h2>
            </div>
        </div>
    );
});

export default PopUp
