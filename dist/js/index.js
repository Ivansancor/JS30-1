const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");


function playSound(e){
    const audio = document.querySelector(`audio[data-keyCode="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-keyCode="${e.keyCode}"]`);
    audio.currentTime= 0;
    audio.play();
    key.classList.add("active");
    // this.classList.add("active");
    // if (e.keyCode === this.data-keycode=`${e.keyCode}`){
    // console.log("yes");
    // }
//    if (div.data-keyCode=`${e.keyCode}`]){
//        console.log("yes");
 //  }
}

function removeClass(e){
    const key = document.querySelector(`div[data-keyCode="${e.keyCode}"]`);
    key.classList.remove("active");
}

window.addEventListener("keydown", playSound);
window.addEventListener("keyup", removeClass);