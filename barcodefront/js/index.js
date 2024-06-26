const audio = document.getElementById("barcode_audio");

const scannedBars = [];

const socket = io();

const formatsToSupport = [
  Html5QrcodeSupportedFormats.UPC_A,
  Html5QrcodeSupportedFormats.UPC_E,
  Html5QrcodeSupportedFormats.UPC_EAN_EXTENSION,
  Html5QrcodeSupportedFormats.AZTEC,
  Html5QrcodeSupportedFormats.CODABAR,
  Html5QrcodeSupportedFormats.CODE_39,
  Html5QrcodeSupportedFormats.CODE_93,
  Html5QrcodeSupportedFormats.CODE_128,
  Html5QrcodeSupportedFormats.DATA_MATRIX,
  Html5QrcodeSupportedFormats.MAXICODE,
  Html5QrcodeSupportedFormats.ITF,
  Html5QrcodeSupportedFormats.EAN_13,
  Html5QrcodeSupportedFormats.EAN_8,
  Html5QrcodeSupportedFormats.PDF_417,
  Html5QrcodeSupportedFormats.RSS_14,
  Html5QrcodeSupportedFormats.RSS_EXPANDED,
];

let isAvailable = true;

const scanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  formatsToSupport: formatsToSupport,
  qrbox : { 
    width: 300, 
    height: 150 
  },
});

scanner.render(success, error);

function success(decodedText) {
  if (isAvailable) {
    audio.currentTime = 0;
    document.getElementById("result").innerHTML = scannedBars.join("<br>");
    socket.emit("product_scanned", decodedText);
    audio.play();
    isAvailable = false;
    setTimeout(() => isAvailable = true, 2000);
  }
}

function error(err) {
  //document.getElementById("logger").innerHTML += "LOG: " + err + "<br>";
}
