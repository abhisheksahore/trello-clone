function card() {
    const list_card_container = document.createElement('div');
    list_card_container.classList.add('list-card-container');
    list_card_container.innerHTML = `<div class="list-card">
    <div class="list-card-content">
        <!-- Heading of card -->
        <div class="list-card-heading fd-col">
            <div class="list-card-name-container">
                <i class="fa fa-folder"></i>
                <p class="change-card-title">Card name</p>
            </div>
            <div class="in-list-wrapper">
                in list {<span class='in-list-name'>list name</span>}
            </div>
        </div>

        <!-- Description -->
        <div class="new-board-form-wrapper add-card-form-container list-card-desc-container">
            <div class="desc-heading-container">
                <div class="list-card-heading">
                    <i class="fa fa-align-justify va-mid"></i>
                    <div class="list-card-name-container">
                        <p class="desc-edit">Description</p>
                    </div>
                </div>
                <div class="desc-edit-btn">
                    <i class="fa fa-edit desc-edit"></i>
                </div>
            </div>
            

            <div class="card-desc-text-container">
                Add Description
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

            
            <div class="add-card add-item">
                <i class="fa fa-plus flex"></i> 
                <span>Add an item</span>
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