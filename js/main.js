(function main(){
    const listElements =  document.querySelectorAll('.nav_item--show');
    const list = document.querySelector('.nav_links');
    const nave = document.querySelector('.nav_celular');

    const addClick = ()=>{
        listElements.forEach(element => {
            element.addEventListener('click', ()=> {

            let subNav = element.children[1];
            let height = 0;
            element.classList.toggle('nav_item--active');

             
            if(subNav.clientHeight === 0){
                 height = subNav.scrollHeight;
            }
             subNav.style.height = `${height}px`;
           });
        });
    }
    
    const deleteStyleHeight = () =>{
        listElements.forEach(element=>{
            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('nav_item--activ');
            }
        });
    }

    window.addEventListener('resize', ()=>{
        if(window.innerWidth > 800){
            deleteStyleHeight();
            if(list.classList.contains('nav_links--show'))
            list.classList.remove('nav_links--show');
        }else{
            addClick();
        }
    });
    if(window.innerWidth <= 800){
        addClick();
    }
    nave.addEventListener('click', ()=> list.classList.toggle('nav_links--show'))
})();

document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration:150,
        dist: -80,
        shift: 5,
        padding:5,
        numVisible: 3,
        indicators: true,
        noWrap: true
    });
});