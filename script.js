function generateDotLine() {
    const dotCountInput = document.getElementById("dotCount");
    const dotLineContainer = document.getElementById("dotLine");

    // Clear previous content
    dotLineContainer.innerHTML = "";

    // Get the number of dots from the user input
    const dotCount = parseInt(dotCountInput.value);

    // Create and append dots to the container
    for (let i = 0; i < dotCount; i++) {
        const dot = document.createElement("span");
        dot.className = "dots";
        dotLineContainer.appendChild(dot);
    }
}