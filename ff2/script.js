const searchInput = document.querySelector("[data-search]")
const userCardTemplate = document.querySelector("[data-user-template]")
const userCardContainer = document.querySelector("[data-user-cards-container]")


let things = []

searchInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase()
    things.forEach(thing => {
        const isVisible =
            thing.title.toLowerCase().includes(value) ||
            thing.desc.toLowerCase().includes(value)
        thing.element.classList.toggle("hide", !isVisible)
    });
})

let stuff = [{
        "title": "sensitivity",
        "desc": "changes how fast your mouse moves"
    },
    {
        "title": "inventory",
        "desc": "opens your inventory"
    },
    {
        "title": "settings",
        "desc": "opens the settings"
    },
    {
        "title": "controls",
        "desc": "opens the controls"
    },
    {
        "title": "loadout",
        "desc": "opens your loadout"
    },
    {
        "title": "missions",
        "desc": "opens the mission screen"
    },
    {
        "title": "cl_crosshairthickness",
        "desc": "changes the crosshair thickness"
    },
    {
        "title": "r_cleardecals",
        "desc": "opens the console and executes this command if it needs no additional variables"
    },
    {
        "title": "exec autoexec",
        "desc": "opens the console and executes this command if it needs no additional variables"
    }

]

things = stuff.map(thing => {
    const card = userCardTemplate.content.cloneNode(true).children[0]
    const header = card.querySelector("[data-header]")
    const body = card.querySelector("[data-body]")
    header.textContent = thing.title
    body.textContent = thing.desc
    userCardContainer.append(card)
    return { title: thing.title, desc: thing.desc, element: card }
});