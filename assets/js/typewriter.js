const texts = [
    "Software Developer",
    "Mobile App Developer",
    "UI/UX Designer",
    "App Designer"
];
const typingSpeed = 30; // Speed in milliseconds
const deletingSpeed = 10; // Speed in milliseconds
const delayBetweenTexts = 2000; // Delay between texts in milliseconds

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentText = texts[textIndex];
    const displayedText = currentText.substring(0, charIndex);
    document.getElementById("typewriter-text").innerHTML = displayedText;

    if (!isDeleting && charIndex < currentText.length) {
        charIndex++;
        setTimeout(typeWriter, typingSpeed);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeWriter, deletingSpeed);
    } else if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, delayBetweenTexts);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        setTimeout(typeWriter, typingSpeed);
    }
}

window.onload = function() {
    typeWriter();
};
