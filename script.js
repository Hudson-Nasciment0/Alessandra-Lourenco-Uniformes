document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Catalog filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const catalogItems = document.querySelectorAll('.catalog-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter items
            catalogItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.classList.remove('hide');
                } else {
                    item.classList.add('hide');
                }
            });
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".box-container .catalog-item").forEach(product => {
    product.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = product.getAttribute("data-name");
        previewBox.forEach(preview =>{
            let target = preview.getAttribute("data-target");
            if(name == target){
                preview.classList.add("ativo")
            }
        })
    }
});

previewBox.forEach(close =>{
    close.querySelector('.material-symbols-outlined').onclick = () =>{
        close.classList.remove("ativo")
        previewContainer.style.display = 'none';
    }

})