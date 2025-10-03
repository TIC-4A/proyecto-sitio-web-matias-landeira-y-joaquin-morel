document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const featuredItems = document.querySelectorAll('.featured-item');
    const allItems = [...galleryItems, ...featuredItems];

    allItems.forEach((item, index) => {
        item.style.opacity = 0;
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = 1;
            item.style.transform = 'translateY(0)';
        }, index * 100); 
    });
});
