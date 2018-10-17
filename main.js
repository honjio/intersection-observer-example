
const lines = document.querySelectorAll('.js-line');

const observer = new IntersectionObserver((e) => {
    // for (let i = 0; i < e.length; i++) {
    //     if (e[i].intersectionRatio > 0) {
    //         // console.dir(e);
    //         e[i].target.classList.add('anime');
    //         observer.unobserve( e[i].target );
    //     } else {
    //         // console.dir(e);
    //         // e[i].target.classList.remove('anime');
    //     }
    // } 
    for (const line of e) {
        if (line.intersectionRatio > 0) {
            line.target.classList.add('anime');

            observer.unobserve(line.target);
        }
    }
});

// for (let i= 0; i < line.length; i++) {
//     ovserver.observe(line[i]);
// }

for (const line of lines) {
    observer.observe(line);
}








