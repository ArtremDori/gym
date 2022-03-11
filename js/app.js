

document.querySelector('.burger__outer').addEventListener('click',function (e) {

      document.querySelector('.menu-bar__list').classList.toggle('active');
      document.querySelector('.burger').classList.toggle('active');
      document.querySelector('body').classList.toggle('fixed');
      e.preventDefault();
});
