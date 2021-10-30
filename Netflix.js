const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item=>item.addEventListener('click',selectItem));

function selectItem(e){
    removeBorder();
    removeShow();
    this.classList.add('tab-border');

    const tabContentItem = document.querySelector(`#${this.id}-content`);
	
	tabContentItem.classList.add('show');
}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}


function removeShow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}

const $ = function(str){
    return document.querySelector(str);
}

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);
        if(window.scrollY > 265 && window.scrollY < 285){
            if(!$(".test-img").classList.contains("show-img")){
                $(".test-img").classList.add("show-img");
            }
            if(!$(".img-wrapper").classList.contains("no-hidden")){
                $(".img-wrapper").classList.add("no-hidden");
            }
        }
    })
});