const btnMobile = document.getElementById('menu-btn');
function toggleMenu(event){
    if(event.type === 'touchstart'){event.Default()};
    const nav = document.getElementById('nav-menu');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if(active){event.currentTarget.setAttribute('aria-label', 'Fechar Menu')} else{event.currentTarget.setAttribute('aria-label', 'Abrir Menu')};
};
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menu = document.getElementById('menu');
function toggleLink(event){
    if(event.type === 'touchstart'){event.Default()};
    const link = document.getElementById('link');
    link.classList.toggle('close');
    if(link.classList.contains('close')){nav.classList.remove('active')};
}
menu.addEventListener('click', toggleMenu);
menu.addEventListener('touchstart', toggleMenu);

var btnMore = document.getElementById('read-more');
btnMore.addEventListener('click', function(){
    var serv = document.querySelector('.serv-content');
    serv.classList.toggle('active');
    if(serv.classList.contains('active')){
        return btnMore.textContent = 'Less';
    } else{
        btnMore.textContent = 'More'
    }
});

var btnMais = document.getElementById('skills-more');
btnMais.addEventListener('click', function(){
    var hab = document.querySelector('.column-right2');
    hab.classList.toggle('active');
    if(hab.classList.contains('active')){
        return btnMais.textContent = 'Less';
    } else{
        btnMais.textContent = 'More'
    }
});

const debounce = function(func, wait, immediate){
    let timeout;
    return function(...args){
        const context = this;
        const later = function(){
            timeout = null;
            if (!immediate) func.apply(context, args);
        }
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args)
    }
};