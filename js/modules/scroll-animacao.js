export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");

    if (sections.length) {
        const widownMetade = window.innerHeight * 0.6;

        function animarScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = sectionTop - widownMetade < 0;

                if (isSectionVisible) {
                    section.classList.add("ativo");
                } else if(section.classList.contains("ativo")) {
                    section.classList.remove("ativo");
                }
            });
        }

        animarScroll();

        window.addEventListener("scroll", animarScroll);
    }
}
