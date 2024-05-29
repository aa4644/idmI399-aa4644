//help button
const open = document.getElementById('help_button');
const help_modal_container = document.getElementById('help_modal_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    help_modal_container.classList.add('show');
});

close.addEventListener('click', () => {
    help_modal_container.classList.remove('show');
});


document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector('.character-button');
    const popupOverlay = document.getElementById('slime-PopUp');
    const closePopupButton = document.getElementById('close-popup');
    
    submitButton.addEventListener('click', function() {
        const birthdayInput = document.getElementById('birthday').valueAsDate;
        const birthdayMonth = birthdayInput.getMonth() + 1;
        const birthdayDay = birthdayInput.getDate();

        let slimeName = '';
        let slimeDescription = '';
        let slimeDate = '';

        if ((birthdayMonth === 3 && birthdayDay >= 21) || (birthdayMonth === 4 && birthdayDay <= 19)) {
            slimeName = 'Quantum Slime';
            slimeDescription = "Always on the move and ready to explore multiple dimensions at once, the Quantum Slime is the ultimate trailblazer of the zodiac. With its boundless energy and knack for starting new adventures, it's no wonder Aries vibes with this multiverse-hopping, star-chasing slime!";
            slimeDate = 'March 21 - April 19';
        } else if ((birthdayMonth === 4 && birthdayDay >= 20) || (birthdayMonth === 5 && birthdayDay <= 20)) {
            slimeName = 'Rock Slime';
            slimeDescription = "Solid as a rock and as dependable as your favorite snack stash, the Rock Slime embodies the down-to-earth charm of Taurus. With its unshakeable determination and stubbornly lovable personality, this slime is your go-to buddy for a steady ride through life's ups and downs.";
            slimeDate = 'April 20 - May 20';
        } else if ((birthdayMonth === 5 && birthdayDay >= 21) || (birthdayMonth === 6 && birthdayDay <= 20)) {
            slimeName = 'Dervish Slime';
            slimeDescription = "Meet the Dervish Slime, the life of the party and master of the dance floor in the zodiac world! Just like a Gemini, this twirling tornado of energy is always switching it up, keeping things fresh and exciting. With its dizzying moves and infectious enthusiasm, you'll never get bored with this gem of a slime!";
            slimeDate = 'May 21 - June 20';
        } else if ((birthdayMonth === 6 && birthdayDay >= 21) || (birthdayMonth === 7 && birthdayDay <= 22)) {
            slimeName = 'Pink Slime';
            slimeDescription = "Snuggle up with the Pink Slime, the cuddliest companion in the cosmos! With its soft squishiness and heartwarming hugs, this slime channels all the cozy vibes of a Cancerian nest. Whether you need a shoulder to cry on or someone to share your favorite snacks, this slime's got you covered with love and understanding.";
            slimeDate = 'June 21 - July 22';
        } else if ((birthdayMonth === 7 && birthdayDay >= 23) || (birthdayMonth === 8 && birthdayDay <= 22)) {
            slimeName = 'Hunter Slime';
            slimeDescription = "Bow down to the majestic Hunter Slime, the lion-hearted ruler of the zodiac jungle! With its fierce roar and fearless spirit, this slime embodies all the confidence and charisma of a Leo. Whether it's strutting its stuff on the catwalk or leading the pride, this slime commands attention wherever it goes!";
            slimeDate = 'July 23 - August 22';
        } else if ((birthdayMonth === 8 && birthdayDay >= 23) || (birthdayMonth === 9 && birthdayDay <= 22)) {
            slimeName = 'Tabby Slime';
            slimeDescription = "Precision meets purr-fection with the Tabby Slime, the master organizer of the zodiac crew! With its keen senses and attention to detail, this slime is like a Virgo's secret weapon for keeping things neat and tidy. From color-coordinated closets to perfectly planned picnics, this slime knows how to make every detail count!";
            slimeDate = 'August 23 - September 22';
        } else if ((birthdayMonth === 9 && birthdayDay >= 23) || (birthdayMonth === 10 && birthdayDay <= 22)) {
            slimeName = 'Crystal Slime';
            slimeDescription = "Sparkle and shine with the Crystal Slime, the dazzling diplomat of the zodiac realm! With its radiant beauty and natural grace, this slime embodies all the elegance and charm of a Libra. Whether it's striking a pose or smoothing over conflicts with style, this slime brings balance and beauty to every situation.";
            slimeDate = 'September 23 - October 22';
        } else if ((birthdayMonth === 10 && birthdayDay >= 23) || (birthdayMonth === 11 && birthdayDay <= 21)) {
            slimeName = 'Mosaic Slime';
            slimeDescription = "Enter the mysterious world of the Mosaic Slime, the enigmatic enchanter of the zodiac realm! With its hypnotic patterns and magnetic allure, this slime embodies all the intensity and passion of a Scorpio. Whether it's delving into the depths of the unknown or unraveling secrets with its keen intuition, this slime is a force to be reckoned with!";
            slimeDate = 'October 23 - November 21';
        } else if ((birthdayMonth === 11 && birthdayDay >= 22) || (birthdayMonth === 12 && birthdayDay <= 21)) {
            slimeName = 'Glitch Slime';
            slimeDescription = "Hold onto your hats and gear up for adventure with the Glitch Slime, the wild wanderer of the zodiac plains! With its knack for bending reality within the digital realm, this slime embodies the thrill-seeking excitement of a Sagittarius.";
            slimeDate = 'November 22 - December 21';
        } else if ((birthdayMonth === 12 && birthdayDay >= 22) || (birthdayMonth === 1 && birthdayDay <= 19)) {
            slimeName = 'Phosphor Slime';
            slimeDescription = "Light up your life with the Phosphor Slime, the shining star of the zodiac skyline! With its gentle glow and steady perseverance, this slime embodies all the resilience and ambition of a Capricorn. Whether it's reaching for the stars or illuminating the darkest nights, this slime shines bright with determination and drive!";
            slimeDate = 'December 22 - January 19';
        } else if ((birthdayMonth === 1 && birthdayDay >= 20) || (birthdayMonth === 2 && birthdayDay <= 18)) {
            slimeName = 'Puddle Slime';
            slimeDescription = "Dive into the cool waters of creativity with the Puddle Slime, the visionary voyager of the zodiac seas! With its fluid nature and innovative spirit, this slime embodies all the originality and independence of an Aquarius. Whether it's making waves of change or flowing with the currents of inspiration, this slime brings a splash of excitement wherever it goes!";
            slimeDate = 'January 20 - February 18';
        } else if ((birthdayMonth === 2 && birthdayDay >= 19) || (birthdayMonth === 3 && birthdayDay <= 20)) {
            slimeName = 'Boom Slime';
            slimeDescription = "Brace yourself for a tidal wave of imagination with the Boom Slime, the explosive dreamer of the zodiac skies! With its colorful bursts and boundless empathy, this slime embodies all the creativity and compassion of a Pisces. Whether it's igniting fireworks of inspiration or spreading waves of kindness, this slime is a true cosmic confection of fun and fantasy!";
            slimeDate = 'February 19 - March 20';
        }
        
        

        if (slimeName !== '') {
            const popupContent = document.querySelector('.popup-content');
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

