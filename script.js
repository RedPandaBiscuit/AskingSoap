function yesResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Yay!</span> You made me the happiest person! ❤️';
    responseMessage.style.display = 'block';
  }
  
  function noResponse() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.innerHTML = '<span>Aww...</span> I’ll keep trying to win your heart! 😊';
    responseMessage.style.display = 'block';
  }
  