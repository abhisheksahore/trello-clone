const popup = () => {
    const new_board_form_container = document.createElement('div');
    new_board_form_container.classList.add('new-board-form-container');
    new_board_form_container.id = 'new-board-form-container';

    const new_board_form_wrapper = document.createElement('div');
    new_board_form_wrapper.classList.add('new-board-form-wrapper')

    const form = document.createElement('form');
    
    const input_text = document.createElement('input');
    input_text.setAttribute('type', 'text');
    input_text.setAttribute('placeholder', 'Board Name');
    input_text.setAttribute('name', 'boardname');
    input_text.setAttribute('id', 'boardName');
    
    const create_board_btn_container = document.createElement('div');
    create_board_btn_container.classList.add('create-board-btn-container');
    
    const input_create = document.createElement('input');
    input_create.setAttribute('type', 'submit');
    input_create.setAttribute('id', 'submit-board-name');
    input_create.setAttribute('value', 'Create');
    
    const input_cancel = document.createElement('input');
    input_cancel.setAttribute('type', 'submit');
    input_cancel.setAttribute('id', 'cancel');
    input_cancel.setAttribute('value', 'Cancel');


    create_board_btn_container.append(input_create);
    create_board_btn_container.append(input_cancel);
    form.append(input_text);
    form.append(create_board_btn_container);
    new_board_form_wrapper.append(form);
    new_board_form_container.append(new_board_form_wrapper);

    document.body.append(new_board_form_container);


}

export default popup;


