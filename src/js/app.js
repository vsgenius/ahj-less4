import "./validate"
import { isValid } from "./validate";
const cardinput = document.getElementById('card-input');
cardinput.addEventListener("keyup", (e) => {
    const res = isValid(e.target.value);
    const hiddens = document.querySelectorAll('.image');
    for (let i = 0; i < hiddens.length; i++) {
        hiddens[i].classList.add('hidden');
     }
    if (res) {
        console.log(res)
        const value = document.getElementById(res);
        if (value) {
            value.classList.remove('hidden')
        }
    }
})