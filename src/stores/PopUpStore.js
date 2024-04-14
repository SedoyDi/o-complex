import { makeAutoObservable } from "mobx";
class PopUpStore {
    isOpen = false;
    constructor() {
        makeAutoObservable(this);
    }
    setIsOpen = (value) => {
        this.isOpen = value;
    };
}

const popUpStore = new PopUpStore();
export default popUpStore;