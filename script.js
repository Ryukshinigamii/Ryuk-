window.onload = () => {
window.scrollTo(0, 0); 
    setTimeout(() => {
      document.querySelector("body").classList.add("display");
    }, 4000);
  };
  
/*Added an event listener to retract the menu*/
document.querySelector(".hamburger-menu").addEventListener("click", (event) => {
            document.querySelector(".container").classList.toggle("change");
            event.stopPropagation();
        });

        document.addEventListener("click", (event) => {
            if (!event.target.closest('.menu') && !event.target.closest('.hamburger-menu')) {
                document.querySelector(".container").classList.remove("change");
            }
        });

        document.querySelector(".scroll-btn").addEventListener("click", () => {
            document.querySelector("html").style.scrollBehavior = "smooth";
            setTimeout(() => {
                document.querySelector("html").style.scrollBehavior = "unset";
            }, 1000);
        });
  
/*Smooth internal link scroll script*/  
document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                scrollToElement(targetElement, 1000); // 1000ms duration for scrolling
            }
        });
    }

    function scrollToElement(element, duration) {
        const start = window.pageYOffset;
        const end = element.offsetTop;
        const distance = end - start;
        const startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

        function scroll() {
            const currentTime = 'now' in window.performance ? performance.now() : new Date().getTime();
            const timeElapsed = currentTime - startTime;
            const progress = Math.min(timeElapsed / duration, 1);
            const ease = easeInOutQuad(progress);
	
            window.scrollTo(0, start + distance * ease);

            if (progress < 1) {
                requestAnimationFrame(scroll);
            }
        }

        function easeInOutQuad(t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        }

        scroll();
    }
});

/*Explode*/
        document.addEventListener('DOMContentLoaded', function() {
            const explodingElements = document.querySelectorAll('.exploding-element');
            
            const observer = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('exploded');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.1
            });

            explodingElements.forEach(element => {
                observer.observe(element);
            });
        });
        
/* Untested scripts, leave commented out */
     
/*document.addEventListener('DOMContentLoaded', function() {
    const explodingElements = document.querySelectorAll('.exploding-element');
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('exploded');
                entry.target.style.display = 'block'; // Show the element
                //observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    explodingElements.forEach(element => {
        observer.observe(element);
    });
});*/

/*Explosion_new
document.addEventListener('DOMContentLoaded', function() {
    const explodingElements = document.querySelectorAll('.exploding-element');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('exploded');

                //Trigger re-animation
                entry.target.classList.remove('animate'); 
                void entry.target.offsetWidth; 
                entry.target.classList.add('animate'); 
            }
        });
    }, {
        threshold: 0.1
    });

    explodingElements.forEach(element => {
        observer.observe(element);
    });
});*/






  
