const allListsList = (parent_element, list_id, list_name) => {
    const list_item = document.createElement('div');
    list_item.classList.add('all-lists');
    list_item.id = list_id;
    list_item.innerText = list_name;
    parent_element.append(list_item);
}

export default allListsList;