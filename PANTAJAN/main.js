 // cursor glow
    const cursor = document.getElementById('cursorGlow');
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    // mobile menu toggle
    const toggle = document.getElementById('menuToggle');
    const nav = document.getElementById('navLinks');
    toggle.addEventListener('click', () => {
      nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 800) nav.style.display = 'flex';
      else nav.style.display = 'none';
    });