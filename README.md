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

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Remember The Milk. "Remember The Milk" and its logo are trademarks of their respective owner.

## License

GPLv3, same with Pake.
