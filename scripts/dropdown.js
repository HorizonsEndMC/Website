/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function toggleDropdown(element) {
    // Get the first content and toggle show
    element.getElementsByClassName("dropdown-content")[0].classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-button')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");

        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show')) openDropdown.classList.remove('show');
        }
    }
}