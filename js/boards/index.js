import board from './board.js';
import popup from './popup.js';




// loads the boards on loading the page each time.
window.addEventListener('load', async function(e) {
    const promise_get = await fetch(`https://api.trello.com/1/members/abhisheksahore7/boards/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08`);
    const get_data = await promise_get.json();
    console.log(get_data);
    get_data.forEach(e => board(e.name))
})




// logic for clicking of the create new card button.
const create_new = () => {
    popup();
    const popup_input_text = document.getElementById('boardName');
    const create_btn = document.getElementById('submit-board-name');
    const popup_comp = document.getElementById('new-board-form-container');
    console.log(popup_comp);
    create_btn.addEventListener('click', async function(e) {
        e.preventDefault();
        const promise = await fetch(`https://api.trello.com/1/boards/?key=7bde6646d78097e44a28e72b9b089a19&token=f1599e0d17ee6befeb05784c72fcfe8529f481f92ef31162e6671b361f89bb08&name=${popup_input_text.value}`, {
            method: 'POST',
        });            
        const data = await promise.json();
        console.log(data)
        board(data.name);
        
       
        popup_comp.remove();
        
    })
}

const create_new_card = document.getElementById('create-new-card')
create_new_card.addEventListener('click', function() {
    create_new();
})

document.getElementById('navbar-create-board').addEventListener('click', function() {
    create_new();
})

// getting data from form


// putting data on server 


// fetching data from server 


// displaying boards on page