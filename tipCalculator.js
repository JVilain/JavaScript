// Function to validate the service quality
function validateServiceQuality(quality) {
    const validQualities = ["great", "ok", "poor"];
    return validQualities.includes(quality.toLowerCase());
}

// Function to validate the service amount
function validateServiceAmount(amount) {
    return amount >= 5.00 && amount <= 500.00;
}

// Function to calculate the tip
function calculateTip(amount, quality) {
    let tipRate;
    switch (quality.toLowerCase()) {
        case "great":
            tipRate = 0.20;
            break;
        case "ok":
            tipRate = 0.15;
            break;
        case "poor":
            tipRate = 0.10;
            break;
        default:
            tipRate = 0;
    }
    return amount * tipRate;
}

// Prompt for service amount
let serviceAmount = parseFloat(prompt("Enter the dollar amount of the service (between $5.00 and $500.00):"));

// Validate service amount
if (!validateServiceAmount(serviceAmount)) {
    document.getElementById("output").textContent = "Invalid amount. Please enter a value between $5.00 and $500.00.";
} else {
    // Prompt for service quality
    let serviceQuality = prompt("Was the service great, ok, or poor?");

    // Validate service quality
    if (!validateServiceQuality(serviceQuality)) {
        document.getElementById("output").textContent = "Invalid service quality. Please enter great, ok, or poor.";
    } else {
        // Calculate tip
        let tip = calculateTip(serviceAmount, serviceQuality);
        document.getElementById("output").innerHTML =
            `Service Amount: $${serviceAmount.toFixed(2)}<br>` +
            `Service Quality: ${serviceQuality}<br>` +
            `Recommended Tip: $${tip.toFixed(2)}`;
    }
}
