export default function initAnimacaoScroll() {
    const sections = document.querySelectorAll("[data-anime='scroll']");

    if (sections.length) {
        const widownMetade = window.innerHeight * 0.6;

        function animarScroll() {
            sections.forEach((item) => {
                const sectionTop =
                    item.getBoundingClientRect().top - widownMetade;

                if (sectionTop < 0) {
                    item.classList.add("ativo");
                }
            });
        }

        animarScroll();

        window.addEventListener("scroll", animarScroll);
    }
}
