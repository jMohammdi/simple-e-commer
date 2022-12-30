// toogle nonde styla and block filter books
let productItemsFilter = document.querySelector(".filter-book")
productItemsFilter.addEventListener("click", function(e) {
        document.querySelector(".product-items-filter").classList.toggle("showA")

    })
    // add menubar mobile silde=========
const toogle_menu = document.querySelector(".menu-bar")
const menu__mobile = document.querySelector(".menu__mobile")
const shadow__menu = document.querySelector(".shadow__menu")

if (menu__mobile) {
    toogle_menu.addEventListener("click", function() {
        menu__mobile.classList.add("show__menu_j")
        shadow__menu.classList.add("show__menu_j")
    })
}

function removeclass() {
    menu__mobile.classList.remove("show__menu_j")
    shadow__menu.classList.remove("show__menu_j")
}
const link__items = document.querySelectorAll(".menu__item ")
link__items.forEach(item => {
    item.addEventListener("click", removeclass)

})
shadow__menu.addEventListener("click", removeclass)
    // ================================
    // fiexed header for scrolll animation
let header_fixed = document.querySelector(".header_fixed")
let addfixed_arrow = document.querySelector(".fix-arrow")
window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50) {
        header_fixed.classList.add("fixed_headers")
        addfixed_arrow.classList.add('add-fixed_arrow')
    } else {
        header_fixed.classList.remove("fixed_headers")
        addfixed_arrow.classList.remove("add-fixed_arrow")
    }

})

// =========================
let id = 0
    // let tem=""
const myDataBook = [
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/oxford-word-skills-2nd-pack-150x150.png', coverSecond: './assets/images/products/product-second-s/elementry-front-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/American-English-File-3nd-pack.png", coverSecond: './assets/images/products/product-second-s/american-english-dile-3rd2r-front-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/collins-2nd-pack.png', coverSecond: './assets/images/products/product-second-s/collins-2nd-writng-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/Interchange-5th-Collection.png', coverSecond: './assets/images/products/product-second-s/back_interchange_3_5th-300x300.jpg', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/American-English-File-2nd-Collection.png', coverSecond: './assets/images/products/product-second-s/2-BACK_ENGLISH-FILE-2ND-300x300.jpg', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Speak Now', coverMain: './assets/images/products/product-second-s/Speak-Now-Collection.png', coverSecond: './assets/images/products/product-second-s/SPEAK-NOW-4-back-300x300.png', priceOld: '۱۴۰,۰۰۰  تومان', priceNew: '۱۷۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-front-600x600.png', coverSecond: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-back-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/oxford-word-skills-2nd-pack-150x150.png', coverSecond: './assets/images/products/product-second-s/elementry-front-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/American-English-File-3nd-pack.png", coverSecond: './assets/images/products/product-second-s/american-english-dile-3rd2r-front-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/collins-2nd-pack.png', coverSecond: './assets/images/products/product-second-s/collins-2nd-writng-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/Interchange-5th-Collection.png', coverSecond: './assets/images/products/product-second-s/back_interchange_3_5th-300x300.jpg', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/American-English-File-2nd-Collection.png', coverSecond: './assets/images/products/product-second-s/2-BACK_ENGLISH-FILE-2ND-300x300.jpg', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Speak Now', coverMain: './assets/images/products/product-second-s/Speak-Now-Collection.png', coverSecond: './assets/images/products/product-second-s/SPEAK-NOW-4-back-300x300.png', priceOld: '۱۴۰,۰۰۰  تومان', priceNew: '۱۷۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-front-600x600.png', coverSecond: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-back-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Speak Now', coverMain: './assets/images/products/product-second-s/Speak-Now-Collection.png', coverSecond: './assets/images/products/product-second-s/SPEAK-NOW-4-back-300x300.png', priceOld: '۱۴۰,۰۰۰  تومان', priceNew: '۱۷۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-front-600x600.png', coverSecond: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-back-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Speak Now', coverMain: './assets/images/products/product-second-s/Speak-Now-Collection.png', coverSecond: './assets/images/products/product-second-s/SPEAK-NOW-4-back-300x300.png', priceOld: '۱۴۰,۰۰۰  تومان', priceNew: '۱۷۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 2nd', coverMain: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/Intermediate-English-Collocations-in-Use-2nd-back-300x300.png', priceOld: '۷۰۰,۰۰۰   تومان', priceNew: '۳۵۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های oxford wordd skills 2nd', coverMain: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-front-600x600.png', coverSecond: './assets/images/products/product-second-s/s/family-and-friends_2nd_starter-back-300x300.png', priceOld: '۱۹۵,۰۰۰  تومان', priceNew: '۹۵,۰۰۰', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های American English File 3rd', coverMain: "./assets/images/products/product-second-s/s/first-friends-1-front-.png", coverSecond: './assets/images/products/product-second-s/s/first-friends-1-back-300x300.png', priceOld: '۱۶۵,۰۰۰   تومان', priceNew: '۱۹۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Collins For IELTS 2nd', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-600x600.png', coverSecond: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-back-300x300.png', priceOld: '۳۰۰,۰۰۰ تومان', priceNew: '۱۱۵,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },
    { percent: '۵۱%-', nameBook: 'مجموعه کتاب های Interchange 5th', coverMain: './assets/images/products/product-second-s/s/the-official-cambridge-guide-to-ielts-dvd-300x300.png', coverSecond: './assets/images/products/product-second-s/s/cambridge-english-ielts-15-academic-back-300x300.png', priceOld: '۴۰۰,۰۰۰  تومان', priceNew: '۱۸۰,۰۰۰ ', id: id++, },

]

const bg_products = document.querySelectorAll(".bg-poctser")
const name_product = document.querySelectorAll(".product__title h3")
const price_old_product = document.querySelectorAll(".old__price ")
const price_new_product = document.querySelectorAll(".new__price")

function renderBackground() {
    bg_products.forEach((bg, index) => {
        myDataBook.forEach((data, indexd) => {
            if (indexd == index) {
                bg.style.background = `url(${data.coverMain})`
                name_product[index].textContent = `${data.nameBook}`
                price_old_product[index].textContent = `${data.priceOld}`
                price_new_product[index].textContent = `${data.priceNew}`
            }
        })

    })
}
renderBackground()
const product__body = document.querySelectorAll(".product__body")
product__body.forEach((bg, index) => {
    bg.addEventListener("mousemove", () => {
        myDataBook.forEach((data, indexd) => {
            if (index == indexd) {
                bg_products[index].style.background = `url(${data.coverSecond})`

            }
        })
    })
})
product__body.forEach((bg, index) => {
    bg.addEventListener("mouseleave", () => {
        myDataBook.forEach((data, indexd) => {
            if (index == indexd) {
                renderBackground()
            }
        })
    })
})


// functuion toggle first_list note footer
$(document).ready(function() {
    let m = document.querySelector(".another_note")
    let y = document.querySelector(".first_list ")
    let plus_note = document.querySelector(".plus_note")
    $(y).click(function() {
        $(m).slideToggle(500);
        m.classList.toggle("hifne")
        if (m.classList.contains("hifne")) {
            plus_note.innerHTML = "<i class='bx bx-minus'></i>"
        } else {
            plus_note.innerHTML = "<i class='bx bx-plus'></i>"
        }
    });
});

// ====================add producst to basket
let backetproductadd = []
let countProductUser = document.querySelectorAll(".count-product-user")
let counterProductBasket = 0
let chart_box = document.querySelectorAll(".basket__products .bx-cart")
product__body.forEach((element, index) => {
        element.addEventListener("click", () => {
            basketAdd(index)
            basketactive(chart_box[index], index)
        })
    })
    // basket active toggle icon in the container
function basketactive(element, index) {
    if (element.classList.contains("product-add-basket")) {
        element.classList.remove("product-add-basket")
        removeProductB(myDataBook[index])

    } else {
        element.classList.add("product-add-basket")

    }
}
//  add product to basket
function basketAdd(index) {
    if (backetproductadd.includes(myDataBook[index])) {} else {
        backetproductadd.push(myDataBook[index])
        counterProductBasket++
        countProductUser.forEach((el) => el.textContent = counterProductBasket)
        fixNumbers(backetproductadd, 'add')
        AddProdcutSide(backetproductadd)
    }
}
let productremovebasket = []
    // remoev product in basket
function removeProductB(index) {
    let result = backetproductadd.indexOf(index)
    productremovebasket = backetproductadd.splice(result, 1)
    counterProductBasket--
    countProductUser.forEach((el) => el.textContent = counterProductBasket)
    fixNumbers(backetproductadd, 'remove', rez = productremovebasket)
    AddProdcutSide(backetproductadd)
        // console.log(backetproductadd)
}
const farsiDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹']
let tottalsProductBasket = document.querySelectorAll(".product-tottals")

function converNumbr(data) {
    // let a = [/۰/g, /۱/g, /۲/g, /۳/g, /۴/g, /۵/g, /۶/g, /۷/g, /۸/g, /۹/g]
    // let b = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g]

    data.forEach((element) => {
        monybookadd = element.priceNew.replace(/,.../gi, "")
        if (typeof monybookadd === 'string') {
            for (var i = 0; i < 10; i++) {
                monybookadd = monybookadd.replace(farsiDigits[i], i).replace(farsiDigits[i], i);
            }
        }
        monybookadd = parseInt(monybookadd)

    })
}
// show basket input product when click mony 

//  =========================product type price arabic and persian====================================
let finalmony = 0
let monybookadd = ""
    // give price product convert persian to english and clac all of them then convert to persian 💪😇
function fixNumbers(dataMony, bol, d) {
    if (d) {
        converNumbr(d)
    } else {
        converNumbr(dataMony)
    }
    if (bol == 'add') {
        finalmony += monybookadd
    } else if (bol == "remove") {
        finalmony -= monybookadd

    }

    let convertNum = finalmony.toString()
    let numberEn = convertNum.split("")
    numberEn = numberEn.map((x) => farsiDigits[x]).join('')
    tottalsProductBasket.forEach((el, index) => {
        el.textContent = finalmony ? `${numberEn}۰۰۰` : "۰"
    })
    monybookadd = ""


};
// show product basket add in the slide bar left 🔁 🔁 🔁 🔁 🔁
let sideLeft_prodcuts = document.querySelector(".container-product-aside")
let show_slideProductclick = document.querySelectorAll(".bx-shopping-bag")
show_slideProductclick.forEach((element) => {
    element.addEventListener('click', function() {
        sideLeft_prodcuts.classList.toggle("show-aside-product")


    })
})


function AddProdcutSide(data) {
    let tem = ""
    data.forEach((element, index) => {
        return tem += `
        <div class="product-aside-s d-flex align-items-center justify-content-between">
            <div class="img-product-s text-right w-50">
                <img src="${element.coverMain}" alt="" class="w-75">
            </div>
            <div class="information-s text-right w-50">
                <p class="m-0 p-1"> ${element.nameBook}</p>
                <p> ${element.priceNew}</p>
                <button class="btn p-2 border-0 product-info-s">مشاهده بیشتر</button>
            </div>
        </div>
        `
    })
    if (tem) {
        document.querySelector('.container-product-aside').innerHTML = tem
    } else {
        document.querySelector('.container-product-aside').innerHTML = `<div class="empty-basket w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <h3>سبد خرید شما خالی می باشد</h3>
        <div class="img-empty">
         <img src="./assets/images/products/empty basket.png" alt="">
        </div>
    </div>`
    }
}