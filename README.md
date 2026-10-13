# RTM Desktop

An unofficial macOS desktop client for [Remember The Milk](https://www.rememberthemilk.com/) (RTM), built with [Pake](https://github.com/tw93/Pake).

Pake wraps the Remember The Milk web app in a lightweight native window (Tauri + the system WebView), so the app is small and starts fast. It is not a reimplementation: everything you see is the official web app at <https://www.rememberthemilk.com/app/>, and you sign in with your normal RTM account.

## Platform

- macOS, universal binary (Apple Silicon and Intel)

## Installation

1. Download the `.dmg` and open it.
2. Drag the app into your **Applications** folder.
3. The app is not signed or notarized with an Apple Developer ID, so macOS blocks it on first launch. To allow it, open **System Settings → Privacy & Security** and click **Open Anyway**, or run:

   ```sh
   xattr -dr com.apple.quarantine /Applications/RTM.app
   ```

## Disclaimer

This project is not affiliated with, endorsed by, or sponsored by Remember The Milk. "Remember The Milk" and its logo are trademarks of their respective owner.

## License

[GPL-3.0](LICENSE), the same license as [Pake](https://raw.githubusercontent.com/tw93/Pake/refs/heads/main/LICENSE).
