window.toggleMenu = function(button) {
    const content = button.nextElementSibling;
    const arrow = button.querySelector('.arrow'); 

    // 3. Logic to toggle
    if (content.style.maxHeight && content.style.maxHeight !== '0px') {
        content.style.maxHeight = '0px'; 
        if (arrow) arrow.style.transform = 'rotate(0deg)';
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        if (arrow) arrow.style.transform = 'rotate(180deg)';
    }
};