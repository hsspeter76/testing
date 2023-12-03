var btn = document.getElementById("btn");

function showpage1 (){
    var page1 = document.getElementById("openPage1");
    if (page1.style.display == 'none'){
        page1.style.display = ''
    }else{
        page1.style.display = 'none';
    }
    
}

// Get references to the button and container elements
var openButton = document.getElementById('openButton');
var iframeContainer = document.getElementById('iframeContainer');

// Function to create and load the iframe
function createIframe() {
  // Create the iframe element
  var iframe = document.createElement('iframe');
  iframe.src = './page1.html'; // Replace with the URL or file path of your HTML content

  // Create the close button
  var closeButton = document.createElement('button');
  closeButton.innerText = 'Close';

  // Function to remove the iframe and close the HTML
  function removeIframe() {
    iframeContainer.removeChild(iframe);
    iframeContainer.removeChild(closeButton);
  }

  // Add event listener to the close button
  closeButton.addEventListener('click', removeIframe);

  // Append the iframe and close button to the container
  iframeContainer.appendChild(iframe);
  iframeContainer.appendChild(closeButton);
}

// Add event listener to the open button
openButton.addEventListener('click', createIframe);
