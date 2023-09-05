// const cur = document.querySelector(".cursor");
const ulEl = document.querySelector("ul");

document.addEventListener("mousemove",(event)=>{

document.documentElement.style.setProperty("--left", event.pageX + 1)
document.documentElement.style.setProperty("--top", event.pageY +10)
})

document.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    ulEl.style.left = `${ev.clientX}px`
    ulEl.style.top = `${ev.clientY}px`
    ulEl.style.display = `block`;
    var liEl = document.querySelectorAll("ul > li")

    liEl.forEach(item=>{
        item.addEventListener("mouseover",()=>{
            item.classList.add("active")
        })
        item.addEventListener("mouseleave",()=>{
           item.classList.remove("active")
        })
        
    })
    return false;
}, false);

document.addEventListener("click", () =>{
    ulEl.style.display = "none"
})