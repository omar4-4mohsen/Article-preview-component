const sharebtn = document.getElementById("share");
const overlay = document.getElementById("speech");
const shareSvg = document.getElementById("share-svg");

// Store the original values of the share button's background and the share SVG's fill
const originalBackground = sharebtn.style.background;
const originalFill = shareSvg.style.fill;

// Define a function that will toggle the overlay and the button's appearance
const toggleOverlay = () => {
    // Check if the overlay is currently visible or not
    if (overlay.style.display === "flex") {
        // If it is visible, hide it and restore the original values of the button's background and the SVG's fill
        overlay.style.display = "none";
        sharebtn.style.background = originalBackground;
        shareSvg.style.fill = originalFill;
    } else {
        // If it is not visible, show it and change the button's background and the SVG's fill to the desired values
        overlay.style.display = "flex";
        sharebtn.style.background = `hsl(214, 17%, 51%)`;
        shareSvg.style.fill = "#fff";
    }
};

// Add an event listener that will call the toggleOverlay function when the button is clicked
sharebtn.addEventListener("click", toggleOverlay);
