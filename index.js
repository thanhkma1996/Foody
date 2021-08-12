// Menu home
let menu = document.getElementsByClassName('menu-item');

Array.from(menu).forEach(function(item) {
    item.onclick = (e) => {
        let curentMenu = document.querySelector('.menu-item.active');
        curentMenu.classList.remove('active');
        item.classList.add('active');
    }
});

// category-food

let foodMenuList = document.querySelector('.foody-item-category')

let foodCategory = document.querySelector('.category-food')

let categories = foodCategory.querySelectorAll('button')

Array.from(categories).forEach((item, index) => {
    item.onclick = (e) => {
        let currCat = foodCategory.querySelector('button.active')
        currCat.classList.remove('active')
        e.target.classList.add('active')
        foodMenuList.classList ='foody-item-category '+ e.target.getAttribute('data-food-type')
    }
})

// back to top 
let backtotop = document.querySelector('.back-to-top');

window.onscroll = () => {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backtotop.style.display = 'flex';
    }else {
        backtotop.style.display = 'none';
    }
}

// Anmiation scrooll
let scroll = window.requestAnimationFrame || function(callback) {window.setTimeout(callback, 1000/80)}

let elToShow = document.querySelectorAll('.play-on-scroll')

isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect()

    return (
        (rect.top <= 0 && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) && rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    )
}

loop = () => {
    elToShow.forEach((item, index) => {
        if (isElInViewPort(item)) {
            item.classList.add('start')
        } else {
            item.classList.remove('start')
        }
    })

    scroll(loop)
}

loop()
