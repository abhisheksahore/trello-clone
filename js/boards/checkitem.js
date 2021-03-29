const checkitem = (parent_element, checkitem_name, id) => {
    const checkitem = document.createElement('div');
    checkitem.id = id;
    checkitem.classList.add('checklist-checkitems-container');
    checkitem.innerHTML = ` <label for="" class="checkitem">
                                <div class="checkitem-content">
                                    <input type="checkbox">
                                    <div class="checkitem-text">
                                        ${checkitem_name}
                                    </div>
                                </div>
                                <i class="fa fa-trash" style="font-weight: 400; font-size: 1.4rem;"></i>
                            </label>`;
    parent_element.append(checkitem);
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