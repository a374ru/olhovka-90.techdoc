// скрипт увеличения изображения по клику 
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('img');

    height_img = document.querySelector('img').height + 'px';

    images.forEach(img => {
        img.addEventListener('click', function () {
            if (this.style.height != '100%') {
                this.style.height = '100%'; // Возвращаем 100% высоту
            } else {
                this.style.height = height_img; // Уменьшаем при повторном клике
            }
        });
    });
});