let navbar = document.querySelector(".navigation")
let navigation = document.querySelectorAll(".navigation a")
let menuButton = document.getElementById("menuButton")
let bar = document.getElementById("bars")
let barPath = document.querySelector("#bars path")
let dBarPath = barPath.getAttribute("d")

let transitionPanel = document.querySelectorAll("#transitionPanel div")

let home = document.getElementById("home");
let about = document.getElementById("about");
let portfolio = document.getElementById("portfolio");
let contact = document.getElementById("contact");

let buttonsHome = document.querySelectorAll(".button button")

let preapareFlag = false

let aboutFlag = false
const splitAboutData = new SplitType('#splitAboutData')
const aboutTextScroll = document.querySelectorAll("#aboutTextScroll")
console.log(aboutTextScroll);

const colorTheme = [
    {
        section: home,
        color: "text-blue-600",
        bgColor: "bg-blue-600",
        stroke: "stroke-blue-600",
        colorTransition: [
            "bg-blue-400", "bg-blue-500", "bg-blue-600", "bg-blue-700", "bg-blue-800"
        ],
        zdex: [
            "z-[50]", "z-[40]", "z-[30]", "z-[20]", "z-[10]"
        ]
    },
    {
        section: about,
        color: "text-yellow-500",
        bgColor: "bg-yellow-500",
        stroke: "stroke-yellow-500",
        colorTransition: [
            "bg-yellow-400", "bg-yellow-500", "bg-yellow-600", "bg-yellow-700", "bg-yellow-800"
        ],
        zdex: [
            "z-[50]", "z-[40]", "z-[30]", "z-[20]", "z-[10]"
        ]
    },
    {
        section: portfolio,
        color: "text-lime-600",
        bgColor: "bg-lime-600",
        stroke: "stroke-lime-600",
        colorTransition: [
            "bg-lime-400", "bg-lime-500", "bg-lime-600", "bg-lime-700", "bg-lime-800"
        ],
        zdex: [
            "z-[50]", "z-[40]", "z-[30]", "z-[20]", "z-[10]"
        ]
    },
    {
        section: contact,
        color: "text-red-600",
        bgColor: "bg-red-600",
        stroke: "stroke-red-600",
        colorTransition: [
            "bg-red-400", "bg-red-500", "bg-red-600", "bg-red-700", "bg-red-800"
        ],
        zdex: [
            "z-[50]", "z-[40]", "z-[30]", "z-[20]", "z-[10]"
        ]
    },
]

const jobWord = ["Student", "Developer", "Tester"]

gsap.to("#panelTr1", {
    x: "-100%",
    duration: 0
})
gsap.to("#panelTr2", {
    x: "-200%",
    duration: 0
})
gsap.to("#panelTr3", {
    x: "-300%",
    duration: 0
})
gsap.to("#panelTr4", {
    x: "-400%",
    duration: 0
})
gsap.to("#panelTr5", {
    x: "-500%",
    duration: 0
})

gsap.registerPlugin(ScrollTrigger)