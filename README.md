# RTM Desktop

An unofficial macOS desktop client for [Remember The Milk](https://www.rememberthemilk.com/) (RTM), built with [Pake](https://github.com/tw93/Pake).

## Platform

- macOS, Apple Silicon only

## Installation

1. Download the `.dmg` and open it.
2. Drag the app into your **Applications** folder.
3. The app is not signed or notarized with an Apple Developer ID, so macOS blocks it on first launch. To allow it, open **System Settings → Privacy & Security** and click **Open Anyway**, or run:

   ```sh
   xattr -dr com.apple.quarantine /Applications/RTM.app/
   ```

## Building

App options are in [`RTM.json`](RTM.json). The Pake version is in [`pake-version.txt`](pake-version.txt). CI and local builds use both files.

Requires Node.js and [Rust](https://rustup.rs). On Linux, also install the [Tauri system dependencies](https://v2.tauri.app/start/prerequisites/#linux).

```sh
npm install -g "pake-cli@$(cat pake-version.txt)"
pake --config RTM.json                       # default target for this platform
pake --config RTM.json --targets apple       # macOS, Apple Silicon
pake --config RTM.json --targets deb         # Linux, .deb
pake --config RTM.json --targets appimage    # Linux, AppImage
```

Command-line flags override `RTM.json`.

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Remember The Milk. "Remember The Milk" and its logo are trademarks of their respective owner.

## License

GPLv3, same with Pake.
