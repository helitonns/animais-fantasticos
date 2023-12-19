export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");

    const widownMetade = window.innerHeight * 0.6;

    function animarScroll() {
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = sectionTop - widownMetade < 0;

            if (isSectionVisible) {
                section.classList.add("ativo");
            } else if (section.classList.contains("ativo")) {
                section.classList.remove("ativo");
            }
        });
    }

    if (sections.length) {
        animarScroll();
        window.addEventListener("scroll", animarScroll);
    }
}
