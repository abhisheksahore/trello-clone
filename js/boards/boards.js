import cardName from './cards.js';
import list from './list.js';
import popup from './popup.js';
import card from './card.js';

const KEY = `7bde6646d78097e44a28e72b9b089a19`;
const TOKEN = `f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08`

const params = new URLSearchParams(window.location.search);
const ID = params.get('id');
console.log(ID);

window.addEventListener('load', async function() {
    const promise_board = await fetch(`https://api.trello.com/1/boards/${ID}/?key=${KEY}&token=${TOKEN}`);
    const board = await promise_board.json();
    document.querySelector('.board-name').innerText = board.name;

    const promise_lists = await fetch(`https://api.trello.com/1/boards/${ID}/lists?key=${KEY}&token=${TOKEN}`);
    const lists = await promise_lists.json();
    lists.forEach(async e => {
        list(e.name, e.id);
        const promise_card = await fetch(`https://api.trello.com/1/lists/${e.id}/cards?key=${KEY}&token=${TOKEN}`)
        const cards = await promise_card.json();
        console.log(cards);
        cards.forEach(c => {
            
            cardName(c.name, document.getElementById(e.id),c.id)
        })
       
    });
    console.log(lists);
})




const create_new__update = (url, action, action_method, action_element, el, val) => {
    popup();
    const popup_input_text = document.getElementById('boardName');
    if (action === 'Update') {
        popup_input_text.value = val;
    }
    const create_btn = document.getElementById('submit-board-name');
    create_btn.value = action;
    const popup_comp = document.getElementById('new-board-form-container');
    console.log(popup_comp);
    document.getElementById('cancel').addEventListener('click', function(e) {
        e.preventDefault();
        popup_comp.remove();
    })
    create_btn.addEventListener('click', async function(e) {
        e.preventDefault();
        if(popup_input_text.value !== '' && popup_input_text.value !== null) {
            
            const promise = await fetch(url + popup_input_text.value, {method: action_method}); 
            const data = await promise.json();
            console.log(data)

            if (action_element === 'list') {

                if (action === 'Create') {
                    list(data.name, data.id);
                } else if (action === 'Update') {
                    el.innerText = data.name;
                }
                popup_comp.remove();

            } else if  (action_element === 'card') {
                if (action === 'Create') {
                    cardName(data.name, el, data.id);
                } else if (action === 'Update') {
                    if (el.length > 1) {
                        console.log('yo! im here.')
                        el[0].innerText = data.name;
                        console.log(el);
                        

                        el[1].innerText = data.name;
                    } else {
                        el.innerText = data.desc;
                    }
                }
                popup_comp.remove();

            } else if (action_element === 'checklist') {
    
            } else if (action_element === 'desc') {
    
            }    
        }
    })
}



const open_card = async (listID, cardID, list_name, card_name, list_element, list_card_element) => {
 
    card();
    
    const card_title = document.querySelector('.change-card-title');
    const in_list_name = document.querySelector('.in-list-name');
    const card_desc = document.querySelector('.card-desc-text-container');
    
    card_title.innerText = card_name;
    in_list_name.innerText = list_name;
    const promise_card = await fetch(`https://api.trello.com/1/cards/${cardID}?key=${KEY}&token=${TOKEN}`);
    const card_data = await promise_card.json();
    if (card_data.desc !== '') card_desc.innerText = card_data.desc;

    card_title.addEventListener('click', function() {
         create_new__update(`https://api.trello.com/1/cards/${cardID}?key=${KEY}&token=${TOKEN}&name=`, 'Update', 'PUT', 'card', [list_card_element.querySelector('span'), card_title], card_name);
          
    })

    const desc_edit = document.querySelectorAll('.desc-edit');
    desc_edit.forEach(e => {
        e.addEventListener('click', function() {
            create_new__update(`https://api.trello.com/1/cards/${cardID}?key=${KEY}&token=${TOKEN}&desc=`, 'Update', 'PUT', 'card', document.querySelector('.card-desc-text-container'), document.querySelector('.card-desc-text-container').innerText);
        })
    })

    const card_close_btn = document.querySelector('.list-card-close-btn');
    const card_element = document.querySelector('.list-card-container');
    console.log(card_close_btn);
    card_close_btn.addEventListener('click', function() {
        card_element.remove();
    })



}












const add_list_container = document.querySelector('.add-list-container');
add_list_container.addEventListener('click', async function(e) {
    create_new__update(`https://api.trello.com/1/lists?key=${KEY}&token=${TOKEN}&idBoard=${ID}&name=`, 'Create', 'POST', 'list'); 
})



const lists_container = document.querySelector('.lists-container');

lists_container.addEventListener('click', async function(e) {
    if (e.target.classList.contains('list-title')) {
        const list_element = e.target.parentElement.parentElement;
        
        create_new__update(`https://api.trello.com/1/lists/${list_element.id}?key=${KEY}&token=${TOKEN}&name=`, 'Update', 'PUT', 'list', e.target, e.target.innerText);
    } else if (e.target.classList.contains('add-card-btn')) {
            console.log(`i'm working`)
            let list = 0;
            if (e.target.tagName === 'SPAN' || e.target.tagName === 'I') {
                list = e.target.parentElement.parentElement.parentElement;
            } else if (e.target.tagName === 'DIV') {
                list = e.target.parentElement.parentElement;
            }
            create_new__update(`https://api.trello.com/1/cards?key=${KEY}&token=${TOKEN}&idList=${list.id}&name=`, 'Create', 'POST', 'card', list);
        
    } else if (e.target.classList.contains('open-card')) {
        let list = 0;
        let card = 0; 
        if (e.target.tagName === 'DIV') {
            list = e.target.parentElement.parentElement;
            card = e.target.parentElement;
        } else if (e.target.tagName === 'SPAN') {
            list = e.target.parentElement.parentElement.parentElement;
            card = e.target.parentElement.parentElement;
        }
        console.log('list', list)
        console.log('card', card)
        console.log(list.id, card.id);



        open_card(list.id, card.id, list.querySelector('.list-title').innerText, card.querySelector('span').innerText, list, card);
    } else if (e.target.tagName === 'I') {
        if (e.target.parentElement.firstElementChild === e.target && e.target.classList.contains('del-l')) {
            
            
            // DELETE            
            console.log('ready to delete')
            console.log(e.target.parentElement.parentElement.parentElement.id)
            const promise_delete_list = await fetch(`https://api.trello.com/1/lists/${e.target.parentElement.parentElement.parentElement.id}/closed?key=${KEY}&token=${TOKEN}&value=true`, {method: 'PUT'});
            const data_delete_list = await promise_delete_list.json();
            if (data_delete_list.closed === true) {
                e.target.parentElement.parentElement.parentElement.remove();
            } else {
                console.log('list not deleted.');
            }



        } else if (e.target.parentElement.lastElementChild === e.target && e.target.classList.contains('edit-l')) {
            
            
            // EDIT
            console.log('ready to edit')
            const list_element = e.target.parentElement.parentElement.parentElement;
            const list_name = list_element.querySelector('.list-title');
            console.log(list_element);
            console.log(list_name);
            console.log(list_element.id);
            create_new__update(`https://api.trello.com/1/lists/${list_element.id}?key=${KEY}&token=${TOKEN}&name=`, 'Update', 'PUT', 'list', list_name, list_name.innerText);


        }
    }
})