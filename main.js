const dots = document.querySelectorAll(".scroll-indicator a");

const removeActiveClass = () => {
  dots.forEach(dot => {
    dot.classList.remove("active");
  });
};

const addActiveClass = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let currentDot = document.querySelector(
        `.scroll-indicator a[href='#${entry.target.id}']`
      );
      removeActiveClass();
      currentDot.classList.add("active");
    }
  });
};

const options = {
  threshold: 0.8
};

const observer = new IntersectionObserver(addActiveClass, options);
const sections = document.querySelectorAll("section");

sections.forEach(section => {
  observer.observe(section);
});


const element = document.getElementById('welcome-text');
    const text = "Me llamo Verónica";
    let i = 0;
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 190); 
        }
        else {
            element.style.borderRight = "transparent"; 
            clearTimeout();
        }
    }

    typeWriter();

