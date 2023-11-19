import { createWindowRegister } from "./createWindow.js";

const elementsDom = {
    buttonWindow: '#registerStorer',
}

const buttonActiveWindow = document.querySelector(elementsDom.buttonWindow);

buttonActiveWindow.addEventListener('click', createWindowRegister);