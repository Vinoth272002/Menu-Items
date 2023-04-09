const menuItems = [
    {
        id:1,
        items:"Animal 1",
        oneliners:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-1.jpg",
        animals:"Animal Name1",
        descs:"One:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
    {
        id:2,
        items:"Animal 2",
        oneliners:"Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-2.jpg",
        animals:"Animal Name2",
        descs:"Two:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
    {
        id:3,
        items:"Animal 3",
        oneliners:"Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-3.jpg",
        animals:"Animal Name3",
        descs:"Three:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
    {
        id:4,
        items:"Animal 4",
        oneliners:"Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-4.jpg",
        animals:"Animal Name4",
        descs:"Four:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
    {
        id:5,
        items:"Animal 5",
        oneliners:"Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-5.jpg",
        animals:"Animal Name5",
        descs:"Five:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
    {
        id:6,
        items:"Animal 6",
        oneliners:"Six:Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, temporibus! Beatae qui sapiente obcaecati laborum quas corporis? Molestiae, suscipit mollitia.",
        imgs:"./images/animal-7.jpg",
        animals:"Animal Name6",
        descs:"Six:Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempore dolorum nemo, commodi obcaecati sapiente nostrum laborum iste fugiat sit."
    },
]

const item = document.getElementById("item");
const oneliner = document.getElementById("oneliner");
const img = document.getElementById("img");
const animal = document.getElementById("animal");
const desc = document.getElementById("desc");
const prev = document.getElementById("prev");
const random = document.getElementById("random");
const next = document.getElementById("next");

let currentMenu = 0;

window.addEventListener('DOMContentLoaded',()=>{
    allMenu(currentMenu);
});

const allMenu = ()=>{
    let menu = menuItems[currentMenu];
    item.textContent = menu.items;
    oneliner.textContent = menu.oneliners;
    img.src = menu.imgs;
    animal.textContent = menu.animals;
    desc.textContent = menu.descs;
}

// Random menu

random.addEventListener('click',()=>{
    currentMenu = Math.floor(Math.random()*menuItems.length);
    allMenu(currentMenu);
});

// Previous 

prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu < 0){
        currentMenu = menuItems.length-1;
    }
    allMenu(currentMenu);
});

// Next
next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu > menuItems.length-1){
        currentMenu = 0;
    }
    allMenu(currentMenu);
});
