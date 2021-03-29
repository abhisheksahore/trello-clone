const list = (name, id) => {
    const list = document.createElement('div');
    list.classList.add('list');
    list.id = id;
    list.innerHTML = `<div class='list-title-header'>
                        <div class="list-title">
                            ${name}
                        </div>
                        <div class="del-board-btn">
                            <i class="fa fa-trash trash-btn ft-black del-l"></i>
                            <i class="fa fa-edit ft-black edit-l"></i>
                        </div>
                    </div>
                    <div class="add-card-container" id="add-a-card-${id}">
                        <div class="add-card add-card-btn">
                            <i class="fa fa-plus flex add-card-btn"></i> 
                            <span class="add-card-btn">Add a card</span>
                        </div>
                    </div>
                    `;
                    

    document.querySelector('.lists-container').insertBefore(list, document.querySelector('.lists-container').lastElementChild);
}

export default list;