// Runs after inject/darkreader.js, which defines the global DarkReader.
// auto() follows the macOS appearance setting.
DarkReader.setFetchMethod(window.fetch);
DarkReader.auto({
  brightness: 100,
  contrast: 90,
  sepia: 0,
});
