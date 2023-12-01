function initTabNav() {
    const tabMenu = document.querySelectorAll(".js-tabmenu li");
    const tabContent = document.querySelectorAll(".js-tabcontent section");

    if (tabMenu.length && tabContent.length) {
        tabContent[0].classList.add("ativo");

        function activeTab(index) {
            tabContent.forEach((item) => {
                item.classList.remove("ativo");
            });

            tabContent[index].classList.add("ativo");
        }

        tabMenu.forEach((itemMenu, index) => {
            itemMenu.addEventListener("click", () => {
                activeTab(index);
            });
        });
    }
}

initTabNav();

function initAccordion() {
    const accordionList = document.querySelectorAll(".js-accordion dt");

    function activeAccordion() {
        this.classList.toggle("ativo");
        this.nextElementSibling.classList.toggle("ativo");
    }

    accordionList.forEach((item) => {
        item.addEventListener("click", activeAccordion);
    });
}

initAccordion();

function initScrollSuave() {
    const linksInternos = document.querySelectorAll(".js-menu a[href^='#'");

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });

        //Forma alternativa
        //const sectionTop = section.offsetTop;
        // window.scrollTo({
        //     top: sectionTop,
        //     behavior: "smooth",
        // });
    }

    linksInternos.forEach((item) => {
        item.addEventListener("click", scrollToSection);
    });
}

initScrollSuave();

function initAnimacaoScroll() {
    const sections = document.querySelectorAll(".js-scroll");

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

initAnimacaoScroll();
