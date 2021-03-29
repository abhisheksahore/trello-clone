const checklist = (parent_element, checklist_name, id) => {
    const checklist = document.createElement('div');
    checklist.id = id;
    checklist.className += "new-board-form-wrapper add-card-form-container list-card-desc-container";
    checklist.innerHTML = `<div class="desc-heading-container">
                                <div class="list-card-heading">
                                    <i class="fa fa-list-ul va-mid"></i>
                                    <div class="list-card-name-container">
                                        <p>${checklist_name}</p>
                                    </div>
                                </div>
                                <div class="desc-edit-btn ">
                                    <i class="fa fa-trash trash-btn del-checklist-btn"></i>
                                </div>
                            </div>


                            


                            <div class="add-card add-item">
                                <i class="fa fa-plus flex"></i> 
                                <span>Add an item</span>
                            </div>`; 
    parent_element.append(checklist)
}

export default checklist;



// <div class="new-board-form-wrapper add-card-form-container list-card-desc-container">
            
//     </div>