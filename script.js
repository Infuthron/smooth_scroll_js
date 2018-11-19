let index = 0; //This one's active
let main = document.querySelector('.main');
let links = document.querySelectorAll('.nav__menu-item');
let all_links_array = [];

links.forEach( (item) => {
    item.addEventListener('click', (e)=>{
        index = all_links_array.indexOf(item);
        activate(index);
    });
    all_links_array.push(item);
});

const activate = (num) => {
    //go away active class
    go_away_active();
    //activate nav
    all_links_array[num].classList.add('nav--active')

    //move
    main.style.marginLeft = (-100*num) + 'vw';
};

const go_away_active = () => {
    all_links_array.forEach( (item) =>{
       item.classList.remove('nav--active');
    });
};

//for start
activate(index)

