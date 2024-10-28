document.getElementById("predict").addEventListener("click", function() {
    const code = document.getElementById("codeInput").value;
    const result = analyzeSortingAlgorithm(code);
    document.getElementById("result").innerText = result;
});

function analyzeSortingAlgorithm(code) {
    // Lowercase the input code for case-insensitive matching
    const lowerCode = code.toLowerCase();

    // Check for keywords associated with different sorting algorithms
    if (lowerCode.includes("for") && lowerCode.includes("swap") && lowerCode.includes("if")) {
        return "This code appears to implement Bubble Sort.";
    } else if (lowerCode.includes("selection") || (lowerCode.includes("for") && lowerCode.includes("min"))) {
        return "This code appears to implement Selection Sort.";
    } else if (lowerCode.includes("insertion") || lowerCode.includes("key")) {
        return "This code appears to implement Insertion Sort.";
    } else if (lowerCode.includes("merge")) {
        return "This code appears to implement Merge Sort.";
    } else if (lowerCode.includes("quick")) {
        return "This code appears to implement Quick Sort.";
    } else if (lowerCode.includes("sort")) {
        return "This code might use a built-in sorting function, but it's unclear which algorithm.";
    } else {
        return "Unable to determine the sorting algorithm from the provided code.";
    }
}
