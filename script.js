let tit = "ELEGANCE, IS OUR HOME !";
let compteur = 0;
function ecrire() {
    let operation = setTimeout("ecrire()", 50);
    if (compteur <= tit.length) {
        document.former1.montitre.value = tit.substring(0, compteur);
        compteur++;
    }
    else {
        clearTimeout(operation);
    }
}

/* =========================================================
   GSAP PREMIUM ANIMATIONS
   L'ELEGANCE, C'EST CHEZ NOUS
   ========================================================= */

gsap.registerPlugin(ScrollTrigger);


/* =========================================================
   1. CONFIGURATION
   ========================================================= */

gsap.config({
    nullTargetWarn: false
});


/* =========================================================
   2. REDUCED MOTION
   Respecte les préférences d'accessibilité du navigateur
   ========================================================= */

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion) {
    gsap.set("*", {
        clearProps: "all"
    });
}



/* =========================================================
   4. INITIALISATION PRINCIPALE
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    if (reduceMotion) {
        return;
    }

    ecrire();

    /* Toutes les animations ci-dessous */
    heroAnimation();
    navbarAnimation();
    bandeAnimation();
    aboutAnimation();
    articlesAnimation();
    avisAnimation();
    contactAnimation();
    footerAnimation();
    hoverAnimations();
    navigationAnimation();

});


/* =========================================================
   5. HERO / ACCUEIL
   ========================================================= */

function heroAnimation() {

    const heroImage = document.querySelector("#image1");
    const heroImageMobile = document.querySelector("#image11");

    const heroText = document.querySelector('input[name="montitre"]');
    const subtitle = document.querySelector("#sousti");

    const heroParagraph = document.querySelector("#accueil p");

    const buttons = document.querySelectorAll("#btn1, #btn2");

    const socialLinks = document.querySelectorAll("#aa13, #aa14, #aa15");


    /* Position initiale */

    gsap.set([
        heroImage,
        heroImageMobile
    ], {
        opacity: 0,
        scale: 1.15,
        y: 40
    });


    gsap.set([
        heroText,
        subtitle,
        heroParagraph,
        buttons,
        socialLinks
    ], {
        opacity: 0,
        y: 35
    });


    /* Timeline principale */

    const heroTL = gsap.timeline({
        defaults: {
            ease: "power3.out"
        }
    });


    heroTL
        .to(heroImage, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.4,
            ease: "power3.out"
        })

        .to(heroImageMobile, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2
        }, "<")

        .to(heroText, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.8")

        .to(subtitle, {
            opacity: 1,
            y: 0,
            duration: 0.7
        }, "-=0.4")

        .to(heroParagraph, {
            opacity: 1,
            y: 0,
            duration: 0.8
        }, "-=0.3")

        .to(buttons, {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.12
        }, "-=0.4")

        .to(socialLinks, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15
        }, "-=0.3");


    /* Parallaxe image */

    if (heroImage) {

        gsap.to(heroImage, {

            y: -80,

            ease: "none",

            scrollTrigger: {
                trigger: "#accueil",
                start: "top top",
                end: "bottom top",
                scrub: 1
            }

        });

    }


    /* Petit effet flottant */

    if (heroImage) {

        gsap.to(heroImage, {

            y: "+=8",

            duration: 2.5,

            repeat: -1,

            yoyo: true,

            ease: "sine.inOut"

        });

    }

}


/* =========================================================
   6. NAVBAR
   ========================================================= */

function navbarAnimation() {

    const navbar = document.querySelector("nav.navbar");

    if (!navbar) return;


    gsap.from(navbar, {

        y: -100,

        opacity: 0,

        duration: 1,

        delay: 0.2,

        ease: "power4.out"

    });


    /* Navbar qui devient plus compacte au scroll */

    ScrollTrigger.create({

        start: "top -80",

        end: 99999,

        onUpdate: self => {

            if (self.direction === 1) {

                gsap.to(navbar, {
                    y: -5,
                    duration: 0.3
                });

            } else {

                gsap.to(navbar, {
                    y: 0,
                    duration: 0.3
                });

            }

        }

    });

}


/* =========================================================
   7. BANDE DES STATISTIQUES
   ========================================================= */

function bandeAnimation() {

    const bande = document.querySelector("#BANDE");

    if (!bande) return;

    const elements = bande.querySelectorAll(".col-4");


    gsap.from(elements, {

        opacity: 0,

        y: 50,

        scale: 0.9,

        duration: 0.8,

        stagger: 0.15,

        ease: "back.out(1.7)",

        scrollTrigger: {

            trigger: bande,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Compteurs */

    const valeurs = [1000, 500, 2000];

    elements.forEach((element, index) => {

        const texte = element.innerText;

        const match = texte.match(/\d+/);

        if (!match) return;

        const valeurFinale = valeurs[index];

        const reste = texte.replace(match[0], "");

        const compteur = {
            valeur: 0
        };


        gsap.to(compteur, {

            valeur: valeurFinale,

            duration: 2,

            ease: "power2.out",

            scrollTrigger: {

                trigger: bande,

                start: "top 80%",

                once: true

            },

            onUpdate: () => {

                element.innerHTML =
                    "+" +
                    Math.floor(compteur.valeur) +
                    "<br>" +
                    reste.replace("+", "").trim();

            }

        });

    });

}


/* =========================================================
   8. SECTION A PROPOS
   ========================================================= */

function aboutAnimation() {

    const section = document.querySelector("#apropos");

    if (!section) return;


    const title = document.querySelector("#titre1");

    const image = document.querySelector("#image2");

    const text = section.querySelector("p");


    /* Titre */

    gsap.from(title, {

        opacity: 0,

        y: 80,

        scale: 0.9,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: title,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Image */

    gsap.from(image, {

        opacity: 0,

        x: -120,

        rotation: -5,

        scale: 0.85,

        duration: 1.2,

        ease: "power4.out",

        scrollTrigger: {

            trigger: image,

            start: "top 80%",

            toggleActions: "play none none reverse"

        }

    });


    /* Parallaxe */

    gsap.to(image, {

        y: -50,

        ease: "none",

        scrollTrigger: {

            trigger: "#produits",

            start: "top bottom",

            end: "bottom top",

            scrub: 1

        }

    });


    /* Texte */

    gsap.from(text, {

        opacity: 0,

        x: 80,

        duration: 1,

        delay: 0.2,

        ease: "power3.out",

        scrollTrigger: {

            trigger: text,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });

}


/* =========================================================
   9. ARTICLES / CARTES
   ========================================================= */

function articlesAnimation() {

    const section = document.querySelector("#article");

    if (!section) return;


    const title = document.querySelector("#titre2");

    const cards = section.querySelectorAll(".card");


    /* Titre */

    gsap.from(title, {

        opacity: 0,

        y: 80,

        scale: 0.9,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: title,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Cartes */

    gsap.from(cards, {

        opacity: 0,

        y: 100,

        scale: 0.85,

        rotationX: 8,

        duration: 0.9,

        stagger: {

            each: 0.12,

            from: "start"

        },

        ease: "power3.out",

        scrollTrigger: {

            trigger: cards[0],

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Images des cartes */

    cards.forEach(card => {

        const image = card.querySelector("img");

        if (!image) return;


        gsap.to(image, {

            scale: 1.08,

            ease: "none",

            scrollTrigger: {

                trigger: card,

                start: "top bottom",

                end: "bottom top",

                scrub: 1

            }

        });

    });

}


/* =========================================================
   10. AVIS CLIENTS
   ========================================================= */

function avisAnimation() {

    const section = document.querySelector("#avis");

    if (!section) return;


    const title = section.querySelector("h1");

    const cards = section.querySelectorAll(".card");


    /* Titre */

    gsap.from(title, {

        opacity: 0,

        y: 70,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: title,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Cartes */

    gsap.from(cards, {

        opacity: 0,

        y: 80,

        scale: 0.9,

        duration: 0.8,

        stagger: 0.15,

        ease: "back.out(1.4)",

        scrollTrigger: {

            trigger: cards[0],

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Animation des étoiles */

    cards.forEach(card => {

        const stars = card.querySelector(".text-warning");

        if (!stars) return;


        gsap.from(stars, {

            opacity: 0,

            scale: 0,

            rotation: -20,

            duration: 0.7,

            ease: "back.out(2)",

            scrollTrigger: {

                trigger: card,

                start: "top 80%",

                toggleActions: "play none none reverse"

            }

        });

    });

}


/* =========================================================
   11. CONTACT
   ========================================================= */

function contactAnimation() {

    const section = document.querySelector("#contact");

    if (!section) return;


    const title = section.querySelector("h1");

    const infos = section.querySelectorAll("p");

    const form = section.querySelector("form");

    const inputs = section.querySelectorAll(
        "input, textarea, button"
    );


    /* Titre */

    gsap.from(title, {

        opacity: 0,

        x: -80,

        duration: 1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: section,

            start: "top 80%",

            toggleActions: "play none none reverse"

        }

    });


    /* Informations */

    gsap.from(infos, {

        opacity: 0,

        x: -50,

        duration: 0.7,

        stagger: 0.12,

        ease: "power3.out",

        scrollTrigger: {

            trigger: infos[0],

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Formulaire */

    gsap.from(form, {

        opacity: 0,

        x: 100,

        rotationY: 5,

        duration: 1,

        ease: "power4.out",

        scrollTrigger: {

            trigger: form,

            start: "top 85%",

            toggleActions: "play none none reverse"

        }

    });


    /* Champs */

    gsap.from(inputs, {

        opacity: 0,

        y: 25,

        duration: 0.6,

        stagger: 0.08,

        ease: "power2.out",

        scrollTrigger: {

            trigger: form,

            start: "top 75%",

            toggleActions: "play none none reverse"

        }

    });

}


/* =========================================================
   12. FOOTER
   ========================================================= */

function footerAnimation() {

    const footer = document.querySelector("footer");

    if (!footer) return;


    const elements = footer.querySelectorAll(
        "h4, h2, p, input, button, hr"
    );


    gsap.from(elements, {

        opacity: 0,

        y: 40,

        duration: 0.7,

        stagger: 0.1,

        ease: "power3.out",

        scrollTrigger: {

            trigger: footer,

            start: "top 90%",

            toggleActions: "play none none reverse"

        }

    });

}


/* =========================================================
   13. HOVER PREMIUM SUR LES CARTES
   ========================================================= */

function hoverAnimations() {

    const cards = document.querySelectorAll(
        "#article .card, #avis .card"
    );


    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {

            gsap.to(card, {

                y: -12,

                scale: 1.025,

                boxShadow:
                    "0 25px 50px rgba(0,0,0,0.15)",

                duration: 0.4,

                ease: "power3.out"

            });


            const image = card.querySelector("img");

            if (image) {

                gsap.to(image, {

                    scale: 1.1,

                    duration: 0.6,

                    ease: "power3.out"

                });

            }

        });


        card.addEventListener("mouseleave", () => {

            gsap.to(card, {

                y: 0,

                scale: 1,

                boxShadow:
                    "0 0 0 rgba(0,0,0,0)",

                duration: 0.5,

                ease: "power3.out"

            });


            const image = card.querySelector("img");

            if (image) {

                gsap.to(image, {

                    scale: 1,

                    duration: 0.5,

                    ease: "power3.out"

                });

            }

        });

    });


    /* Boutons */

    const buttons = document.querySelectorAll(
        ".btn, #btn1, #btn2"
    );


    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            gsap.to(button, {

                scale: 1.06,

                y: -3,

                duration: 0.25,

                ease: "power2.out"

            });

        });


        button.addEventListener("mouseleave", () => {

            gsap.to(button, {

                scale: 1,

                y: 0,

                duration: 0.3,

                ease: "power2.out"

            });

        });

    });


    /* Liens sociaux */

    const socials = document.querySelectorAll(
        "#aa13, #aa14, #aa15"
    );


    socials.forEach(link => {

        link.addEventListener("mouseenter", () => {

            gsap.to(link, {

                y: -8,

                rotation: 5,

                scale: 1.15,

                duration: 0.3,

                ease: "back.out(2)"

            });

        });


        link.addEventListener("mouseleave", () => {

            gsap.to(link, {

                y: 0,

                rotation: 0,

                scale: 1,

                duration: 0.3

            });

        });

    });

}


/* =========================================================
   14. NAVIGATION ACTIVE AU SCROLL
   ========================================================= */

function navigationAnimation() {

    const sections = document.querySelectorAll(
        "section[id]"
    );


    const navLinks = document.querySelectorAll(
        ".navlinks"
    );


    sections.forEach(section => {

        ScrollTrigger.create({

            trigger: section,

            start: "top 45%",

            end: "bottom 45%",

            onEnter: () => activateLink(section.id),

            onEnterBack: () => activateLink(section.id)

        });

    });


    function activateLink(id) {

        navLinks.forEach(link => {

            const href = link.getAttribute("href");

            if (href === `#${id}`) {

                gsap.to(link, {

                    color: "#ffc107",

                    scale: 1.08,

                    duration: 0.25

                });

            } else {

                gsap.to(link, {

                    color: "",

                    scale: 1,

                    duration: 0.25

                });

            }

        });

    }

}


/* =========================================================
   15. BOUTON MOBILE / BARRE MOBILE
   ========================================================= */

function mobileAnimation() {

    const mobileBar = document.querySelector(
        "#boutonn"
    );

    const mobileNav = document.querySelector(
        ".d-sm-none nav"
    );


    if (mobileBar) {

        gsap.from(mobileBar, {

            y: -80,

            opacity: 0,

            duration: 1,

            delay: 0.5,

            ease: "back.out(1.5)"

        });

    }


    if (mobileNav) {

        gsap.from(mobileNav, {

            y: 100,

            opacity: 0,

            duration: 1,

            delay: 0.8,

            ease: "power4.out"

        });

    }

}


/* Lancer l'animation mobile */

if (!reduceMotion) {

    document.addEventListener(
        "DOMContentLoaded",
        mobileAnimation
    );

}


/* =========================================================
   16. RAFRAÎCHISSEMENT SCROLLTRIGGER
   ========================================================= */

window.addEventListener("load", () => {

    ScrollTrigger.refresh();

});