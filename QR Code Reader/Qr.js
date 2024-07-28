/*function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 0); 
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If a QR code is found
    function onScanSuccess(decodeText, decodeResult) {
        alert("Your QR code is: " + decodeText + "\nResult: " + JSON.stringify(decodeResult));
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, qrbox: 250 }
    );
    htmlscanner.render(onScanSuccess);
});*/
function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 0); // Run immediately after the current event loop tick
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {

    // If a QR code is found
    function onScanSuccess(decodedText, decodedResult) {
        alert("Your QR code is: " + decodedText + "\nResult: " + JSON.stringify(decodedResult));
    }
   
    // Initialize the QR Code scanner
    const html5QrCodeScanner = new Html5QrcodeScanner(
        "my-qr-reader", 
        { fps: 10, qrbox: 250 } // Correct configuration
    ); 
    html5QrCodeScanner.render(onScanSuccess);
});
