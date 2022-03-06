let navBar = document.querySelector('.navBar');

document.querySelector('#menu-btn').onclick = () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
}