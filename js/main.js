const collapse = document.querySelector('.navbar-collapse')
const showNav = document.querySelector('.show')


function hideNav() {
	collapse.classList.remove('show')
}

collapse.addEventListener('click', hideNav)
