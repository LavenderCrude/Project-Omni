
document.querySelector(".section-2").style.marginTop="120px";
var x = document.querySelectorAll(".privacy-settings");
document.querySelectorAll(".privacy-settings")[0].style.marginTop = "50px";

// Function to adjust margin based on document width
function adjustMargin() {
    var privacySettings = document.querySelector(".section-2");
    if (window.innerWidth > 768) { // Adjust this value as needed
        privacySettings.style.marginTop = "150px";
    } else {
        privacySettings.style.marginTop = "0";
    }
}
// Call the function initially
adjustMargin();
// Add event listener for window resize
window.addEventListener('resize', adjustMargin);


let lastPrivacy = document.querySelectorAll(".privacy-settings").length;

document.querySelectorAll(".privacy-settings")[lastPrivacy - 1].style.marginBottom = "120px";

function goBack() {
    window.history.back();
}