// DOM ELEMENTS
const btn = document.querySelector('.btn');
const rating = document.querySelector('.rating');
const thanks = document.querySelector('.thanks');

// DOM IMPLEMENTATIONS
btn.addEventListener('click', function(){
    if(rating.style.display != 'none'){
        rating.style.display = 'none';
        thanks.style.display = 'initial'
    }
    else{
        rating.style.display = 'initial';
    }
})