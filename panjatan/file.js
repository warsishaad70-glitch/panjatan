  (function() {
      const toggle = document.getElementById('menuToggle');
      const nav = document.getElementById('navLinks');

      if (toggle && nav) {
        toggle.addEventListener('click', function(e) {
          e.stopPropagation();
          nav.classList.toggle('show');
        });

        // close if click outside (optional)
        document.addEventListener('click', function(event) {
          if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove('show');
          }
        });
      }

      // smooth anchor scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          const href = this.getAttribute('href');
          if (href === "#" || href === "") return;
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
            // close mobile menu after click
            if (nav) nav.classList.remove('show');
          }
        });
      });
    })();