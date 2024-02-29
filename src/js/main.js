document.addEventListener('DOMContentLoaded', function () {
    aboutTextScroll.forEach((char) => {
        const text = new SplitType(char, { types: 'words' })

        gsap.from(text.words, {
            scrollTrigger: {
                trigger: char,
                start: 'top 80%',
                end: 'top 60%',
                scrub: true,
                markers: false
            },
            color: "rgba(255, 255, 255, 0.1)",
            // scaleY: 0,
            // y: -20,
            // transformOrigin: "top",
            stagger: 0.1
        });
    });
});

let tlLoad = gsap.timeline()

tlLoad.to('#about', {
    display: 'none',
    duration: 2,
    onComplete: homeAnimation
})
    .to('#loading', {
        opacity: 0,
        duration: 1,

    })
    .to('#loading', {
        zIndex: -1,
        duration: 0,
        onComplete: () => {
            document.body.classList.remove('overflow-hidden')
        }
    })


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

document.addEventListener("mousemove", (event) => {
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

// homeAnimation()
preapareAnimation()


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
            theme.section.style.display = 'none'
            if (index1 === index3) {
                menuButton.classList.add(theme.bgColor)
                bar.classList.add(theme.stroke)
                anchor2.classList.add(theme.color)
                theme.section.classList.remove("hidden")
                if (theme.section == home) {
                    theme.section.style.display = 'flex'
                } else {
                    theme.section.style.display = 'block'
                }
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
            onComplete: () => {
                changePanel()

            }
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
            ease: "sine.in",
            onComplete: displayAnimation
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

    animation.from("#lineHome", {
        width: "0%",
        duration: 1
    })
        .from("#wordName", {
            duration: 0.3,
            color: "red",
            opacity: 0,
            y: 50,
            scaleY: 0,
            transformOrigin: "top",
            ease: "sine.out",
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

function preapareAnimation() {
    if (!preapareFlag) {
        let tlPrepare = gsap.timeline()

        tlPrepare.to("#splitAboutData .char", {
            y: 10,
            opacity: 0,
            duration: 0
        })
            .to("#pictureAbout", {
                y: 50,
                opacity: 0,
                duration: 0
            })
            .to("#aboutTextScroll", {
                opacity: 0,
                duration: 0
            })

        preapareFlag = true
    }
}

function displayAnimation() {
    if (!about.classList.contains("hidden")) {
        aboutAnimation()
    }
}

function aboutAnimation() {
    if (!aboutFlag) {
        let tlAbout = gsap.timeline()

        tlAbout.to("#splitAboutData .char", {
            y: 0,
            opacity: 1,
            stagger: 0.01,
            duration: 0.2
        })
            .to("#pictureAbout", {
                y: 0,
                opacity: 1,
                duration: 0.5
            })
            .to("#aboutTextScroll", {
                opacity: 1,
                duration: 0.3
            })

        aboutFlag = true
    }
}




const lenis = new Lenis()

lenis.on('scroll', (e) => {
    console.log(e)
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf)  