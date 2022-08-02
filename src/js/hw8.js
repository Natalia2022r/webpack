
'use strict';
const button = document.querySelectorAll(".sound");
const audio = document.querySelectorAll("audio");

export function clear() {
    
    for(let i = 0; i < button.length; i++) {
        if(button[i].classList.contains("playing")) 
         button[i].classList.remove("playing");
        

        }
    }

    

for(let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
        clear();
        let id = this.id;
        this.classList.add("playing");
        if(audio[i].id === id) {
                audio[i].currentTime = 0;
                return audio[i].paused ? audio[i].play() : audio[i].pause();
            }
    });
}


   document.addEventListener("keydown", function(event) {
    if (event.repeat) return;
        clear();
    let id = event.code;
        for(let i = 0; i < button.length; i++) {
         if(audio[i].id === id) {
            button[i].classList.add("playing");
            audio[i].currentTime = 0;
            return audio[i].paused ? audio[i].play() : audio[i].pause();
        }
    }
});