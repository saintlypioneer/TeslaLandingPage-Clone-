const openMenu = () => {
    document.querySelector('.backdrop').style.display = 'initial';
    document.querySelector('aside').style.right = 0;
}

const closeMenu = () => {
    document.querySelector('.backdrop').style.display = 'none';
    document.querySelector('aside').style.right = '-320px';
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.getElementsByClassName('close')[0].onclick = e => {
    e.preventDefault();
    closeMenu();
}

document.getElementsByClassName('backdrop')[0].onclick = e => {
    e.preventDefault();
    closeMenu();
}