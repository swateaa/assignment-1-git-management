document.querySelector(".hero button").addEventListener("click", function () {
    alert("Your order has been started!");
});

document.getElementById("searchButton").addEventListener("click", function () {
    const food = document.getElementById("searchInput").value;

    if (food) {
        document.getElementById("searchResult").textContent =
            "Searching for: " + food;
    } else {
        document.getElementById("searchResult").textContent =
            "Please enter a food item.";
    }
});