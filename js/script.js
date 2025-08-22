<!-- Adicionado JavaScript para funcionalidade do menu mobile -->
    <script>
      // Menu Mobile Toggle
      const mobileMenu = document.getElementById('mobileMenu');
      const menu = document.getElementById('menu');

      mobileMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        
        if (menu.classList.contains('active')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });

      // Fechar menu ao clicar em um link
      const menuLinks = document.querySelectorAll('#menu a');
      menuLinks.forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('active');
          const icon = mobileMenu.querySelector('i');
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        });
      });

      // Smooth scroll para os links
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        });
      });
    </script>