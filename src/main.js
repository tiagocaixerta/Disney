document.addEventListener('DOMContentLoaded',function() {
    const buttons =document.querySelectorAll('[data-tab-button]');
   
    
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(botao){
            const abaAlvo = botao.target.dataset.tabButton;
            const aba = document.querySelector(`data-tab-id=${abaAlvo}`);
            escondeTodasAbas();
            abaAlvo.classList.add('shows_list--is-active');
            removebotaoAtivo()
            botao.target.classList.add('shows_tabs_button_active');

        })
    }
})

function removebotaoAtivo() {
    const buttons =document.querySelectorAll('[data-tab-button]'); 
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows_tabs_button_active');
    }
}



function escondeTodasAbas() {
    const tabsContainer = document.querySelectorAll('[data-tab-id]');

    for (let i = 0; i < tabsContainer.length; i++) {
        tabsContainer[i].classList.remove('shows_list--is-active');
    }
}