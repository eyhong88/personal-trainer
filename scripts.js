document.addEventListener('DOMContentLoaded', () => {
    const features = {
        basicDigital: [
            "Custom workout program",
            "Weekly check-ins"
        ],
        standardDigital: [
            "All features of Basic Digital Package",
            "Custom nutrition plan & macros",
            "Form checks"
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
            "Custom nutrition plan & macros",
            "Form checks",
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
});
