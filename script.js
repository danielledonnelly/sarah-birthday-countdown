// Function to update the countdown
function updateCountdown() {
  // Paris, France timezone
  const birthdayDate = new Date('2024-07-01T00:00:00+02:00');
  const currentDate = new Date();
  
  // Calculate the difference in milliseconds
  const difference = birthdayDate - currentDate;
  
  if (difference <= 0) {
    // If the countdown is over, display a message
    document.getElementById('countdown').innerHTML = "Happy Birthday, Sarah!";
  } else {
    // Calculate days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    // Display the countdown
    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown
updateCountdown();
