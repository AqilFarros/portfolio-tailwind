// // // // // // // // // // // // // // // // // // // // // // // // // // // // 

navigation.forEach((anchor, index1) => {
    transitionPanel.forEach((panel, index2) => {
        colorTheme.forEach((theme, index3) => {
            buttonsHome.forEach((button, btnIndex) => {
                anchor.addEventListener("click", () => {
                    eventPanel(index1, panel, index2, theme, index3);
                })
                button.addEventListener("click", () => {
                    eventPanel(btnIndex, panel, index2, theme, index3);
                })
            })
        })
    })
})

home.addEventListener("mousemove", (event) => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    let positionX = (event.clientX / width) - 0.55;
    let positionY = (event.clientY / height) - 0.55;

    gsap.to("#codeIcon", {
        rotationY: positionX * 150,
        rotationX: positionY * 150,
        ease: "none"
    })
})

homeAnimation()




const toggleButton = () => {
    let dBarPath = barPath.getAttribute("d")

    if (dBarPath === "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5") {
        barPath.setAttribute("d", "M6 18 18 6M6 6l12 12")
    } else if (dBarPath === "M6 18 18 6M6 6l12 12") {
        barPath.setAttribute("d", "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5")
    }

    if (menuButton.innerText === "MENU") {
        menuButton.innerText = "CLOSE"
    } else {
        menuButton.innerText = "MENU"
    }

    navbar.classList.toggle("-translate-x-[100%]")

}

function eventPanel(index1, panel, index2, theme, index3) {
    function changePanel() {
        menuButton.classList.remove(colorTheme[index3].bgColor)
        bar.classList.remove(colorTheme[index3].stroke)

        navigation.forEach((anchor2) => {
            anchor2.classList.remove(colorTheme[index3].color)
            theme.section.classList.add("hidden")
            if (index1 === index3) {
                menuButton.classList.add(theme.bgColor)
                bar.classList.add(theme.stroke)
                anchor2.classList.add(theme.color)
                theme.section.classList.remove("hidden")
            }
        })
    }

    panel.classList.remove(...panel.classList);
    panel.classList.add("w-full")
    panel.classList.add(colorTheme[index1].zdex[index2])
    panel.classList.add(colorTheme[index1].colorTransition[index2]);

    let tl = gsap.timeline();

    tl.to("#transitionPanel", {
        zIndex: 20,
        duration: 0
    })

        .to("#panelTr1", {
            zIndex: 50,
            duration: 0,
        })

        .to("#panelTr2", {
            zIndex: 40,
            duration: 0,
        })

        .to("#panelTr3", {
            zIndex: 30,
            duration: 0,
        })

        .to("#panelTr4", {
            zIndex: 20,
            duration: 0,
        })

        .to("#panelTr5", {
            zIndex: 10,
            duration: 0,
        })
        .to("#panelTr1", {
            x: "0%",
            duration: 0.5,
            ease: "sine.in"
        })
        .to("#panelTr2", {
            x: "-100%",
            duration: 0,

        })
        .to("#panelTr2", {
            x: "0%",
            duration: 0.4,
            ease: "sine.out"

        })
        .to("#panelTr3", {
            x: "-100%",
            duration: 0,

        })
        .to("#panelTr3", {
            x: "0%",
            duration: 0.3,
            ease: "sine.out"

        })
        .to("#panelTr4", {
            x: "-100%",
            duration: 0,

        })
        .to("#panelTr4", {
            x: "0%",
            duration: 0.2,
            ease: "sine.out"

        })
        .to("#panelTr5", {
            x: "-100%",
            duration: 0,

        })
        .to("#panelTr5", {
            x: "0%",
            duration: 0.2,
            ease: "sine.out",
            onComplete: changePanel
        })

        .to("#panelTr1", {
            zIndex: 10,
            duration: 0,
        })

        .to("#panelTr2", {
            zIndex: 20,
            duration: 0,
        })

        .to("#panelTr3", {
            zIndex: 30,
            duration: 0,
        })

        .to("#panelTr4", {
            zIndex: 40,
            duration: 0,
        })

        .to("#panelTr5", {
            zIndex: 50,
            duration: 0,
        })

        .to("#panelTr1", {
            x: "100%",
            duration: 0.2,
            ease: "sine.in"
        })

        .to("#panelTr1", {
            x: "500%",
            duration: 0,
        })

        .to("#panelTr2", {
            x: "100%",
            duration: 0.2,
            ease: "sine.in"
        })

        .to("#panelTr2", {
            x: "400%",
            duration: 0
        })

        .to("#panelTr3", {
            x: "100%",
            duration: 0.2,
            ease: "sine.in",
        })

        .to("#panelTr3", {
            x: "300%",
            duration: 0
        })

        .to("#panelTr4", {
            x: "100%",
            duration: 0.2,
            ease: "sine.in"
        })

        .to("#panelTr4", {
            x: "400%",
            duration: 0
        })

        .to("#panelTr5", {
            x: "100%",
            duration: 0.2,
            ease: "sine.in"
        })

        .to("#panelTr1", {
            x: "-100%",
            duration: 0
        })

        .to("#transitionPanel", {
            zIndex: -1,
            duration: 0
        })

        .to("#panelTr2", {
            x: "-200%",
            duration: 0
        })

        .to("#panelTr3", {
            x: "-300%",
            duration: 0
        })

        .to("#panelTr4", {
            x: "-400%",
            duration: 0
        })

        .to("#panelTr5", {
            x: "-500%",
            duration: 0
        })
}

function homeAnimation() {
    let animation = gsap.timeline()

    animation.from("#wordName", {
        duration: 0.3,
        color: "red",
        opacity: 0,
        y: 50,
        ease: "bounce.out",
        delay: 0.05,
        stagger: 0.05
    })
        .to("#namePortfolio", {
            webkitTextStroke: "#93c5fd 2px",
            skewX: -10,
            duration: 0.3,
            ease: "sine.out"
        })
        .from("#jobHome", {
            x: -50,
            opacity: 0,
            duration: 0.3,
            ease: "sine.out",
            onComplete: () => {
                cursorType()
                masterJobTl.play()
            }
        })
        .from("#lineHome", {
            width: "0%",
            duration: 1
        })
        .to("#buttonHome", {
            duration: 0.4,
            opacity: 1,
            y: 0,
            ease: "bounce.out",
            stagger: 0.05
        })
        .to("#buttonHome", {
            duration: 0.4,
            skewX: -20,
            ease: "sine.out",
        })

    function cursorType(masterJobTl) {
        let cursorType = gsap.to("#cursorType", {
            opacity: 0,
            ease: "power2.inOut",
            repeat: -1
        })
    }

    let masterJobTl = gsap.timeline({ repeat: -1 }).pause()

        jobWord.forEach((word) => {
            let jobTl = gsap.timeline({ repeat: 1, yoyo: true, repeatDelay: 1 })
            jobTl.to("#jobDisplay", { duration: 1, text: word })
            masterJobTl.add(jobTl)
        })
}