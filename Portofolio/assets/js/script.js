document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    const contentSections = document.querySelectorAll('.content-section');

    function showContent(targetId) {
        contentSections.forEach(section => {
            section.classList.add('hidden');
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.remove('hidden');

            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function setACtiveMenuItem(clickedItem) {
        menuItems.forEach(item => {
            item.classList.remove('active');
        });

        clickedItem.classList.add('active');
    }

    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            setACtiveMenuItem(this);
            showContent(targetId);
            // window.location.hash = targetId;s
        });
    });

    const initialTarget = window.location.hash.substring(1) || 
    (menuItems.length > 0 ? menuItems[0].getAttribute('data-target') : null);

    if (initialTarget) {
        const initialItem = Array.from(menuItems).find(
            item => item.getAttribute('data-target') === initialTarget
        );

        if (initialItem) {
            setACtiveMenuItem(initialItem);
            showContent(initialTarget);
        }
    }
});