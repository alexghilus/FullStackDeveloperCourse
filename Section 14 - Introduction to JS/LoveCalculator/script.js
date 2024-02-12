// Function to generate a random matching percentage
function generateMatchingPercentage() {
    // Get input values
    var maleName = document.getElementById('maleName').value;
    var femaleName = document.getElementById('femaleName').value;
  
    // Check if both names are entered
    if (maleName === '' || femaleName === '') {
      alert('Please enter both names.');
      return;
    }
  
    // Generate a random percentage between 1 and 100
     var matchingPercentage = Math.floor(Math.random() * 100) + 1;

    // Display the matching percentage
    
    document.getElementById('result').innerText = maleName + " and " + femaleName + " have a matching chance of " + matchingPercentage + "%";
  }