const inputVal = document.querySelector(".look");
const items = document.querySelectorAll(".item");
const submit = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const message = document.querySelector(".message");
const primes = [];

items.forEach(item => {
    value = item.textContent;
    primes.push(parseInt(value));
});
console.log(primes);

const binarySearch = (target) => {
    let min = 0;
    let max = primes.length - 1;

    while (max >= min) {
        let guess = Math.floor((max + min) / 2);

        if (primes[guess] === target) {
            console.log("You have found it");
            console.log(primes[guess]);
            
            items.forEach(item => {
                item.classList.remove("answer"); // Remove "answer" class from all items
            });
            items[guess].classList.add("answer"); // Add "answer" class to the found item
            return; // Exit the function when found
        } else if (primes[guess] < target) {
            min = guess + 1;
            console.log(min);
        } else if (primes[guess] > target) {
            max = guess - 1;
            console.log(max);   
        }
    }

    // Handle case when target is not found
    message.textContent = "Number is not within the list provided";
}


const runCode = (e) => {
    e.preventDefault();
    let value = parseInt(inputVal.value); // Parse the input value to integer
    console.log(value);
    binarySearch(value);
}

const resetCode = (e) => {
    e.preventDefault();
    items.forEach(item => {
        item.classList.remove("answer");
    });
    inputVal.value = '';
    message.textContent = "";
}

submit.addEventListener("click", runCode);
reset.addEventListener("click", resetCode);
