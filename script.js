let confettiLaunched = false; // Flag to track confetti launch

// Function to update the countdown
function updateCountdown() {
  // Set the target date and time (June 7th, 2024, 8:00 PM Newfoundland Time)
  const targetDate = new Date('2024-06-07T20:00:00-02:30');
  const currentDate = new Date();

  // Calculate the difference in milliseconds
  const difference = targetDate - currentDate;

  if (difference <= 0 && !confettiLaunched) {
      // If the countdown is over and confetti has not been launched, display a message and start confetti
      document.getElementById('countdown').style.display = 'none';
      document.getElementById('message').style.display = 'block';
      startConfetti();
      confettiLaunched = true; // Set the flag to true to prevent re-launching confetti
  } else if (difference > 0) {
      // Calculate days, hours, minutes, seconds
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

// Function to start confetti animation
function startConfetti() {
  confetti({
      particleCount: 200,
      spread: 70,
      origin: { y: 0.6 }
  });
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial call to update the countdown
updateCountdown();
