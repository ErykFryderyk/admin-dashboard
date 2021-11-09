const hamburger = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');
const main = document.querySelector('.main');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
});



