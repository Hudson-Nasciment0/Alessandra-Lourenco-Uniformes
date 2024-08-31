document.addEventListener('DOMContentLoaded', function () {
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

// div de informações dos produtos

let previewContainer = document.querySelector(".products-preview");
let previewBox = previewContainer.querySelectorAll(".preview");

document.querySelectorAll(".box-container .catalog-item").forEach(product => {
    product.onclick = () => {
        previewContainer.style.display = 'flex';
        let name = product.getAttribute("data-name");
        previewBox.forEach(preview => {
            let target = preview.getAttribute("data-target");
            if (name == target) {
                preview.classList.add("ativo")
            }
        })
    }
});

previewBox.forEach(close => {
    close.querySelector('.material-symbols-outlined').onclick = () => {
        close.classList.remove("ativo")
        previewContainer.style.display = 'none';
    }

})


// Formulário


const clickForm = document.querySelectorAll(".btn")


function clickF() {

    const name = document.getElementById("nameForm").value
    const email = document.getElementById("emailForm").value
    const tel = document.getElementById("telForm").value

    if(name === "" || email === "" || tel ===""){
        alert("Preencha os Campos Vazios")
    }

    else if(tel.length <= 13){
        alert("Insira um número maior que 11 digítos ")

    }

    else {
        const mensagem = `Nome: ${name} Email: ${email} Telefone ${tel}`
        window.open(`https://wa.me/5511946002938?text=${mensagem}`, '_blank')
    }

}

        // Máscara const tel 

    const tel = document.getElementById("telForm");
    
    tel.addEventListener ("input", () =>{
        
        const limparValor = tel.value.replace(/\D/g, "").substring(0, 11);

        let numerosArray = limparValor.split("");

        let numeroFormatado = "";

        if(numerosArray.length > 0) {

            numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
        }

        if(numerosArray.length > 2) {

            numeroFormatado += `${numerosArray.slice(2,7).join("")}`;

        }

        if(numerosArray.length > 7) {
            numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
        }

        tel.value = numeroFormatado;
    });
