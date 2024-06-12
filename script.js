//help button
const openHelp = document.getElementById('help_button');
const help_modal_container = document.getElementById('help_modal_container');
const closeBtn = document.getElementById('close');

const popupContent = document.querySelector('.popup-content');
const popupOverlay = document.getElementById('slime-PopUp');

const phosphorBtn = document.getElementById('phosphor');
const glitchBtn = document.getElementById('glitch');
const mosaicBtn = document.getElementById('mosaic');
const crystalBtn = document.getElementById('crystal');
const tabbyBtn = document.getElementById('tabby');
const hunterBtn = document.getElementById('hunter');
const pinkBtn = document.getElementById('pink');
const dervishBtn = document.getElementById('dervish');
const rockBtn = document.getElementById('rock');
const quatumBtn = document.getElementById('quatum');
const boomBtn = document.getElementById('boom');
const puddleBtn = document.getElementById('puddle');

//audio function
const audio_player = document.getElementById('audio_player');

function play_audio(src) {
    let audio_element = new Audio();
    if (!audio_element.paused) {
        audio_element.pause();
        audio_element.currentTime = 0;
    }
    audio_element.src = src;
    audio_element.play();
}

document.getElementById('phosphor').addEventListener('click', function() {
    play_audio('audios/phosphor-audio.mp3');
});

document.getElementById('glitch').addEventListener('click', function() {
    play_audio('audios/glitch-audio.mp3');
});

document.getElementById('mosaic').addEventListener('click', function() {
    play_audio('audios/mosaic-audio.mp3');
});

document.getElementById('crystal').addEventListener('click', function() {
    play_audio('audios/crystal-audio.mp3');
});

document.getElementById('tabby').addEventListener('click', function() {
    play_audio('audios/tabby-audio.mp3');
});

document.getElementById('hunter').addEventListener('click', function() {
    play_audio('audios/hunter-audio.mp3');
});

document.getElementById('pink').addEventListener('click', function() {
    play_audio('audios/pink-audio.mp3');
});

document.getElementById('dervish').addEventListener('click', function() {
    play_audio('audios/dervish-audio.mp3');
});

document.getElementById('rock').addEventListener('click', function() {
    play_audio('audios/rock-audio.mp3');
});

document.getElementById('hunter').addEventListener('click', function() {
    play_audio('audios/hunter-audio.mp3');
});

document.getElementById('quatum').addEventListener('click', function() {
    play_audio('audios/quantum-audio.mp3');
});

document.getElementById('boom').addEventListener('click', function() {
    play_audio('audios/boom-audio.mp3');
});

document.getElementById('puddle').addEventListener('click', function() {
    play_audio('audios/puddle-audio.mp3');
});


//when you click on the slimes, the slime will pop-up 
phosphorBtn.addEventListener("click", function() {
    //alert ("phos called");
    computeSlime(0);
});
glitchBtn.addEventListener("click", function() {
    computeSlime(1);
});
mosaicBtn.addEventListener("click", function() {
    computeSlime(2);
});
crystalBtn.addEventListener("click", function() {
    computeSlime(3);
});
tabbyBtn.addEventListener("click", function() {
    computeSlime(4);
});
hunterBtn.addEventListener("click", function() {
    computeSlime(5);
});
pinkBtn.addEventListener("click", function() {
    computeSlime(6);
});
dervishBtn.addEventListener("click", function() {
    computeSlime(7);
});
rockBtn.addEventListener("click", function() {
    computeSlime(8);
});
quatumBtn.addEventListener("click", function() {
    computeSlime(9);
});
boomBtn.addEventListener("click", function() {
    computeSlime(10);
});
puddleBtn.addEventListener("click", function() {
    computeSlime(11);
});

openHelp.addEventListener('click', () => {
    help_modal_container.classList.add('show');
});

closeBtn.addEventListener('click', () => {
    help_modal_container.classList.remove('show');
});

//birthday function
document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('.character-button');
    
    const closePopupButton = document.getElementById('close-popup');
    
    submitButton.addEventListener('click', function() {
        const birthdayInput = document.getElementById('birthday').valueAsDate;
        const birthdayMonth = birthdayInput.getMonth() + 1;
        const birthdayDay = birthdayInput.getDate() + 2;
        //console.log (birthdayMonth);
        //console.log (birthdayDay);

        let slimeName = '';
        let slimeDescription = '';
        let slimeDate = '';
        let slimeImageSrc = '';
        
        if ((birthdayMonth === 12 && birthdayDay >= 22) || (birthdayMonth === 1 && birthdayDay <= 19)) {
            computeSlime(0);
        } else if ((birthdayMonth === 11 && birthdayDay >= 22) || (birthdayMonth === 12 && birthdayDay <= 21)) {
            computeSlime(1);
        } else if ((birthdayMonth === 10 && birthdayDay >= 24) || (birthdayMonth === 11 && birthdayDay <= 21)) {
            computeSlime(2);
        } else if ((birthdayMonth === 9 && birthdayDay >= 23) || (birthdayMonth === 10 && birthdayDay <= 23)) {
            computeSlime(3);
        } else if ((birthdayMonth === 8 && birthdayDay >= 23) || (birthdayMonth === 9 && birthdayDay <= 22)) {
            computeSlime(4);
        } else if ((birthdayMonth === 7 && birthdayDay >= 23) || (birthdayMonth === 8 && birthdayDay <= 22)) {
            computeSlime(5);
        } else if ((birthdayMonth === 6 && birthdayDay >= 22) || (birthdayMonth === 7 && birthdayDay <= 22)) {
            computeSlime(6);
        } else if ((birthdayMonth === 5 && birthdayDay >= 21) || (birthdayMonth === 6 && birthdayDay <= 21)) {
            computeSlime(7);
        } else if ((birthdayMonth === 4 && birthdayDay >= 20) || (birthdayMonth === 5 && birthdayDay <= 20)) {
            computeSlime(8);
        } else if ((birthdayMonth === 3 && birthdayDay >= 21) || (birthdayMonth === 4 && birthdayDay <= 19)) {
            computeSlime(9);
        } else if ((birthdayMonth === 2 && birthdayDay >= 19) || (birthdayMonth === 3 && birthdayDay <= 20)) {
            computeSlime(10);
        } else if ((birthdayMonth === 1 && birthdayDay >= 20) || (birthdayMonth === 2 && birthdayDay <= 18)) {
            computeSlime(11);
        }
        
        //possibly delete this 
        if (slimeName !== '') {
            popupContent.querySelector('h1').textContent = slimeName;
            popupContent.querySelector('h2').textContent = slimeDate;
            popupContent.querySelector('p').textContent = slimeDescription;
            popupOverlay.style.display = 'block';
        }
    });


    closePopupButton.addEventListener('click', function() {
        popupOverlay.style.display = 'none';
    });
});


//when the user enters a date, it will give them the corresponding slime
function computeSlime (slimeNum){
    //alert ("compute slime successful " + slimeNum);
    if (slimeNum == 0){
        slimeName = 'Phosphor Slime';
        slimeDescription = "Light up your life with the Phosphor Slime, the shining star of the zodiac skyline! With its gentle glow and steady perseverance, this slime embodies all the resilience and ambition of a Capricorn. Whether it's reaching for the stars or illuminating the darkest nights, this slime shines bright with determination and drive!";
        slimeDate = 'December 22 - January 19';
        slimeImageSrc = 'images/slimes/phosphor-slime.png';
        play_audio('audios/phosphor-audio.mp3');
    } else if (slimeNum == 1){
        slimeName = 'Glitch Slime';
        slimeDescription = "Hold onto your hats and gear up for adventure with the Glitch Slime, the wild wanderer of the zodiac plains! With its knack for bending reality within the digital realm, this slime embodies the thrill-seeking excitement of a Sagittarius.";
        slimeDate = 'November 22 - December 21';
        slimeImageSrc = 'images/slimes/glitch-slime.png';
        play_audio('audios/glitch-audio.mp3'); 
    } else if (slimeNum == 2){
        slimeName = 'Mosaic Slime';
        slimeDescription = "Enter the mysterious world of the Mosaic Slime, the enigmatic enchanter of the zodiac realm! With its hypnotic patterns and magnetic allure, this slime embodies all the intensity and passion of a Scorpio. Whether it's delving into the depths of the unknown or unraveling secrets with its keen intuition, this slime is a force to be reckoned with!";
        slimeDate = 'October 23 - November 21';
        slimeImageSrc = 'images/slimes/mosaic-slime.png';
        play_audio('audios/mosaic-audio.mp3'); 
    } else if (slimeNum == 3) {
        slimeName = 'Crystal Slime';
        slimeDescription = "Sparkle and shine with the Crystal Slime, the dazzling diplomat of the zodiac realm! With its radiant beauty and natural grace, this slime embodies all the elegance and charm of a Libra. Whether it's striking a pose or smoothing over conflicts with style, this slime brings balance and beauty to every situation.";
        slimeDate = 'September 23 - October 22';
        slimeImageSrc = 'images/slimes/crystal-slime.png';
        play_audio('audios/crystal-audio.mp3'); 
    } else if (slimeNum == 4) {
        slimeName = 'Tabby Slime';
        slimeDescription = "Precision meets purr-fection with the Tabby Slime, the master organizer of the zodiac crew! With its keen senses and attention to detail, this slime is like a Virgo's secret weapon for keeping things neat and tidy. From color-coordinated closets to perfectly planned picnics, this slime knows how to make every detail count!";
        slimeDate = 'August 23 - September 22';
        slimeImageSrc = 'images/slimes/tabby-slime.png';
        play_audio('audios/tabby-audio.mp3'); 
    } else if (slimeNum == 5) {
        slimeName = 'Hunter Slime';
        slimeDescription = "Bow down to the majestic Hunter Slime, the lion-hearted ruler of the zodiac jungle! With its fierce roar and fearless spirit, this slime embodies all the confidence and charisma of a Leo. Whether it's strutting its stuff on the catwalk or leading the pride, this slime commands attention wherever it goes!";
        slimeDate = 'July 23 - August 22';
        slimeImageSrc = 'images/slimes/hunter-slime.png';
        play_audio('audios/hunter-audio.mp3'); 
    } else if (slimeNum == 6) {
        slimeName = 'Pink Slime';
        slimeDescription = "Snuggle up with the Pink Slime, the cuddliest companion in the cosmos! With its soft squishiness and heartwarming hugs, this slime channels all the cozy vibes of a Cancerian nest. Whether you need a shoulder to cry on or someone to share your favorite snacks, this slime's got you covered with love and understanding.";
        slimeDate = 'June 21 - July 22';
        slimeImageSrc = 'images/slimes/pink-slime.png';
        play_audio('audios/pink-audio.mp3'); 
    } else if (slimeNum == 7) {
        slimeName = 'Dervish Slime';
        slimeDescription = "Meet the Dervish Slime, the life of the party and master of the dance floor in the zodiac world! Just like a Gemini, this twirling tornado of energy is always switching it up, keeping things fresh and exciting. With its dizzying moves and infectious enthusiasm, you'll never get bored with this gem of a slime!";
        slimeDate = 'May 21 - June 20';
        slimeImageSrc = 'images/slimes/dervish-slime.png';
        play_audio('audios/dervish-audio.mp3'); 
    } else if (slimeNum == 8) {
        slimeName = 'Rock Slime';
        slimeDescription = "Solid as a rock and as dependable as your favorite snack stash, the Rock Slime embodies the down-to-earth charm of Taurus. With its unshakeable determination and stubbornly lovable personality, this slime is your go-to buddy for a steady ride through life's ups and downs.";
        slimeDate = 'April 20 - May 20';
        slimeImageSrc = 'images/slimes/rock-slime.png';
        play_audio('audios/rock-audio.mp3'); 
    } else if (slimeNum == 9) {
        slimeName = 'Quantum Slime';
        slimeDescription = "Always on the move and ready to explore multiple dimensions at once, the Quantum Slime is the ultimate trailblazer of the zodiac. With its boundless energy and knack for starting new adventures, it's no wonder Aries vibes with this multiverse-hopping, star-chasing slime!";
        slimeDate = 'March 21 - April 19';
        slimeImageSrc = 'images/slimes/quatum-slime.png';
        play_audio('audios/quantum-audio.mp3'); 
    } else if (slimeNum == 10) {
        slimeName = 'Boom Slime';
        slimeDescription = "Brace yourself for a tidal wave of imagination with the Boom Slime, the explosive dreamer of the zodiac skies! With its colorful bursts and boundless empathy, this slime embodies all the creativity and compassion of a Pisces. Whether it's igniting fireworks of inspiration or spreading waves of kindness, this slime is a true cosmic confection of fun and fantasy!";
        slimeDate = 'February 19 - March 20';
        slimeImageSrc = 'images/slimes/boom-slime.png';
        play_audio('audios/boom-audio.mp3'); 
    } else if (slimeNum == 11) {
        slimeName = 'Puddle Slime';
        slimeDescription = "Dive into the cool waters of creativity with the Puddle Slime, the visionary voyager of the zodiac seas! With its fluid nature and innovative spirit, this slime embodies all the originality and independence of an Aquarius. Whether it's making waves of change or flowing with the currents of inspiration, this slime brings a splash of excitement wherever it goes!";
        slimeDate = 'January 20 - February 18';
        slimeImageSrc = 'images/slimes/puddle-slime.png';
        play_audio('audios/puddle-audio.mp3'); 
    }

    
        popupContent.querySelector('h1').textContent = slimeName;
        popupContent.querySelector('h2').textContent = slimeDate;
        popupContent.querySelector('p').textContent = slimeDescription;
        popupContent.querySelector('.popup-right img').src = slimeImageSrc;
        popupOverlay.style.display = 'block';
}
