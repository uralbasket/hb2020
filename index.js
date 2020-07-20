const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', (event) => {
    // проверяем, какая вкладка активна сейчас - возможно, ничего не надо делать 
    if (!event.currentTarget.classList.contains('active')) {
        buttons.forEach(button => button.classList.remove('active'));
        event.currentTarget.classList.add('active');
        switchTab(event.currentTarget.name);
    }
}));

switchTab = (activeTab) => {
    const containers = document.querySelectorAll('.container');
    containers.forEach(container => {
        if (container.getAttribute('name') === activeTab) {
            container.classList.add('open');
        } else {
            container.classList.remove('open');
        }
    });
}