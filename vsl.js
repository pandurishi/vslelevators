 // vsl.js
document.addEventListener("DOMContentLoaded", function () {
  const elevator = document.getElementById("elevator");

  elevator.addEventListener("animationend", function () {
    // Check if the elevator has reached the bottom
    if (elevator.offsetTop + elevator.offsetHeight <= window.innerHeight) {
      // Add the "open" class to the elevator to open the doors
      elevator.classList.add("open");

      // After a delay, navigate to another HTML page
      setTimeout(function () {
        window.location.href = "https://instagram.com/vsl_elevators_?igshid=NGVhN2U2NjQ0Yg==";
      }, 5000); // 2 seconds delay
    }
  });
});
