document.addEventListener('DOMContentLoaded', () => {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
        const percent = bar.getAttribute('data-percent');
        const barFill = bar.querySelector('.bar-fill');
        barFill.style.width = `${percent}%`;
    });
});
