import board from './board.js';
import popup from './popup.js';

const KEY = `7bde6646d78097e44a28e72b9b089a19`;
const TOKEN = `f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08`



// loads the boards on loading the page each time.
window.addEventListener('load', async function(e) {
    const promise_get = await fetch(`https://api.trello.com/1/members/abhisheksahore7/boards/?key=${KEY}&token=${TOKEN}`);
    const get_data = await promise_get.json();
    console.log(get_data);
    get_data.forEach(e => board(e.name, e.id))
})




// logic for clicking of the create new card button.
const create_new = (url, action, action_method, el, val) => {
    popup();
    const popup_input_text = document.getElementById('boardName');
    if (action === 'Update') {
        popup_input_text.value = val;
    }
    popup_input_text.focus();
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
            console.log(popup_input_text.value);
            const promise = await fetch(url + popup_input_text.value, {method: action_method});            
            const data = await promise.json();
            console.log(data)

            if (action === 'Create') {
                board(data.name, data.id);
            } else if (action === 'Update') {
                el.innerText = data.name;
                
                
    
            }
            popup_comp.remove();
        }
        
    })
}

const create_new_card = document.getElementById('create-new-card');
create_new_card.addEventListener('click', function() {
    create_new(`https://api.trello.com/1/boards/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08&name=`,'Create', 'POST');
})

document.getElementById('navbar-create-board').addEventListener('click', function() {
    create_new(`https://api.trello.com/1/boards/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08&name=`, 'Create', 'POST');
})



// deleting a Board 

document.querySelector('.boards-container').addEventListener('click', async function(e) {
    console.log(e.target.parentElement.parentElement.id);
    if(e.target.tagName === 'I') {
        e.stopPropagation();
        if (e.target.parentElement.firstElementChild === e.target) {
            const promise = await fetch(`https://api.trello.com/1/boards/${e.target.parentElement.parentElement.id}/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08`,{
                method: 'DELETE',
            })
            const data = await promise.json();
            e.target.parentElement.parentElement.remove();
            console.log(data);  
            console.log('working');
        } else if (e.target.parentElement.lastElementChild === e.target) {
            
            e.stopPropagation();
            const name = await create_new(`https://api.trello.com/1/boards/${e.target.parentElement.parentElement.id}/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08&name=`, 'Update', 'PUT', e.target.parentElement.parentElement.firstElementChild, e.target.parentElement.parentElement.firstElementChild.innerText);

            console.log(name);
            console.log('me too', e.target.parentElement.parentElement.firstElementChild.innerText);
            
        }
    }


    if (e.target.tagName === 'DIV') {
        console.log(e.target)
        let target = e.target;
        if (e.target.classList.contains('card-heading')){
            target = e.target.parentElement;
        }
        console.log(target)
        if (target.id !== 'create-new-card') {
            location.href = `board.html?id=${target.id}`;
        }
    }
})







