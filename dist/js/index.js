const keys = document.querySelectorAll(".key");
const audio = document.querySelectorAll("audio");


function playSound(e){
    this.classList.add("active");
    // if (e.keyCode === this.data-keycode=`${e.keyCode}`){
    // console.log("yes");
    // }
//    if (div.data-keyCode=`${e.keyCode}`]){
//        console.log("yes");
 //  }
}

keys.forEach(key => key.addEventListener("click", playSound));