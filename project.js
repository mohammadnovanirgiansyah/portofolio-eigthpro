// JavaScript untuk menambah interaktivitas pada Blog

document.addEventListener("DOMContentLoaded", function () {
    // Fungsi pencarian sederhana
    const searchInput = document.querySelector(".search-bar input");
    const blogCards = document.querySelectorAll(".blog-card");

    searchInput.addEventListener("input", function () {
        const searchText = searchInput.value.toLowerCase();

        blogCards.forEach((card) => {
            const blogTitle = card.querySelector("h3").textContent.toLowerCase();
            const blogContent = card.querySelector("p").textContent.toLowerCase();

            if (blogTitle.includes(searchText) || blogContent.includes(searchText)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });

    // Animasi saat menggulir ke bagian bawah
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Menambahkan efek hover pada ikon sosial
    const socialIcons = document.querySelectorAll(".social a");
    socialIcons.forEach((icon) => {
        icon.addEventListener("mouseover", function () {
            icon.style.color = "blue";
        });
        icon.addEventListener("mouseout", function () {
            icon.style.color = "";
        });
    });
});
