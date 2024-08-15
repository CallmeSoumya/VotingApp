// Initialize or retrieve the vote counts from local storage
let votes = JSON.parse(localStorage.getItem('votes')) || { option1: 0, option2: 0, option3: 0 };

// Function to update the displayed results
function updateResults() {
    const totalVotes = votes.option1 + votes.option2 + votes.option3;
    document.getElementById('result1').innerText = `Hyderabadi Biriyani: ${((votes.option1 / totalVotes) * 100).toFixed(2)}%`;
    document.getElementById('result2').innerText = `Chole Bhature: ${((votes.option2 / totalVotes) * 100).toFixed(2)}%`;
    document.getElementById('result3').innerText = `Plain Dosa: ${((votes.option3 / totalVotes) * 100).toFixed(2)}%`;
}

// Function to handle voting
function vote(option) {
    votes[option]++;
    localStorage.setItem('votes', JSON.stringify(votes));
    updateResults();
}

// Update the results when the page loads
updateResults();
