const buttons = document.querySelectorAll('.button');
const body = document.body;

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    if (e.target.id === 'grey') {
      body.className = 'bg-gray-500';
    }
    else if (e.target.id === 'white') {
      body.className = 'bg-white';
    }
    else if (e.target.id === 'blue') {
      body.className = 'bg-blue-500';
    }
    else if (e.target.id === 'yellow'){
      body.className = 'bg-yellow-500';
    }
  });
});
