function startAnimation() {
    const container = document.querySelector('#container');
    const animate = document.querySelector('#animate');
    let position = 0;
    const animationInterval = setInterval(() => {
      position++;
      animate.style.left = `${position}px`;
      if (position === container.offsetWidth - animate.offsetWidth) {
        clearInterval(animationInterval);
      }
    }, 1);
  }