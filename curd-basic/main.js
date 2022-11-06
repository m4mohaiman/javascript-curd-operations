let form = document.getElementById('form');
let input = document.getElementById('input');
let msg = document.getElementById('msg');
let posts = document.getElementById('posts');


form.addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('button clicked');
    formValidation();
})

let formValidation = () => {
    if(input.value === ''){
        msg.classList.add('alert', 'alert-danger', 'mt-3');
        msg.innerText = 'Post can not be empty';
        console.log('failed');
    } else {
        acceptData();
        msg.classList.add('alert', 'alert-info', 'mt-3');
        msg.innerHTML = 'Success';
        console.log('Success');
    }
}

let data = {};

let acceptData = () => {
    data['text'] = input.value;
    console.log('data pushed');
    console.log(data); 
    createPost();
}

let createPost = () => {
    posts.innerHTML += `
    <div class='single-post'>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fas fa-edit"></i>
    <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
    </span>
    </div>
    `
    input.value = "";
}

let deletePost = (e) => {
    e.parentElement.parentElement.remove();
}

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}