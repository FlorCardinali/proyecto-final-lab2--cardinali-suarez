const time = document.getElementById('time');

const interval = setInterval(() => {

    const local = new Date();  
    time.innerHTML = local.toLocaleTimeString();

}, 1000);