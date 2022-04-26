import React from 'react';

const LogIn = () => {
    return(
        <div>
            <form>
                <h2>Log in</h2>
                <label for="email">Email</label>
                <input type="text" name="email" required />
                <div class="email error"></div>
                <label for="password">password</label>
                <input type="password" name="password" required />
                <div class="passwrod error"></div>
                <button>log in</button>
            </form>
        </div>
    )
}
/*
const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = form.email.value;
    const password = form.password.value;

    
});
*/
export default LogIn;