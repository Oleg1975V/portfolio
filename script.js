// Бургер-меню
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});

// Обработчик формы
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    
    // Добавляем параметры вручную для совместимости
    const actionUrl = new URL(form.action);
    actionUrl.searchParams.set('_url', 'https://oleg1975v.github.io/portfolio');
    actionUrl.searchParams.set('_template', 'table');
    
    form.action = actionUrl.toString();
    
    submitBtn.disabled = true;
    submitBtn.textContent = 'Отправка...';
});