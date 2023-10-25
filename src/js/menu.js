var menuItems = document.querySelectorAll('.item-menu');

function selectLink() {
    menuItems.forEach(function(item) {
        item.classList.remove('ativo');
    });
    this.classList.add('ativo');
}

menuItems.forEach(function(item) {
    item.addEventListener('click', selectLink);
});

var btnExp = document.querySelector('#btn-exp');
var btnFechar = document.querySelector('#btn-fechar'); // Adicione essa linha
var menuSide = document.querySelector('.menu-lateral');

btnExp.addEventListener('click', function() {
    menuSide.classList.toggle('expandir');
    btnExp.style.display = 'none'; // Oculta o botão de menu
    btnFechar.style.display = 'inline-block'; // Mostra o ícone "X"
    btnFechar.style.marginRight = '10px';
});

btnFechar.addEventListener('click', function() {
    menuSide.classList.remove('expandir');
    btnExp.style.display = 'inline-block'; // Mostra o botão de menu
    btnFechar.style.display = 'none'; // Oculta o ícone "X"
});
