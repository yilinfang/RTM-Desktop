// Loads Dark Reader from jsDelivr. The integrity hash pins the exact file.
// auto() follows the macOS appearance setting.
const darkReaderScript = document.createElement('script');
darkReaderScript.src = 'https://cdn.jsdelivr.net/npm/darkreader@4.9.135/darkreader.js';
darkReaderScript.integrity = 'sha256-a8XLe8PdQBSQKnOJjPrZXgdHR1XWSrv+nnusAsL1mTc=';
darkReaderScript.crossOrigin = 'anonymous';
darkReaderScript.onload = () => {
  DarkReader.setFetchMethod(window.fetch);
  DarkReader.auto({
    brightness: 100,
    contrast: 90,
    sepia: 0,
  });
};
document.head.appendChild(darkReaderScript);
