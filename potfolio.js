const panels = document.querySelectorAll('.panel');
let activeIndex = 0;
// Function to activate the next panel
function activateNextPanel() {
 // Remove the 'active' class from all panels
  panels.forEach(panel => panel.classList.remove('active'));
// Add the 'active' class to the current panel
  panels[activeIndex].classList.add('active');

  // Move to the next panel (or loop back to the first)
  activeIndex = (activeIndex + 1) % panels.length;
}

// Initialize the animation
setInterval(activateNextPanel, 2000); // Change panel every 2 seconds

// Start with the first panel active
activateNextPanel();
