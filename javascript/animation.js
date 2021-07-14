function animation() {
    const container = document.querySelector(".container");
    const sign_up_form = document.querySelector('.sign-up-form');
    const sign_in_form = document.querySelector('.sign-in-form');

    document.addEventListener('click', e => {
        const el = e.target;
        if (el.classList.contains("sign-up-btn")) {
            container.classList.add("sign-up-mode");
            for(let errorText of sign_up_form.querySelectorAll('.error')) {
                errorText.remove();
            }
        };
        if (el.classList.contains("sign-in-btn")) {
            container.classList.remove("sign-up-mode");
            for(let errorText of sign_in_form.querySelectorAll('.error')) {
                errorText.remove();
            }
        };
    });
}

animation();