/*
window.addEventListener('DOMContentLoaded', showTime);
const displayClock = document.getElementById('displayClock');
const user = document.getElementById('user');
const myBody = document.querySelector('body');
const focusContainer = document.getElementById('focus-cont');
const myInput = document.getElementById('focus');

myInput.addEventListener('keypress', enterFocus);

function enterFocus(e) {
    if (e.key === 'Enter') {
        focusContainer.innerHTML = `<h6>Today:</h6> ${myInput.value}`;
    }
}

function showTime() {
    let date = new Date();
    //date.setTime(50000);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = 'AM';

    if (h === 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        session = 'PM';
    }
    
    //if (h < 10) {
    //    h = '0' + h;
    //}
    //if (m < 10) {
    //    m = '0' + m;
    //}
    //if (s < 10) {
    //    s = '0' + s;
    //}

    h = h < 10 ? (h = '0' + h) : h;
    m = m < 10 ? (m = '0' + m) : m;
    s = s < 10 ? (s = '0' + s) : s;

    //const time = h + ':' + m + ':' + s + '|' + session;
    const time = `<span class="bigger">${h}:${m}</span><span id="sSpan" class="little">.${s}</span><span id="seasonSpan" class="little">|${session}</span>`;

    displayClock.innerHTML = time;
    setTimeout(showTime, 1000);

    // Change Body Background
    let bg;
    const userName = 'Maxi';
    user.innerHTML = userName;
    if ((h < 8 || h === 12) && session === 'AM') {
        bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
        user.innerHTML = `Good morning ${userName}`;
    } else if (h < 13 && session === 'AM') {
        bg = `url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML = `Good day ${userName}`;
    } else if (h < 5 && session === 'PM') {
        bg = `url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML = `Good day ${userName}`;
    } else if (h < 8 && session === 'PM') {
        bg = `url(https://source.unsplash.com/Cjz1UAz8VBs)`;
        user.innerHTML = `Good afternoon ${userName}`;
    } else if (h >= 8 && session === 'PM') {
        bg = `url(https://source.unsplash.com/ln5drpv_ImI)`;
        user.innerHTML = `Good night ${userName}`;
    }

    // Insert bg im
    myBody.style.background = `${bg} center/cover`;

}
*/


/*
// 24 clock
window.addEventListener('DOMContentLoaded', showTime);
const displayClock = document.getElementById('displayClock');
const user = document.getElementById('user');
const myBody = document.querySelector('body');
const focusContainer = document.getElementById('focus-cont');
const myInput = document.getElementById('focus');

myInput.addEventListener('keypress', enterFocus);

function enterFocus(e) {
    if (e.key === 'Enter') {
        focusContainer.innerHTML = `<h6>Today:</h6> ${myInput.value}`;
    }
}

function showTime() {
    let date = new Date();
    //date.setTime(50000);
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();

    h = h < 10 ? (h = '0' + h) : h;
    m = m < 10 ? (m = '0' + m) : m;
    s = s < 10 ? (s = '0' + s) : s;

    //const time = h + ':' + m + ':' + s + '|' + session;
    const time = `<span class="bigger">${h}:${m}</span><span id="sSpan" class="little">.${s}</span>`;

    displayClock.innerHTML = time;
    setTimeout(showTime, 1000);

    // Change Body Background
    let bg;
    const userName = 'Maxi';
    user.innerHTML = userName;
    if (h < 9) {
        bg = `url(https://source.unsplash.com/G_a9JhmiZFk)`;
        user.innerHTML = `Good morning ${userName}`;
    }
    if (h >= 9) {
        bg = `url(https://source.unsplash.com/XGzW_tr_8YI)`;
        user.innerHTML = `Good day ${userName}`;
    }
    if (h >= 17) {
        bg = `url(https://source.unsplash.com/Cjz1UAz8VBs)`;
        user.innerHTML = `Good afternoon ${userName}`;
    }
    if (h >= 20) {
        bg = `url(https://source.unsplash.com/ln5drpv_ImI)`;
        user.innerHTML = `Good night ${userName}`;
    }

    // Insert bg im
    myBody.style.background = `${bg} center/cover`;
}
*/

(function () {
    let digitalClock = {
        displayClock: document.getElementById('displayClock'),
        user: document.getElementById('user'),
        myBody: document.querySelector('body'),
        focusContainer: document.getElementById('focus-cont'),
        myInput: document.getElementById('focus'),
        showTime: function () {
            digitalClock.myInput.addEventListener('keypress', digitalClock.enterFocus);
            let date = new Date();
            let h = date.getHours();
            let m = date.getMinutes();
            let s = date.getSeconds();
            h = h < 10 ? (h = '0' + h) : h;
            m = m < 10 ? (m = '0' + m) : m;
            s = s < 10 ? (s = '0' + s) : s;
            const time = `<span class="bigger">${h}:${m}</span><span id="sSpan" class="little">.${s}</span>`;
            digitalClock.displayClock.innerHTML = time;
            setTimeout(digitalClock.showTime, 1000);
            let bg;
            const userName = 'Maxi';
            digitalClock.user.innerHTML = userName;
            if (h < 9) {
                bg = `url(url(https://source.unsplash.com/random?morning)`;
                digitalClock.user.innerHTML = `Good morning ${userName}`;
            }
            if (h >= 9) {
                bg = `url(https://source.unsplash.com/random?nature)`;
                digitalClock.user.innerHTML = `Good day ${userName}`;
            }
            if (h >= 17) {
                bg = `url(https://source.unsplash.com/random?sunset)`;
                digitalClock.user.innerHTML = `Good afternoon ${userName}`;
            }
            if (h >= 20) {
                bg = `url(https://source.unsplash.com/random?night)`;
                digitalClock.user.innerHTML = `Good night ${userName}`;
            }
            digitalClock.myBody.style.background = `${bg} center/cover`;
        },
        enterFocus: function (e) {
            if (e.key === 'Enter') {
                digitalClock.focusContainer.innerHTML = `<h6>Today:</h6> ${digitalClock.myInput.value}`;
            }
        },
    }
    digitalClock.showTime();
})()