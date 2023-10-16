//get the user's message to reverse
function getValues() {
    //get the text input from the page
    let message = document.getElementById('userInput').value

    //validate the input: make sure the input isn't empty
    if (message.length == 0) {
        Swal.fire ({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a string to reverse'
        })
    } else {
    //pass the input to reverseMessage and addign its return value to a variable
    let revMsg = reverseMessage(message);

    //give the reversed message to displayMessage
    displayMessage(revMsg);
    }
}

//reverse the string
function reverseMessage(input) {  // if input = 'hello'...
    let inputArray = input.split(''); // then inputArray = ['h', 'e', 'l', 'l', 'o']
    let outputArray = [];

    for (let i = inputArray.length - 1; i >= 0; i--) {
        let letter = inputArray[i];
        outputArray.push(letter);
    }

    let output = outputArray.join(''); // turns [o, l, l, e, h] into 'olleh'
    return output;

}

//display the reversed message
function displayMessage(message) {
    document.getElementById('msg').textContent = `Your message reversed is: ${message}`;

    document.getElementById('alert').classList.remove('invisible');
}