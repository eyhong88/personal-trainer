document.addEventListener('DOMContentLoaded', () => {
    const features = {
        basicDigital: [
            "Custom workout program",
            "Weekly check-ins"
        ],
        standardDigital: [
            "All features of Basic Digital Package",
            "Custom nutrition plan",
            "Exercise form checks"
        ],
        premiumDigital: [
            "All features of Standard Digital Package",
            "24/7 availability",
            "Supplement plan",
            "Accountability and habit forming support"
        ],
        basicInPerson: [
            "Custom workout program",
            "Weekly check-ins",
            "One in-person session per week"
        ],
        standardInPerson: [
            "All features of Basic In-Person Package",
            "Custom nutrition plan",
            "Exercise form checks",
            "Two in-person sessions per week"
        ],
        premiumInPerson: [
            "All features of Standard In-Person Package",
            "24/7 availability",
            "Supplement plan",
            "Accountability and habit forming support",
            "Three in-person sessions per week"
        ]
    };

    document.querySelectorAll('.package').forEach(pkg => {
        const id = pkg.id;
        const featureList = pkg.querySelector('.features');
        if (features[id]) {
            featureList.innerHTML = features[id].map(feature => `<li>${feature}</li>`).join('');
        }
    });

    // Function to generate PayPal button
    function generatePayPalButton(buttonId) {
        return `
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_s-xclick" />
                <input type="hidden" name="hosted_button_id" value="${buttonId}" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
            </form>
        `;
    }

    // Insert PayPal buttons
    document.getElementById('basicDigital').innerHTML += generatePayPalButton("JVMJ336X7AVAY");
    document.getElementById('standardDigital').innerHTML += generatePayPalButton("AJGLLPBF8LBUY");
    document.getElementById('premiumDigital').innerHTML += generatePayPalButton("JLLWAKTC468XA");
    document.getElementById('basicInPerson').innerHTML += generatePayPalButton("HH7MGCNEBR3BY");
    document.getElementById('standardInPerson').innerHTML += generatePayPalButton("ZWAC77KZXDPRC");
    document.getElementById('premiumInPerson').innerHTML += generatePayPalButton("EAWQZR7BQGJA2");
});

// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("basicDigitalQuantitySelect").addEventListener("change", function() {
//         updateTotal('basicDigital', 125);
//     });
//     document.getElementById("basicDigitalForm").addEventListener("submit", function() {
//         return updateTotalAndSubmit('basicDigital', 125);
//     });
// });

// function updateTotal(packageId, basePrice) {
//     const quantitySelect = document.getElementById(`${packageId}QuantitySelect`);
//     const quantity = quantitySelect.value;
//     let discount = 0;

//     if (quantity == 3) discount = 5;
//     else if (quantity == 6) discount = 10;
//     else if (quantity == 12) discount = 15;

//     const totalPrice = basePrice * quantity * (1 - discount / 100);
//     document.getElementById(`${packageId}Amount`).value = totalPrice.toFixed(2);
//     document.getElementById(`${packageId}Quantity`).value = quantity;
//     console.log(`Updated ${packageId}Amount to ${totalPrice.toFixed(2)} and ${packageId}Quantity to ${quantity}`);
// }

// function updateTotalAndSubmit(packageId, basePrice) {
//     updateTotal(packageId, basePrice);
//     return true;
// }
