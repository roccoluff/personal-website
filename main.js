//import Typed from 'typed.js'

//import Swup from 'swup/dist/swup'

/*let typed = new Typed(".auto-type", {
    strings: ["Hi.", "My name is Rocco Luffarelli. I am a Computer Science\n" +
    "            Student at the Technical University in Berlin.", "" +
    "Currently i am in the third Semester.", "My skills i learned so far are C, Java and MySQL. " +
    "(Apart from lots of Math).", "Besides that I am self-taught in HTML, CSS and JavaScript."],
    typeSpeed: 60,
    backSpeed: 15,
    loop: true
})
*/
const symbols = ['HTML', 'CSS', 'JavaScript'];
        let count = 0;
        const element = document.getElementById("change");
        console.log(element);
        window.onload = iteration = () => {
            element.innerHTML = symbols[Math.floor(Math.random() * symbols.length)];
            if (count % 2 !== 0) {
                element.classList.add("out");
            } else {
                element.classList.remove("out");
            }
            count++;
            // How often the code should run && repeat the change
            if (count === symbols.length * 5) {
                count = 0;
            }
        };
        let inthandle = setInterval(iteration, 1000);
        iteration();


