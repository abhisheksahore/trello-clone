function card() {
    const list_card_container = document.createElement('div');
    list_card_container.classList.add('list-card-container');
    list_card_container.innerHTML = `<div class="list-card">
    <div class="list-card-content">
        <!-- Heading of card -->
        <div class="list-card-heading fd-col">
            <div class="list-card-name-container">
                <i class="fa fa-folder"></i>
                <p>Card name</p>
            </div>
            <div class="in-list-wrapper">
                in list {List name}
            </div>
        </div>

        <!-- Description -->
        <div class="new-board-form-wrapper add-card-form-container list-card-desc-container">
            <div class="desc-heading-container">
                <div class="list-card-heading">
                    <i class="fa fa-align-justify va-mid"></i>
                    <div class="list-card-name-container">
                        <p>Description</p>
                    </div>
                </div>
                <div class="desc-edit-btn">
                    <i class="fa fa-edit"></i>
                </div>
            </div>
            <form action="" >
                <input type="text" placeholder="Card name" name="CardName" id='CardName'>
                <div class="create-board-btn-container">
                    <input type="submit" id='submit-card-name' value="Add">
                    <input type="submit" id='cancel' value="Cancel">
                </div>
            </form>

            <div class="card-desc-text-container">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque error voluptate amet fugiat corporis doloremque impedit cum maiores esse suscipit fuga quibusdam sint vero repellat rem accusamus totam est!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, atque error voluptate amet fugiat corporis doloremque impedit cum maiores esse suscipit fuga quibusdam sint vero repellat rem accusamus totam est!
                
            </div>
        </div>


        <!-- checklists -->
        <div class="new-board-form-wrapper add-card-form-container list-card-desc-container">
            <div class="desc-heading-container">
                <div class="list-card-heading">
                    <i class="fa fa-list-ul va-mid"></i>
                    <div class="list-card-name-container">
                        <p>Checklist</p>
                    </div>
                </div>
                <div class="desc-edit-btn">
                    <i class="fa fa-trash trash-btn"></i>
                </div>
            </div>
            <form action="" >
                <input type="text" placeholder="Card name" name="CardName" id='CardName'>
                <div class="create-board-btn-container">
                    <input type="submit" id='submit-card-name' value="Add">
                    <input type="submit" id='cancel' value="Cancel">
                </div>
            </form>

            <div class="checklist-checkitems-container">
                <label for="" class="checkitem">
                    <div class="checkitem-content">
                        <input type="checkbox">
                        <div class="checkitem-text">
                            abhishek
                        </div>
                    </div>
                    <i class="fa fa-trash" style="font-weight: 400; font-size: 1.4rem;"></i>
                </label>
            </div>

            <form action="" >
                <input type="text" placeholder="Card name" name="CardName" id='CardName'>
                <div class="create-board-btn-container">
                    <input type="submit" id='submit-card-name' value="Add">
                    <input type="submit" id='cancel' value="Cancel">
                </div>
            </form>
            <div class="add-card add-item">
                <i class="fa fa-plus flex"></i> 
                <span>Add a card</span>
            </div>


        <!-- </div> -->
    </div>
    </div>

    <div class="list-card-options">
        
        <div class="close-btn-wrapper">
            <div class="list-card-close-btn">
                Close
            </div>
        </div>
        <div class="list-card-options-container">
            <div class="options-heading">
                Add to Card
            </div>
            <div class="add-checklist">
                <i class="fa fa-list-ul va-mid"></i>
                <p>Checklist</p>
            </div>
        </div>
        <div class="list-card-options-container">
            <div class="options-heading">
                Actions
            </div>
            <div class="add-checklist">
                <i class="fa fa-arrow-right va-mid"></i>
                <p>Move</p>
            </div>
            <div class="add-checklist">
                <i class="fa fa-copy va-mid"></i>
                <p>Copy</p>
            </div>
        </div>

    </div>

    </div>`;
    document.body.append(list_card_container);

}


export default card;