const checkbox = document.getElementById('header__switch-checkbox');
const changableItems = Array.from(document.getElementsByClassName('changable'));

checkbox.addEventListener('change', ()=>{
    changableItems.forEach(item => {
        item.classList.toggle('dark-mode');
    })
})