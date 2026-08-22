# Changelog

Every Orbital release, newest first.

## 1.5.0 — August 22, 2026

### Added
- **Folders** — one level of structure inside a notebook. Right-click a notebook for New Folder…, file notes into it, and rename, reorder or delete folders freely. Deleting a folder never deletes notes; they return to the notebook.
- **Drag and drop** — drag a note onto a notebook or folder in the sidebar to file it, and drag notebooks and folders into the order you want. Move to Notebook now lists folders too, everywhere it appears.
- **PDF export** — formatted exactly like Print, images and page breaks included.
- **Assistant results are kept** — Summarize, Key Moments, Action Items, Meeting Minutes and Suggest Title now save their answer as a chat under the note, so it's still there after a relaunch.

### Changed
- AI Notes timestamps no longer thin out or stop partway through a long recording — every line is anchored to the transcript stretch it came from.
- The welcome note and its guided tour moved into their own Onboarding notebook.
- Faster where it was slow: typing in long notes, the input menu while recording, starting and scrubbing playback, and launching after a crash.
- Settings: Plans and Usage are now separate tabs, and Usage shows live server-side meters with reset dates.
- Markdown export now renders correctly in every Markdown app: special characters are escaped and lists can't swallow the paragraph next to them.

### Fixed
- Claude works again as an assistant provider, long AI answers are no longer cut off mid-thought, an error names the provider that actually failed, and a question that can't be sent stays in the box.
- Archiving a note no longer drops the paragraph you just typed, and undo after formatting undoes the formatting instead of your sentence.
- A duplicated note no longer shares the original's audio history, and a locked note now seals its speaker names too.
- Notes written by a newer Orbital open on an older build instead of disappearing.
- Plugging in headphones mid-playback no longer silences it, replay works after a recording plays to the end, system audio can't be lost by flicking it off and on as a recording starts, and a mid-recording device swap keeps system audio in sync.
- Meeting-length cloud transcriptions no longer time out partway — and never charge your quota for a transcript you didn't receive.
- The window can no longer squeeze the audio controls under the sidebars, and a failed update install restores the app instead of leaving none.

## 1.4.0 — August 15, 2026

### Added
- **Record your online meetings** — turn on Capture System Audio in the input menu and what your Mac plays (the other side of a Teams or Zoom call) is recorded along with your mic. Untick the mic to capture system audio only.
- **A guided tour** — the welcome note comes with a narrated four-minute walkthrough attached. Press play and read along; every heading is one click away. Replay it any time from Help ▸ Show Onboarding.
- **Delete All** empties the archive in one go.
- A new app icon.

### Changed
- **AI Notes accuracy overhaul** — timestamps come straight from the transcript instead of being estimated, nearly every line is clickable, every recording ends with a title and an action-items list, and regenerating replaces the previous run in place.
- Recordings survive device trouble: unplug a mic or switch to AirPods and the recording continues on the new input; if every input vanishes it pauses and resumes by itself. Your chosen microphone is remembered between launches, and Edit Input List hides the virtual microphones other apps install.
- Faster where it was slow: search keeps up with typing in a large library, chats and AI Notes load in the background instead of holding up launch, and dragging the pane dividers is smooth again.
- Inline images sit on softly rounded corners.

### Fixed
- Transcription and AI ride out temporary service hiccups with automatic retries, and asking for cloud transcription explicitly tells you when it fails instead of quietly transcribing on-device.
- Playback no longer hangs at the end of a recording whose stored length overshoots the audio.
- System-audio capture is safe against a stop that races its own start.
- The updater's rollback protection survives a preferences reset.

## 1.3.0 — August 12, 2026

### Added
- **Attach any file to a note** — PDFs, Word documents, spreadsheets, anything. Click a chip to open it: previewable files open right in Orbital, everything else in its own app.
- The AI assistant reads your attachments — documents, handouts, even text inside photos — alongside the transcript.

### Changed
- Attachments move with copy and paste, including between notes.

### Fixed
- AI Notes timestamps land in the margin more reliably.
- Fixes and hardening throughout.

## 1.2.2 — August 5, 2026

### Fixed
- Audio input not being detected.
- General fixes.

## 1.2.1 — August 5, 2026

### Fixed
- Recording failing with "no audio input available" on first use after granting microphone access — the app now retries automatically instead of needing a relaunch.
- When macOS is blocking the microphone for an updated copy of the app, the error now explains the exact Settings toggle that fixes it.

## 1.2.0 — August 5, 2026

### Added
- **Live dictation** — dictation types into your note as you speak. Words appear in place, underlined while provisional, and firm up as each phrase completes.

### Changed
- Clicking or typing mid-phrase keeps the words already spoken and starts the next phrase cleanly.

### Fixed
- Dictation ending on its own now explains why instead of silently disappearing.

## 1.1.1 — August 4, 2026

### Changed
- Update security hardening: stricter signature and identity verification at every step of the install chain.

### Fixed
- Dictation overhaul: no more silent stalls after pauses, dictation survives starting and stopping a recording, utterances are single undo steps, and dictated text never overwrites a selection.
- Cloud transcription is more resilient to dropped connections mid-upload.

## 1.1.0 — August 4, 2026

### Added
- **Automatic updates** — Orbital keeps itself up to date over a signed, verified update channel. Check any time from the Orbital menu, and Report a Problem from the Help menu.
- **Guided onboarding tour** — spotlights over the real UI walk you through the app on first launch.
- **Cloud transcription with ElevenLabs Scribe** — speaker labels and around ninety languages, including several mixed in one recording. Click a speaker's name to rename it.
- **AI Notes tab** — generate timestamped notes across several recordings at once from the sidebar.
- **Assistant conversations** — the ✨ panel keeps persistent chats per note, with @-mentions to bring other notes into context.
- **Notebook locking** — lock a whole notebook behind your password.
- **Audio cleanup** — trim silence and normalize with one click; your timestamps stay in sync.
- **Two-step export** — pick Notes, Transcript or Audio, then a format.
- Resizable inline images, and markdown shorthand for lists in the editor.

### Changed
- Interruption-proof recording: recordings are crash-safe and recover automatically after a force-quit or power loss.
- Locked notes got stricter: AI-derived content stays off disk and earlier traces are purged.
- Smoother typing and lower energy use from coalesced saves and off-main encoding.

## 1.0.0 — July 22, 2026

The first release. Audio-first notes for Mac: everything you type while recording or playing is time-stamped to the moment it was said — click a stamp and playback jumps there. TimeTags (⌘T) mark moments worth returning to. On-device transcription, live and file-based, plus dictation. A multi-provider AI assistant (OpenAI, Claude, Groq, Gemini) with automatic fallback. A rich-text editor with a timestamp gutter, note locking with AES-GCM encryption, notebooks, search that looks inside recordings, and Free / Pro / Premium plans.
