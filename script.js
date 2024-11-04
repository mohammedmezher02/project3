document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number");
    let count = 2;
    const target = 20; 
    const speed = 100; 

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; 
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number2");
    let count = 2;
    const target = 25; 
    const speed = 100; 

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; 
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number3");
    let count = 0;
    const target = 17; 
    const speed = 100; 

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target;
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number4");
    let count = 0;
    const target = 35; 
    const speed = 100; 

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; 
        }
    };

    updateCount();
});

