window.onload = () => {
    const transistion_el = document.querySelector ('.transistion');
    const anchors = document.querySelectorAll('a');
    setTimeout(() => {
        transistion_el.classList.remove('is-active');
    }, 500);

    for (let i = 0; i < anchors.length; i++) {
        const anchor - anchor[i];

        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;

            transistion_el.classList.add('is-active');

            setTimeout(() => {
                window.localStorage.href = target;
            }, 800);
        });
    }
}