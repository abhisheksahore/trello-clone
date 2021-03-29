

const cardsName = (name ,list, id) => {
    const cardName = document.createElement('div');
    cardName.classList.add('add-card-container');
    cardName.innerHTML = `<div class="add-card card-name open-card">
    <span class="open-card"></span>
</div>`;
    cardName.firstElementChild.firstElementChild.innerText = name;
    cardName.id = id;
    list.insertBefore(cardName, list.lastElementChild);
}

export default cardsName;