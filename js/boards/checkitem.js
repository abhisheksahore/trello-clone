const checkitem = (parent_element, checkitem_name, id) => {
    const checkitem = document.createElement('div');
    checkitem.id = id;
    checkitem.classList.add('checklist-checkitems-container');
    checkitem.classList.add('fl-sb');
    checkitem.innerHTML = ` <label class="checkitem">
                                <div class="checkitem-content">
                                    <input type="checkbox">
                                    <div class="checkitem-text">
                                        ${checkitem_name}
                                    </div>
                                </div>
                                
                            </label>
                            <i class="fa fa-trash del-checkitem" style="font-weight: 400; font-size: 1.4rem;"></i>`;
    parent_element.insertBefore(checkitem, parent_element.lastElementChild);
}

export default checkitem;




{/* <div class="checklist-checkitems-container">
                                <label for="" class="checkitem">
                                    <div class="checkitem-content">
                                        <input type="checkbox">
                                        <div class="checkitem-text">
                                            CHECKLIST ITEM HERE
                                        </div>
                                    </div>
                                    <i class="fa fa-trash" style="font-weight: 400; font-size: 1.4rem;"></i>
                                </label>
                            </div> */}