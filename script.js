document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number");
    let count = 2;
    const target = 20; // Target number
    const speed = 100; // Time in milliseconds to increment

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; // Ensure it ends at the target
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number2");
    let count = 2;
    const target = 25; // Target number
    const speed = 100; // Time in milliseconds to increment

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; // Ensure it ends at the target
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number3");
    let count = 0;
    const target = 17; // Target number
    const speed = 100; // Time in milliseconds to increment

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; // Ensure it ends at the target
        }
    };

    updateCount();
});
document.addEventListener("DOMContentLoaded", function() {
    const numberElement = document.getElementById("number4");
    let count = 0;
    const target = 35; // Target number
    const speed = 100; // Time in milliseconds to increment

    const updateCount = () => {
        if (count < target) {
            count++;
            numberElement.innerText = count;
            setTimeout(updateCount, speed);
        } else {
            numberElement.innerText = target; // Ensure it ends at the target
        }
    };

    updateCount();
});

