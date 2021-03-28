const boardCard = (cardHeading, cardId) => {
    const boards_container = document.querySelector('.boards-container');
    
    
    const card = document.createElement('div');
    card.id = cardId;
    const card_heading = document.createElement('div');
    const del_board_btn = document.createElement('div');
    card.classList.add('card');
    card_heading.classList.add('card-heading');
    del_board_btn.classList.add('del-board-btn');
    card_heading.innerText = cardHeading;
    del_board_btn.innerHTML = `<i class="fa fa-trash trash-btn ft-white"></i>
    <i class="fa fa-edit ft-white"></i>`;
    card.append(card_heading);
    card.append(del_board_btn);
    
    boards_container.insertBefore(card, boards_container.lastElementChild)
}

export default boardCard;


{/* 
<div class="card">
    <div class="card-heading">
        Testing Board
    </div>
    <div class="del-board-btn">
        <i class="fa fa-trash trash-btn ft-white"></i>
        <i class="fa fa-edit ft-white"></i>
    </div>
</div> */}