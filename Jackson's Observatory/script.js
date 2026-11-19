document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('tree-trigger');
  const overlay = document.getElementById('tree-overlay');

  if (overlay) {
    // Show trees automatically on load
    overlay.classList.add('visible');
  } else {
    console.error('Could not find div with id="tree-overlay"');
  }

  if (trigger && overlay) {
    // Toggle trees on or off when clicked
    trigger.addEventListener('click', (e) => {
      e.preventDefault(); 
      overlay.classList.toggle('visible');
    });
  }
});

document.addEventListener('DOMContentLoaded', () => {
  // --- Auto-typing logic ---
  const typingElements = document.querySelectorAll('.typing-effect');

  typingElements.forEach((el) => {
    const fullText = el.textContent;
    el.textContent = ''; // Clear original text
    el.style.visibility = 'visible'; // Ensure visible when typing starts
    
    let index = 0;
    const speed = 75; // Delay per letter in milliseconds (adjust as needed)

    function typeChar() {
      if (index < fullText.length) {
        el.textContent += fullText.charAt(index);
        index++;
        setTimeout(typeChar, speed);
      }
    }

    typeChar();
  });

  // --- Tree overlay toggle logic ---
  const trigger = document.getElementById('tree-trigger');
  const overlay = document.getElementById('tree-overlay');

  if (overlay) {
    overlay.classList.add('visible');
  }

  if (trigger && overlay) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.toggle('visible');
    });
  }
});
