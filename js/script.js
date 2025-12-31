document.querySelectorAll('.dropdown-button').forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        const dropdown = button.parentElement;
        const isOpen = dropdown.classList.contains('open');
        
        document.querySelectorAll('.filter-dropdown').forEach(d => {
            d.classList.remove('open');
        });
        
        if (!isOpen) {
            dropdown.classList.add('open');
        }
    });
});

document.addEventListener('click', () => {
    document.querySelectorAll('.filter-dropdown').forEach(d => {
        d.classList.remove('open');
    });
});