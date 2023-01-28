// This will give you sound when you click on the buttons
for (let i = 0; i < document.querySelectorAll('.set button').length; i++) {
    document.querySelectorAll('.set button')[i].addEventListener('click', function () {
        var buttonLetter = this.innerHTML;
        makeSound(buttonLetter);
        buttonAnime(buttonLetter);
    });
}


// This will give you sound when you type the corresponding key
document.addEventListener('keydown', function (event) {
    makeSound(event.key);
    buttonAnime(event.key);
})



function makeSound(key) {

    switch (key) {
        case 'w':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'a':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case 's':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'd':
            var tom_1 = new Audio('sounds/tom-1.mp3');
            tom_1.play();
            break;
        case 'j':
            var tom_2 = new Audio('sounds/tom-2.mp3');
            tom_2.play();
            break;
        case 'k':
            var tom_3 = new Audio('sounds/tom-3.mp3');
            tom_3.play();
            break;
        case 'l':
            var tom_4 = new Audio('sounds/tom-4.mp3');
            tom_4.play();
            break;

        default:
            console.log(buttonLetter)
            break;
    }
}

function buttonAnime(currentKey) {
    var activeButton = document.querySelector('.' + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function () {
        activeButton.classList.remove('pressed');
    }, 200);
}
