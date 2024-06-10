document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const cards = document.querySelectorAll('.pricing-card');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active class to clicked tab
            tab.classList.add('active');

            // Get target plan from data attribute
            const targetPlan = tab.getAttribute('data-target');

            // Remove active class from all cards and hide them
            cards.forEach(card => {
                card.classList.remove('active');
                card.style.transform = 'translateX(100%)';
                card.style.opacity = 0;
            });

            // Find the card that matches the target plan and show it
            const targetCard = document.querySelector(`.pricing-card[data-plan="${targetPlan}"]`);
            targetCard.classList.add('active');
            targetCard.style.transform = 'translateX(0)';
            targetCard.style.opacity = 1;
        });
    });
});
