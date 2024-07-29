document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('infoModal');
    const span = document.getElementsByClassName('close')[0];
    const infoButtons = document.querySelectorAll('.info-button');

    infoButtons.forEach(button => {
        button.onclick = function() {
            modal.style.display = 'block';
        }
    });

    span.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
});
