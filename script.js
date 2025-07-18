let blur_screen = document.querySelector('.blur')
let add_btn = document.querySelector('.add-btn')
let close_btn = document.querySelector('.cancel')
let form_createlist = document.querySelector('.create-list')
let textarea = document.querySelector('#newlist')
let create_btn = document.querySelector('.list-btn')
let delete_btn = document.querySelector('.delete')
let list_container = document.querySelector('.todo-list')

const unhide = () => {
    blur_screen.hidden = false;
    form_createlist.hidden = false;
    textarea.focus();
}
const hide = () => {
    blur_screen.hidden = true;
    form_createlist.hidden = true;

}
add_btn.addEventListener('click', () => {
    unhide();
})
close_btn.addEventListener('click', () => {
    hide();
});
create_btn.addEventListener('click', () => {
    if (textarea.value === '') {
        return
    }
    let newList = document.createElement('li');
    newList.innerHTML = `${textarea.value} <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>Delete</button>`
    list_container.prepend(newList);
    textarea.value = '';
    hide();
});
textarea.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftkey) {
        e.preventDefault();
        if (textarea.value === '') {
            return;
        }
        if (textarea.value === '') {
            return
        }
        let newList = document.createElement('li');
        newList.innerHTML = `${textarea.value} <button class="delete"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>Delete</button>`
        list_container.prepend(newList);
        textarea.value = '';
        hide();

    }
})
list_container.addEventListener('click', (e) => {
    if (e.target.closest('button.delete')) {
        e.target.closest('li').remove();
    }
});
