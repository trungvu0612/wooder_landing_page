let langCurrent = document.querySelector(".lang__current");
let langOption = document.querySelector(".lang__option");
let langSpan = document.querySelector(".lang .lang__current span");
let langItem = document.querySelectorAll(
    ".lang .lang__option .lang__option-item"
);
langCurrent.addEventListener("click", function(e) {
    e.stopPropagation();
    langOption.classList.toggle("active");
});
langItem.forEach(function(item) {
    item.addEventListener("click", function() {
        let langText = this.textContent;
        let langNow = langSpan.textContent;
        langSpan.innerHTML = langText;
        this.innerHTML = langNow;
    });
});

document.addEventListener("click", function() {
    langOption.classList.remove("active");
});

//scroll
let menuHeader = document.querySelectorAll(".container-fluid .menu li a");
let heightHeader = document.querySelector("header").offsetHeight;
let sections = [];

function removeActiveMenu() {
    menuHeader.forEach(function(menu_element, menu_index) {
        menu_element.classList.remove("active");
    });
}

menuHeader.forEach(function(menuItem, index) {
    let href = menuItem.getAttribute("href");
    let element = href.replace("#", "");
    let section = document.querySelector("." + element);
    sections.push(section);
    menuItem.addEventListener("click", function(e) {
        e.preventDefault();
        window.scrollTo({
            top: section.offsetTop - heightHeader + 1,
            behavior: "smooth",
        });
        removeActiveMenu();
        menuItem.classList.add("active");
    });
});
window.addEventListener("scroll", function() {
    let positionScroll = window.pageYOffset;
    sections.forEach(function(section, index) {
        if (
            positionScroll > section.offsetTop - heightHeader &&
            positionScroll < section.offsetTop + section.offsetHeight
        ) {
            removeActiveMenu();
            menuHeader[index].classList.add("active");
        } else {
            menuHeader[index].classList.remove("active");
        }
    });
});
//header and back to top
let toTop = document.querySelector("#backtotop");
toTop.style.display = "none";
let header = document.querySelector("header");
let sectionProduct = document.querySelector("main .products").offsetTop;
window.addEventListener("scroll", function(e) {
    let HeaderScroll = window.pageYOffset;
    if (HeaderScroll > sectionProduct - heightHeader) {
        header.style.background = "black";
        toTop.style.display = "flex";
    } else {
        header.style.background = "unset";
        toTop.style.display = "none";
    }
});
toTop.addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
// slider
// let listItemSlider = document.querySelectorAll('.slider__item');
// let currentSlider = 0;
// let number = document.querySelector('.slider__bottom-paging .number');
// // --- lấy giá trị index trong class sau đó gán giá trị nào có active cho current
// listItemSlider.forEach(function(itemSlider, index) {
//     if (itemSlider.classList.contains('active')) {
//         currentSlider = index;
//     }
// });

// function showNumber(index) {
//     number.innerHTML = (index).toString().padStart(2, '0');
// }

// showNumber(currentSlider + 1);

// function goTo(index) {
//     listItemSlider[currentSlider].classList.remove('active');
//     dot_li[currentSlider].classList.remove('active');
//     listItemSlider[index].classList.add('active');
//     dot_li[index].classList.add('active');
//     currentSlider = index;
//     showNumber(currentSlider + 1);
// };
// //doted
// let dot_li = document.querySelectorAll('.slider__bottom-paging .dotted li');
// dot_li[currentSlider].classList.add('active');

// dot_li.forEach(function(li, index) {
//     li.addEventListener('click', function() {
//         goTo(index);
//     });
// });

// ---- button bên phải
// let btnRight = document.querySelector('.btn.right')
// btnRight.addEventListener('click', function() {
//     if (currentSlider < listItemSlider.length - 1) {
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider + 1].classList.add('active');
//         // currentSlider++;
//         goTo(currentSlider + 1);
//     } else {
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[0].classList.add('active');
//         // currentSlider = 0;
//         goTo(0);
//     }
// });
// // ----- button bên trái
// let btnLeft = document.querySelector('.btn.left');
// btnLeft.addEventListener('click', function() {
//     if (currentSlider > 0) {
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[currentSlider - 1].classList.add('active');
//         // currentSlider--;
//         goTo(currentSlider - 1);
//     } else {
//         // listItemSlider[currentSlider].classList.remove('active');
//         // listItemSlider[listItemSlider.length - 1].classList.add('active');
//         // currentSlider = listItemSlider.length - 1;
//         goTo(listItemSlider.length - 1);
//     }
// });
//videos
let playBtn = document.querySelectorAll(".play_button");
let popupVideo = document.querySelector(".popup-video");
let closeBtn = document.querySelector(".close");
let iframe = document.querySelector(".popup-video iframe");

playBtn.forEach(function(btn) {
    btn.addEventListener("click", function() {
        let videoId = btn.getAttribute("data-video-id");
        iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId);
        popupVideo.style.display = "flex";
    });
});
closeBtn.addEventListener("click", function() {
    iframe.setAttribute("src", " ");
    popupVideo.style.display = "none";
});
//nav
let btnNav = document.querySelector(".container-fluid .right .lang .btnmenu");
let nav = document.querySelector("header .nav");
btnNav.addEventListener("click", function(e) {
    nav.classList.toggle("active");
});
// //tabs
// let tagText = document.querySelectorAll('.news__tabs-text .tag');
// let tagList = document.querySelectorAll('.news__tabs .news__list');
// tagText.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         tagText.forEach(function(tag) {
//             tag.classList.remove('active');
//         })
//         tagList.forEach(function(tag) {
//             tag.classList.remove('active');
//         })
//         console.log(item);
//         item.classList.add('active');
//         let tagIndex = document.querySelector('.news__list-' + index);
//         tagIndex.classList.add('active');
//     });
// });
// //accordion
// let accordion = document.querySelectorAll('.faq__list .accordion');

// accordion.forEach(function(item, index) {
//     item.addEventListener('click', function() {
//         accordion.forEach(function(e, index_remove) {
//             if (index !== index_remove) {
//                 e.classList.remove('active');
//                 e.nextElementSibling.classList.remove('active');
//             };
//         });
//         item.classList.toggle('active');
//         let answer = item.nextElementSibling;
//         answer.classList.toggle('active');
//     });
// });

//*********Jquery***************************

//flickity slider

let $carousel = $(".slider__item-wrap");
$carousel.flickity({
    cellAlign: "left",
    contain: true,
    autoPlay: true,
    wrapAround: true,
    freeScroll: false,
    // disable previous & next buttons and dots
    prevNextButtons: false,
    pageDots: true,
    on: {
        ready: function() {
            let dotted = $(".flickity-page-dots");
            let paging = $(".slider__bottom-paging .dotted");
            dotted.appendTo(paging);
        },
        change: function(index) {
            let number = $(".slider__bottom-paging .number");
            console.log(index);
            let indexPage = index + 1;
            number.text(indexPage.toString().padStart(2, 0));
        },
    },
});

$(".slider__bottom-controls .left").on("click", function() {
    $carousel.flickity("previous");
});
$(".slider__bottom-controls .right").on("click", function() {
    $carousel.flickity("next");
});

//accordion jquery

$(document).on("click", ".faq .faq__list .accordion", function() {
    $(".faq .faq__list .faq__list-text").not($(this).next()).slideUp();
    $(this).next().stop().slideToggle();
    $(this).toggleClass("active");
});

//tabs jquery
let list = $(".news__tabs .news__list");
$(document).on("click", ".news .news__tabs .news__tabs-text .tag", function() {
    let index = $(this).index();
    let indexList = list.eq(index);
    list.removeClass("active");
    indexList.addClass("active");
});

//tags jquery
$(document).on("keypress", 'input[name="tags"]', function(e) {
    if (e.keyCode === 13) {
        let value = $(this).val();
        let htmlTags =
            '<div class="tag">' + value + '<span class="remove">x</span></div>';
        $(".tags .list").append(htmlTags);
        $(this).val("");
    }
    let tagsWidth = $(".tags .list").outerWidth();
    $('input[name="tags"]').append();
});
// img end
let $img_carousel = $(".carousel");
$img_carousel.flickity({
    freeScroll: true,
    contain: true,
    prevNextButtons: false,
    pageDots: true,
    on: {},
});