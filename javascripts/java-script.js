document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('flavorSelect').addEventListener('change', function() {
        let select = this;
        let selectedOption = select.options[select.selectedIndex];
        select.style.backgroundColor = window.getComputedStyle(selectedOption).backgroundColor;
        select.style.color = '#ffffff'; 
    });

    const popupButton = document.getElementById('popup');
    const modal = document.getElementById('order-modal');
    const closeModal = document.getElementById('close-modal');

    popupButton.addEventListener('click', () => {
        modal.style.display = 'flex';
    });


    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        };
    });
});
