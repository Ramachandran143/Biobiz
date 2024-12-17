// navbar java script
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");

    // Add sticky effect on scroll
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    });
  });
// header javascript
document.addEventListener("DOMContentLoaded", function () {
    const scrollingContainer = document.querySelector('.containerScrolling');
  
    scrollingContainer.addEventListener('mouseover', function () {
      scrollingContainer.style.boxShadow = '0 10px 20px rgba(247, 127, 0, 0.7)';
    });
  
    scrollingContainer.addEventListener('mouseout', function () {
      scrollingContainer.style.boxShadow = '0 6px 12px rgba(247, 127, 0, 0.5)';
    });
  
    // Smooth Scroll Animation for Links
    const links = document.querySelectorAll('.data-list-Scrolling a');
  
    links.forEach(link => {
      link.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent default link behavior
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
  
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".containerScrolling");
    const list = document.querySelector(".data-list-Scrolling");

    let scrollAmount = 0;

    function startScrolling() {
      const listHeight = list.scrollHeight;
      const containerHeight = container.clientHeight;

      // Increment scroll amount
      scrollAmount++;

      // Apply the transform style with proper template literals
      list.style.transform = `translateY(-${scrollAmount}px)`;

      // Reset scroll when reaching the end
      if (scrollAmount >= listHeight - containerHeight) {
        scrollAmount = 0;
      }

      // Continue animation
      requestAnimationFrame(startScrolling);
    }

    startScrolling();
  });
  
//   main section javascript
document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  });
  document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
  
    cards.forEach((card) => {
      // Card hover zoom effect
      card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
      });
  
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
      });
    });
  
    // Scroll Animation for Cards
    const fadeInOnScroll = () => {
      const cardElements = document.querySelectorAll('.card');
      const windowHeight = window.innerHeight;
  
      cardElements.forEach((card) => {
        const cardTop = card.getBoundingClientRect().top;
  
        if (cardTop < windowHeight - 100) {
          card.classList.add('animate'); // Add animation class when visible
        } else {
          card.classList.remove('animate'); // Remove animation when not visible
        }
      });
    };
  
    window.addEventListener('scroll', fadeInOnScroll);
  });

  document.addEventListener('scroll', function() {
    const cards = document.querySelectorAll('.card');
    const windowHeight = window.innerHeight;
  
    cards.forEach(card => {
      const cardPosition = card.getBoundingClientRect().top;
  
      // Add 'fade-in' class when the card is visible in the viewport
      if (cardPosition < windowHeight - 100) {
        card.classList.add('fade-in');
      } else {
        card.classList.remove('fade-in');
      }
    });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".section-button");
    const title = document.querySelector(".other-sections h2");
  
    // Animate buttons on hover
    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        button.style.background = "linear-gradient(to right, #ff7700, #ff3300)";
        button.style.color = "#fff";
        button.style.transform = "scale(1.15)";
        button.style.transition = "transform 0.4s ease, background 0.4s ease";
      });
  
      button.addEventListener("mouseout", () => {
        button.style.background = "linear-gradient(to right, #ffcc00, #ffaa00)";
        button.style.color = "#034436";
        button.style.transform = "scale(1)";
      });
    });
  
    // Title glow effect
    let glow = true;
    setInterval(() => {
      title.style.color = glow ? "#ff7700" : "#ffcc00";
      title.style.textShadow = glow
        ? "0 0 10px #ff7700, 0 0 20px #ff3300"
        : "0 0 10px #ffcc00, 0 0 20px #ffaa00";
      glow = !glow;
    }, 1000);
  
    // Fade-in animation for buttons
    buttons.forEach((button, index) => {
      button.style.opacity = "0";
      button.style.transform = "translateY(20px)";
      setTimeout(() => {
        button.style.transition = "opacity 1s ease, transform 1s ease";
        button.style.opacity = "1";
        button.style.transform = "translateY(0)";
      }, 200 * index);
    });
  });
  
      
  