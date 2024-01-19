document.addEventListener("DOMContentLoaded", function () {
    const colorButton = document.getElementById("colorButton");
    const resume = document.getElementById("resume");
    const header = document.querySelector("header");

    colorButton.addEventListener("click", function () {
        // Change the background color of the resume section
        const randomBackgroundColor = getRandomColor();
        resume.style.backgroundColor = randomBackgroundColor;

        // Change the text color of all text within the resume section
        const randomTextColor = getRandomColor();
        resume.style.color = randomTextColor;

        // Change the text color in the header
        const randomHeaderColor = getRandomColor();
        header.style.color = randomHeaderColor;
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
