document.getElementById("donateButton").addEventListener("click", function () {

    const upiID = "divyakarthik2233@okhdfcbank";
    const name = "D. Prabavathi";
    const amount = "10";
    const note = "Donation";

    const upiURL = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR&tn=${encodeURIComponent(note)}`;

    window.location.href = upiURL;

});