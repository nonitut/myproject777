document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('load', function() {
        const firstBlockLeft = document.querySelector('.firstblockleft');
        const firstBlockRight = document.querySelector('.firstblockright');
        setTimeout(() => {
            firstBlockLeft.classList.add('fade-in');
        }, 500);
        setTimeout(() => {
            firstBlockRight.classList.add('fade-in');
        }, 1500); 
    });

    document.getElementById('flavorSelect').addEventListener('change', function() {
        let select = this;
        let selectedOption = select.options[select.selectedIndex];
        select.style.backgroundColor = window.getComputedStyle(selectedOption).backgroundColor;
        select.style.color = '#ffffff'; 
    });

    const startSurveyButton = document.getElementById('startSurvey');
    const modal = document.getElementById('pop');
    const closePopup = document.getElementById('closePopup');

    startSurveyButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closePopup.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    const nextSteps = document.querySelectorAll('.nextStep');
    const steps = document.querySelectorAll('.popupwithtest > div');

    nextSteps.forEach((button, index) => {
        button.addEventListener('click', () => {
            steps[index].classList.remove('active');
            if (index + 1 < steps.length) {
                steps[index + 1].classList.add('active');
            } else {
                modal.style.display = 'none';
            }
        });
    });





        const alertOnHover = document.querySelector('.alertonhover');
        const etapWtoroyPopup = document.querySelector('.etapwtoroypopup');
    
        alertOnHover.addEventListener('mouseenter', function() {
            etapWtoroyPopup.style.display = 'block';
            etapWtoroyPopup.style.opacity = '0';
            setTimeout(function() {
                etapWtoroyPopup.style.opacity = '1';
            }, 0); 
        });
    
        alertOnHover.addEventListener('mouseleave', function() {
            setTimeout(function() {
                etapWtoroyPopup.style.opacity = '0';
                setTimeout(function() {
                    etapWtoroyPopup.style.display = 'none';
                }, 1000); 
            }, 1000); 
        });

    
});
