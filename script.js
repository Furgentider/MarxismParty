document.addEventListener('DOMContentLoaded', () => {
    // Добавляем эффект при наведении на советские символы
    const sovietSymbols = document.querySelectorAll('.star, .hammer-sickle');
    
    sovietSymbols.forEach(symbol => {
        symbol.addEventListener('mouseover', () => {
            symbol.style.transform = 'scale(1.2) rotate(10deg)';
            symbol.style.textShadow = '0 0 15px var(--soviet-light-gold)';
            symbol.style.transition = 'all 0.3s ease';
        });
        
        symbol.addEventListener('mouseout', () => {
            symbol.style.transform = '';
            symbol.style.textShadow = '';
        });
    });

    // Добавляем анимацию для кнопок при загрузке страницы
    const buttons = document.querySelectorAll('.button');
    
    buttons.forEach((button, index) => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            button.style.transition = 'all 0.5s ease';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
        }, 100 * index);
    });
}); 