window.addEventListener('load', () => {  
  let closeWidget = true;
  let widget = document.querySelector('.help-widget');
  let arrow = document.querySelector('.aba-ajuda p img');

  widget.addEventListener('click', () => {
    if(closeWidget) {
      widget.style.transition = 'all 0.8s';
      widget.style.right = '0';
      arrow.style.transform = 'rotate(-270deg)';
      closeWidget = false;
    } else {
      widget.style.transition = 'all 0.8s';
      widget.style.right = '-300px';
      arrow.style.transform = 'rotate(-90deg)';
      closeWidget = true;
    }
  })
 
})