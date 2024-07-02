// SOCKET CONFIG

const client = new StompJs.Client({
  brokerURL: globalBarcoderConfig.webSocketURL,
});

client.onConnect = function (frame) {
  alert("CONNECTED SUCCESFULLY");
};

client.activate();

// APP

const audio = document.getElementById("barcode_audio");

const scannedBars = [];

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
  qrbox: {
    width: 300,
    height: 150,
  },
});

scanner.render(success, error);

function success(decodedText) {
  if (isAvailable) {
    try {
      document.getElementById("result").innerHTML = scannedBars.join("<br>");
      client.publish({
        destination: "/app/barcodeSender",
        body: JSON.stringify({ decodedString: decodedText }),
      });
      playSound();
      isAvailable = false;
      setTimeout(() => (isAvailable = true), 2000);
    } catch (error) {
      alert(error);
    }
  }
}

function error(error) {}

function playSound() {
  audio.currentTime = 0;
  audio.play();
}
