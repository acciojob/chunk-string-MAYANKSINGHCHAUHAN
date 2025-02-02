// Function to chunk the string into smaller parts
function chunkString(str, length) {
    // If the input string is null, return an empty array
    if (!str) return [];

    let chunks = [];
    
    // Loop through the string and slice it into chunks of the given length
    for (let i = 0; i < str.length; i += length) {
        chunks.push(str.slice(i, i + length));
    }
    
    return chunks;
}

// Function to handle the button click and display the result
function chunkInputString() {
    const inputString = document.getElementById('inputString').value;
    const chunkLength = parseInt(document.getElementById('chunkLength').value, 10);
    
    if (isNaN(chunkLength) || chunkLength <= 0) {
        alert("Please enter a valid chunk length.");
        return;
    }
    
    const result = chunkString(inputString, chunkLength);
    
    // Display the result
    document.getElementById('result').textContent = `Chunks: ${JSON.stringify(result)}`;
}
