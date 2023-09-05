const cur = document.querySelector(".cursor");

document.addEventListener("mousemove",(event)=>{
console.log(event.screenX - (window.innerWidth / 2));

document.documentElement.style.setProperty("--left", event.pageX + 1)
document.documentElement.style.setProperty("--top", event.pageY +10)
})

document.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    alert('success!');
    return false;
}, false);
