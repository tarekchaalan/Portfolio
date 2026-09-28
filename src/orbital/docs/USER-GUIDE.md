<!-- Source: /Users/tarek/Developer/macos/orbital/docs/USER-GUIDE.md — re-sync by copying that file over this one -->
# Orbital User Guide

Orbital is a note-taking app for Mac built around one idea: everything you type while
recording is tied to the moment it was said. Click a timestamp, a TimeTag, or a transcript
line, and playback jumps straight there. Recordings are transcribed on your Mac, and an AI
assistant can summarize, pull out key moments, and answer questions about any note.

This guide covers Orbital 1.5.1 on macOS 14 or later. It is written for people using the
app, not building it. Developer documentation lives in [docs/README.md](README.md).

## Contents

1. [Getting started](#1-getting-started)
2. [The window](#2-the-window)
3. [Notes, notebooks, and folders](#3-notes-notebooks-and-folders)
4. [Recording](#4-recording)
5. [Timestamps and TimeTags](#5-timestamps-and-timetags)
6. [Playback](#6-playback)
7. [Editing audio](#7-editing-audio)
8. [Transcription](#8-transcription)
9. [Dictation](#9-dictation)
10. [The editor](#10-the-editor)
11. [The AI assistant](#11-the-ai-assistant)
12. [Locking, privacy, and where your data lives](#12-locking-privacy-and-where-your-data-lives)
13. [Export, import, bundles, and print](#13-export-import-bundles-and-print)
14. [Storage](#14-storage)
15. [Plans, purchases, and usage](#15-plans-purchases-and-usage)
16. [Updates and getting help](#16-updates-and-getting-help)
17. [Troubleshooting](#17-troubleshooting)
18. [Settings reference](#18-settings-reference)
19. [Keyboard shortcuts](#19-keyboard-shortcuts)
20. [How Orbital compares to other audio note apps](#20-how-orbital-compares-to-other-audio-note-apps)
21. [Glossary](#21-glossary)

---

## 1. Getting started

### What you need

- A Mac running macOS 14 (Sonoma) or later. Apple Silicon and Intel are both supported.
- A microphone (the built-in one is fine) for recording.
- Nothing else. There is no account to create and no sign-in.

### Install

Get Orbital from the Mac App Store, the only place it is distributed. Updates arrive
through the App Store. See [Updates](#16-updates-and-getting-help).

### Permissions macOS will ask for

| Permission | When it is asked | Why |
|---|---|---|
| Microphone | The first time you record | To capture audio |
| Speech Recognition | The first time you transcribe or dictate | On-device transcription uses Apple's Speech framework |
| Screen & System Audio Recording | Only if you turn on Capture System Audio | To record what your Mac is playing, such as the other side of a call. Orbital reads no screen pixels; see [Recording online meetings](#recording-online-meetings) |

If you decline one and change your mind later, turn it on in System Settings ▸ Privacy &
Security.

### First launch

Orbital creates an Onboarding notebook with a welcome note. The note has a narrated
four-minute walkthrough attached: press play and read along, and every heading is one
click away. A guided tour also runs over the real interface, spotlighting each area in turn.
You can skip it and replay it any time from Help ▸ Show Onboarding.

### Your first note in three steps

1. **Record and type.** Press ⌘N for a new note, then ⌘R to start recording. Type as you
   normally would. Every paragraph you start while recording gets a timestamp in the left
   gutter. Press ⌘R again to stop.
2. **Jump back.** Click any timestamp in the gutter. Playback jumps to the moment you
   started typing that paragraph.
3. **Read the transcript.** By default Orbital transcribes the recording on your Mac when
   you stop. Press ⌘⇧T to open the transcript panel, then click any line to hear it.

That is the core of the app. Everything else in this guide builds on those three moves.

---

## 2. The window

From left to right:

- **Sidebar.** Two tabs at the top: **Notebooks** and **AI Notes**. The Notebooks tab lists
  All Notes, your notebooks with their folders, and Archived. Hide or show it with ⌥⌘S.
- **Note list.** The notes in whatever you selected in the sidebar, with search at the top
  and a New Note button. Hide or show it with ⌥⌘L.
- **Editor.** The note title, a toolbar, the rich-text canvas, and the timestamp gutter
  down its left edge. The audio bar sits along the bottom.
- **Transcript panel** (optional, on the right). Toggle with ⌘⇧T or the quote button in
  the toolbar.
- **AI panel** (optional, on the right). Toggle with the ✨ button in the toolbar.

Drag the dividers to resize panes; Orbital remembers each width.

**Focus Mode** (⌃⌘F) hides the sidebar and note list so only the note and its audio remain.
**Zoom** the canvas with ⌘+ and ⌘−, and reset with ⌘0. **Show Word Count** in the View menu
puts a live word and character count under the editor.

### The editor toolbar

| Button | What it does |
|---|---|
| Lock | Locks or unlocks this note (Pro and Premium). See [Locking](#locking-notes) |
| # | Inserts a TimeTag at the current audio position (⌘T) |
| Aa | Opens the formatting palette: headings, styles, lists, indent, separator, page break |
| Highlighter | Switches on the highlighter pen and its colours (⌘⇧H) |
| Paperclip | Attaches files to the note (⌘⇧A) |
| Microphone | Starts or stops dictation |
| Quote | Shows or hides the transcript panel (⌘⇧T) |
| ✨ | Shows or hides the AI assistant |
| Share | Opens the Export sheet (⌘⇧E) |
| … | More actions: pin, lock, move, Import Media, Transcribe Audio, delete |

### The audio bar

The bar along the bottom of the editor holds recording and playback in one place: the
record button, a captions button that turns live transcription on and off, the input-source
menu, trim and clean-up buttons, play/pause, skip buttons, a speed menu, the timeline with
a draggable playhead and a dot for every TimeTag, and the time remaining. Each of these is
covered in the sections that follow.

---

## 3. Notes, notebooks, and folders

### Notebooks

A notebook is a named, coloured group of notes. Create one with ⌘⇧N or the + button in the
sidebar. Right-click a notebook for:

- **Customize Icon & Color…** Pick from nine colours (or Automatic) and a set of icons.
- **New Folder…** One level of folders inside a notebook.
- **Rename…**
- **Hide Behind Password…** Hides the notebook until your lock password is entered. This
  is a visibility gate only; the notes inside are not encrypted. See
  [Hidden notebooks](#hidden-notebooks).
- **Delete Notebook…** The notes are not deleted; they move to Drafts.

**Drafts** is the built-in notebook that catches any note not filed elsewhere. It cannot be
deleted. **All Notes** shows everything at once. **Archived** holds notes you have deleted
(see below).

Drag notebooks and folders into whatever order you want.

### Folders

Folders give you one level of structure inside a notebook. Right-click a notebook ▸ New
Folder…, then drag notes into it, or use Note ▸ Move to Notebook, which lists folders too.
Right-click a folder to rename or delete it. Deleting a folder never deletes notes; they
return to the notebook.

### Working with notes

| Action | How |
|---|---|
| New note | ⌘N, the + in the note list, or File ▸ New Note |
| Rename | Click the title at the top of the editor |
| Pin to top | Note ▸ Pin Note to Top, or right-click the note |
| Duplicate | ⌘⇧D. The copy gets its own audio history |
| Move | Drag the note onto a notebook or folder in the sidebar, or Note ▸ Move to Notebook |
| Lock | Note ▸ Lock Note, or right-click ▸ Lock Note… (Pro and Premium) |
| Show in Finder | Right-click the note. The menu also shows the note's size on disk |
| Delete | Note ▸ Delete Note, right-click the note, or the … menu |

### Deleting and the archive

By default, deleting a note moves it to **Archived** rather than erasing it. From Archived,
right-click a note to **Restore** it or **Delete Permanently**. The trash button at the top
of the Archived list is **Delete All**, which empties the archive in one go.

Archiving a note also drops its audio-edit backup, if it had one, to free space.

If you would rather deletes be permanent immediately, turn off Settings ▸ General ▸
"Archive deleted notes instead of erasing them".

### Search

The search field at the top of the note list matches against note titles, body text, every
transcript line, and TimeTag names. So you can find a note by something that was said out
loud in it, not just what you typed. Search keeps up with typing even in large libraries.

Locked notes are not searchable until you have unlocked the session.

### Sorting

Settings ▸ General ▸ Notes list, or the sort button in the sidebar: sort by Last edited,
Date created, or Title, ascending or descending. Pinned notes always stay at the top. The
date shown on each note card can be relative ("Yesterday"), short, or long.

---

## 4. Recording

### Start, stop, and record more

Press ⌘R, click the record button in the audio bar, or choose Audio ▸ Record. Press ⌘R
again to stop. A note can hold any number of recordings: once a note has audio, the record
button becomes **Record More Audio**, and each new take is appended as a segment on the
same timeline. Timestamps you add during later segments land in the right place.

You cannot record while the AI Notes tab is showing; recording lives in your notes.

### Choosing an input

Click the input-source button in the audio bar. It lists every microphone macOS can see;
the one you pick is remembered across launches by device, so it comes back when you plug
it in again. Choose **Edit Input List…** to hide the virtual inputs other apps install so
they stop cluttering the picker; hiding an input never affects the device itself.

The microphone has its own tick box in the same menu. Untick it and Orbital records only
system audio (see below).

### Recording online meetings

Turn on **Capture System Audio** in the input-source menu and whatever your Mac plays, for
example the other participants on a Teams or Zoom call, is mixed into the recording
alongside your microphone. Wear headphones so your mic does not re-record the speakers.

The first time you turn it on, macOS asks for the Screen & System Audio Recording
permission. That is simply the bucket Apple gates system audio behind. Orbital requests the
smallest video stream the framework allows and never reads a frame of it; your screen is
not captured, recorded, or sent anywhere.

You can flip Capture System Audio on or off in the middle of a recording. If the system
stream hiccups, Orbital restarts it and tells you.

Recording other people may require their consent where you live. Orbital cannot make that
judgement for you.

### Recording quality

Settings ▸ Audio ▸ Quality controls the AAC bitrate for new recordings and converted
imports:

| Setting | Bitrate | Roughly |
|---|---|---|
| Space saver | 48 kbps | 29 MB per hour |
| Good (default) | 96 kbps | 51 MB per hour |
| Best | 192 kbps | 94 MB per hour |

### What happens when things go wrong

- **Unplug the mic, or switch to AirPods mid-recording.** The recording continues on the
  new input.
- **Every input disappears.** Recording pauses and resumes on its own when one returns.
- **Force-quit, crash, or power loss.** Recordings are written as they happen and are
  recovered the next time Orbital launches.
- **The Mac sleeps.** Recording survives sleep.

### The Free plan recording allowance

Free includes 120 minutes of recording per month. Typing, playback, and on-device
transcription are never limited. When the allowance is used up, Orbital shows the plans
sheet; Pro and Premium record without limits. See [Plans](#15-plans-purchases-and-usage).

### Importing audio

File ▸ Import Audio… (⌘⇧I), the … menu ▸ Import Media…, or drag audio files straight onto
the editor. Accepted formats: M4A, MP3, WAV, AIFF, CAF, AAC, and FLAC. Imported files
become segments on the note's timeline, marked "(imported)" in Audio ▸ Delete a Recording.

Lossless imports (WAV, AIFF, CAF, FLAC) are converted to AAC at your recording quality in
the background once the note is idle. A two-hour WAV goes from about 1.2 GB to about 80 MB
with the transcript and every timestamp unchanged. For notes imported before this feature
existed, use Settings ▸ Storage ▸ Compress.

---

## 5. Timestamps and TimeTags

Orbital has two kinds of time markers. Both are clickable, and both survive audio edits.

### Gutter timestamps

Every paragraph you start typing while recording or playing gets a stamp in the left
gutter, such as `0:00:09`. Click a stamp and playback jumps to that moment. This happens on
its own; there is nothing to press.

- **Set Timestamp** (⌘' in the Note menu) stamps the selected paragraphs with the current
  record or playback position. Use it to stamp something you typed before you hit record,
  or to move a stamp.
- **Remove Timestamp** clears the stamp from the selected paragraphs.
- Hide the gutter entirely with Settings ▸ General ▸ "Show timestamp gutter".

Stamps travel with the note when you export Plain Text (as timecodes) and when you move
paragraphs around.

### TimeTags

A TimeTag is a named marker you drop at the current moment: "Decision", "Ask about
pricing", anything. Press ⌘T or click the # button in the toolbar, type a name, and press
Return. The popover shows the exact time the tag will point to.

TimeTags appear three ways:

- As a red `#Name` pill in your note where the cursor was. Click it to jump there.
- As a dot on the audio-bar timeline. Hover for the name and time; click to jump.
- In search: TimeTag names are indexed, so searching "pricing" finds the note.

**TimeTag offset.** You usually tag something after you hear it. Settings ▸ Audio ▸ TimeTag
offset lets new tags point 1, 3, 5, or 10 seconds before the moment you press the button.

**Key Moments to TimeTags.** The AI assistant's Key Moments action lists the notable moments
in a recording, each with an Insert Tag button that drops it as a TimeTag. See
[Quick actions](#quick-actions).

---

## 6. Playback

| Control | Where |
|---|---|
| Play / Pause | ⌘↩, the play button, or Audio ▸ Play / Pause |
| Skip forward / back | ⌥⌘→ and ⌥⌘←. The interval is 5, 10, 15, 30, or 60 seconds (Settings ▸ Audio ▸ Skip interval; default 10) |
| Nudge 3 seconds | ⌥⇧⌘→ and ⌥⇧⌘← |
| Scrub | Drag the playhead on the timeline |
| Speed | 0.5×, 0.75×, 1×, 1.25×, 1.5×, 2× from the speed menu in the audio bar or Audio ▸ Playback Speed |

While audio plays, the transcript panel follows along and highlights the current line, and
any paragraph you type gets stamped with the playback position, so you can take notes on a
recording after the fact just as you would live.

Plugging in or removing headphones mid-playback does not stop it.

### Playback effects

Audio ▸ Noise Reduction and Audio ▸ EQ apply to playback only; the recordings on disk are
never altered. Settings ▸ Audio has the noise-reduction strength slider and the three-band
EQ (Low, Mid, High, each ±12 dB).

---

## 7. Editing audio

Every audio edit remaps the note's gutter stamps, TimeTags, and transcript lines onto the
shortened timeline, so nothing points at the wrong moment afterwards.

### Trim a range

Click the trim button (the selection icon) in the audio bar, drag across the section of the
timeline you want to remove, then confirm **Remove**. Playback pauses while you trim.

### Delete a recording

If a note has more than one segment, Audio ▸ Delete a Recording lists each one by date and
length so you can remove a single take. Audio ▸ Delete All Audio… removes every recording
from the note, after confirming.

### Clean Up Audio (Premium)

Audio ▸ Clean Up Audio, or the scissors button in the audio bar, trims long silences and
normalizes loudness in one pass. It adapts to the recording's own noise floor, so it works on
laptop mics and phone recordings, not just studio-quiet ones. Clean-up cannot run while the
note is recording or transcribing.

### Undo or commit an edit

- **Revert Audio Edits** (Audio menu) restores the original recordings and puts every
  timestamp back. This works because Orbital keeps a backup of the pre-edit originals.
- **Keep Audio Edits** drops those originals once you are happy, so they stop taking space.
- Settings ▸ Storage ▸ "Keep audio-edit backups" can drop them automatically after 7 or 30
  days, and archiving a note drops its backup.

---

## 8. Transcription

### Engines

| Engine | Where it runs | Plan | What you get |
|---|---|---|---|
| Apple (default) | On your Mac when possible; Apple's servers as a fallback | All plans, unlimited | Transcription in the dictation language you choose; live transcription while recording |
| ElevenLabs Scribe, your key | ElevenLabs' servers under your account | Pro and Premium | Speaker labels, about 90 auto-detected languages, mixed-language recordings; ElevenLabs charges about $0.22 per hour of audio |
| ElevenLabs Scribe, built in | Orbital's relay, then ElevenLabs | Premium | The same, with no key: 10 hours per month included, then transcription continues on-device |

Pick the engine in Settings ▸ Speech. On-device transcription uses Apple's Speech framework,
which processes audio on your Mac when possible. If on-device recognition is not available for
your language, or it fails, macOS falls back to Apple's servers under the Speech Recognition
permission you granted.

### Automatic transcription

"Transcribe recordings automatically" (Settings ▸ Speech, on by default) transcribes every
recording and import with the engine you chose, as soon as it stops. If a cloud engine fails
on this automatic path, Orbital falls back to on-device so you always get a transcript.

### Transcribe Now

Transcript ▸ Transcribe Now, the … menu ▸ Transcribe Audio, or the Transcribe Audio button in
an empty transcript panel runs transcription on demand, and re-runs it over an existing
transcript. By default Orbital asks which engine to use each time; a checkbox in that dialog
(or Settings ▸ Speech) turns the question off. A cloud engine you chose explicitly reports
its error rather than silently transcribing on-device.

### Live transcription while recording

The captions button in the audio bar, or Transcript ▸ Transcribe While Recording, shows
lines in the transcript panel as you speak. It is on by default and can be toggled
mid-recording. When the recording stops, a more accurate pass replaces the live transcript.
For very long sessions you can skip that pass with Transcript ▸ Keep Live Transcript.

### The transcript panel

Open it with ⌘⇧T or the quote button. It has two tabs.

**Transcript.** Every line carries its time and, with a cloud engine, its speaker. Click a
line to seek playback to it; the panel scrolls to follow playback. Type in "Search
transcript" to filter lines. The header has buttons to re-transcribe, delete the
transcript, and close the panel.

**Speakers.** Lists each speaker with a line count and a play button that plays a short
sample so you can tell who is who. Click a speaker to rename them; the new name applies to
every line they spoke, and Reset restores the original label. You can also rename by
clicking a speaker's name on any transcript line.

Transcript ▸ Copy Transcript puts the whole thing on the clipboard as `[h:mm:ss] Speaker:
text` lines.

### Importing a transcript you already have

File ▸ Import Transcript… reads a text file of timestamped lines into the note, speakers
included, so a transcript from another service can drive click-to-seek in Orbital. A note
can hold an imported transcript without any audio.

### Exporting a transcript

Export ▸ Transcript gives you Text (`[0:01:23] Speaker: line`) or SubRip subtitles (`.srt`)
for video players. See [Export](#13-export-import-bundles-and-print).

---

## 9. Dictation

Click the microphone button in the toolbar to dictate into the note at the cursor. Words
appear underlined while they are provisional and firm up as each phrase completes. Clicking
or typing mid-phrase keeps what was already recognized and starts the next phrase cleanly.
Each utterance is a single undo step, and dictated text never overwrites a selection.
Dictation works during a recording too.

Settings ▸ Speech ▸ Dictation:

- **Put each dictated phrase on its own line** (on by default). Off, phrases continue the
  current paragraph separated by spaces.
- **Language.** Any language macOS speech recognition supports. This is also the hint
  language for on-device transcription.

Dictation runs through Apple's Speech framework, on-device where your language supports it.

---

## 10. The editor

### Text styles

The Aa toolbar button and the Format menu cover everything:

| Style | Shortcut |
|---|---|
| Header Large / Header Medium / Body | ⌥⌘1 / ⌥⌘2 / ⌥⌘0 |
| Bold / Italic / Underline | ⌘B / ⌘I / ⌘U |
| Strikethrough | Format menu |
| Bulleted list, Numbered list, Checkbox, Quote | Format menu or the palette |
| Increase / Decrease indent | ⌘] / ⌘[ |
| Separator, Page break | Format menu or the palette |
| Highlighter | ⌘⇧H |

Checkboxes are clickable. Page breaks are honoured by Print and PDF export.

### Markdown shorthand

At the start of a plain paragraph, type a marker and a space and the paragraph converts:

| Type | Becomes |
|---|---|
| `- `, `* `, or `• ` | Bulleted list |
| `1. ` (any number) | Numbered list |
| `[] ` or `[ ] ` | Checkbox |

Inside an existing list the marker is left as text. The AI assistant's answers and the Add
to canvas button use the same conversions, so `**bold**`, `> quotes`, and headings arrive
formatted.

### Highlighter

Press ⌘⇧H or click the highlighter. Choose from six colours (yellow, green, orange, pink,
blue, purple), then select text or drag across it. Settings ▸ General ▸ "Highlighter selects
by" switches between whole words (default) and single characters. Use the eraser to remove a
highlight and the tick to leave highlighting mode.

### Images

Paste or drag any image format macOS can display and it appears inline on softly rounded
corners. Drag a corner to resize it. Images travel with copy and paste, including between
notes, and export into PDF and Print.

### Attachments

⌘⇧A, the paperclip, or dragging files onto the editor attaches PDFs, Word documents,
spreadsheets, anything, as a chip in the text. Click a chip: files macOS can preview open
right in Orbital, everything else opens in its own app. Chips move with copy and paste,
including between notes. Large files copy in the background, and the chip appears when the
copy is done.

The AI assistant reads attachments alongside the transcript: PDFs, Word and RTF documents,
plain-text files, and even text inside images and slides, recognized on-device.

### Pasting from other apps

Text pasted from other apps comes in at the canvas's own font, size, and colour at the
cursor; the other app's formatting is dropped. Copies from another Orbital note keep their
styling.

### Find, print, and word count

- **Find** with ⌘F.
- **Print** with ⌘P. PDF export produces the same layout.
- **Word count** from View ▸ Show Word Count.

### Appearance

Settings ▸ Appearance:

- **Appearance.** System, Dark (default), or Light. Dark is the original look; Light
  keeps the starfield but draws every theme as a pale tint with dark text.
- **Theme.** Ten procedural space themes: Milky Way Centre (default), Eagle Nebula's
  Pillars of Creation, Earth, Galaxy IC 3639, Jupiter, Moon, TOI 700 d, Saturn,
  Andromeda, and Mars. Each has a dark and a light version; the cards preview whichever
  appearance is active.
- **Editor font.** System, Rubik, OpenDyslexic, Avenir Next, Baskerville, Courier, Geeza
  Pro, Helvetica Neue, Menlo, Noto Sans, and Noto Sans Arabic, plus a size control. Only
  fonts installed on your Mac are offered.

---

## 11. The AI assistant

Open the panel with the ✨ button. What you can do depends on your plan:

| | Free | Pro | Premium |
|---|---|---|---|
| Summarize, Key Moments, Action Items, Meeting Minutes, Suggest Title | No | With your own API key | Built in, or your key |
| Chat about a note, @-mention other notes | No | No | Yes |
| AI Notes (on the canvas and in the AI Notes tab) | No | No | Yes |
| Auto-summarize every recording | No | No | Yes |
| Add to canvas, timestamp pills, saved results | No | Yes | Yes |

### Providers and keys

On Pro, the assistant runs on your own API key for OpenAI, Claude (Anthropic), Groq, or
Google Gemini. Groq and Gemini offer free keys with no card required. Enter keys in
Settings ▸ AI; they are stored in your Keychain and sent only to the provider they belong
to. Orbital also picks up `OPENAI_API_KEY`, `ANTHROPIC_API_KEY`, `GROQ_API_KEY`, and
`GEMINI_API_KEY` from the environment as defaults.

On Premium, **Orbital AI** is built in with no keys: 300 AI actions per month, resetting
monthly, covering every quick action, AI Notes, and chat. Auto-summaries count against the
same 300. Add your own keys too and they appear beside Orbital AI in the model menu.

The **model menu** sits under the chat box in the panel, so you can switch providers per
question without opening Settings. Settings ▸ AI ▸ Provider picks the default and, for
OpenAI and Claude, the model.

**Fallback.** "Fall back to other configured providers when a request fails" is on by
default: if your chosen provider errors, Orbital retries with the other providers you have
keys for (and Orbital AI on Premium). Turn it off and requests only ever go to the provider
you selected. Every answer is labelled "via <provider>" so you know which one responded.

### Quick actions

With a note open, the panel's Quick Actions row offers:

- **Summarize.** A concise summary of the note and its transcript.
- **Key Moments.** The notable moments, each with a timestamp and an **Insert Tag** button
  that drops it into the note as a TimeTag.
- **Action Items.** A checklist of follow-ups.
- **Meeting Minutes.** Structured minutes.
- **Suggest Title.** A title, with a **Use as Title** button.

Results are saved as a chat under the note, so they are still there after a relaunch.
Timestamps in any answer are red pills: click one and playback jumps there. Copying an
answer and pasting it into a note keeps the pills.

**Add to canvas.** Every answer, chat reply and quick-action result alike, has an Add to
canvas button that drops it into the note at the cursor, on its own lines, formatted the way
the canvas formats things: lists, bold, quotes, and every cited moment as a TimeTag pill.

### Chat (Premium)

Type in "Ask about this note…" and press Return. The assistant sees the note's title, text,
timestamped transcript with speakers, attachments' extracted text, and brief context from
earlier chats about the same note.

- **@-mention other notes.** Click the @ button (or type @) to add another note from the
  same notebook as context, so you can ask across a week of meetings. Remove a mention with
  its ×.
- **Context meter.** A percentage under the box shows how much of the chat's context is
  used. When it is full, start a New Chat.
- **Stop** cancels a reply in progress. A question that cannot be sent stays in the box.
- **Conversations.** The panel's home lists every chat for the note. New Chat starts a
  fresh one; right-click a chat to delete it.

### AI Notes on the canvas (Premium)

The **AI Notes** button on the canvas writes timestamped bullet notes from the transcript
straight into the note: a title, sections, and an action-items list, nearly every line
clickable to its moment. It needs a transcript first. Running it again replaces the previous
run in place rather than appending a second copy.

### The AI Notes tab (Premium)

The AI Notes tab in the sidebar writes one document across several recorded sessions.

1. Click **New AI Notes**.
2. Pick up to eight sessions (any note with a transcript counts as a session). The footer
   shows how many you picked and their total length.
3. Click **Generate Notes**. This can take a minute or more.

The document lists every line with an S1, S2… marker for the session it came from; click a
line to play that session from that moment. A chat button opens "Ask across these
sessions…", grounded in the document and its source transcripts. Documents live in the
sidebar under the tab; the trash button deletes one.

### Auto-summarize (Premium)

Settings ▸ AI ▸ Automation ▸ "Auto-summarize recordings when transcription finishes" (on by
default on Premium) summarizes every recording and extracts key moments with no button
press. Each auto-summary counts as one AI action.

### What the assistant sends, and where

Only when you run an AI feature, and only to the provider that answers: the note's title,
text, timestamped transcript with speaker labels, any notes you @-mentioned, attachments'
extracted text, and brief context from earlier chats about the same note. Nothing is sent in
the background. On Premium, Orbital AI runs through Orbital's relay, which forwards only the
message text to its upstream model and stores no note content. Chats about a locked note are
never written to disk. Full details are in the [privacy policy](PRIVACY.md).

---

## 12. Locking, privacy, and where your data lives

### Where your data lives

Everything is local, in the app's container at
`~/Library/Containers/com.orbital.mac/Data/Library/Application Support/Orbital/`:

- `notebooks.json` and the AI sidecars (`chats.json`, `ai-notes.json`).
- One folder per note, named after the note (`meeting-with-sam--<id>`), holding
  `note.json`, `transcript.json`, its audio segments under `audio/`, and attachments.
- `Backups/`, timestamped snapshots of the notes' metadata; the latest 15 are kept.
- A README explaining the layout.

Settings ▸ Storage ▸ Show in Finder opens the folder. There is no Orbital account, no
analytics, no telemetry, and no crash reporting. Nothing leaves your Mac unless you trigger
it: cloud transcription, an AI action, a Premium quota check — or iCloud sync, if you turn it
on (below). The one exception is Apple's own: on-device transcription falls back to Apple's
servers when on-device recognition isn't available (see [Engines](#engines)). To move notes to someone else's Mac, use [bundles](#bundles).

### iCloud sync (optional)

Settings ▸ iCloud ▸ **Sync this library with iCloud** keeps your library the same on every Mac
signed in to your Apple ID. It is **off** until you turn it on.

- **What syncs:** notes and their text, notebooks and folders (with their order), transcripts,
  TimeTags and speaker names, attachments up to 1 MB, AI chats, and AI Notes documents. It goes
  to your own iCloud storage; Orbital runs no server for it.
- **Recordings sync in a later update.** A recording made on another Mac shows up with its
  full length, its stamps and transcript lines in the right places, but it is not on this Mac
  yet: playback skips over it, and transcribing it, cleaning it up, trimming it, deleting it or
  reverting an edit waits until it is here ("Recording is not on this Mac yet"). Exporting such
  a note offers **Export Without Recordings**; the bundle leaves those recordings out and says
  so.
- **Editing on two Macs at once** merges: different paragraphs both land. If both Macs changed
  the same paragraph, both versions are kept, one after the other, and Orbital tells you so you
  can pick. Recordings made on both Macs are placed in the order they were recorded, and every
  timestamp still points at the moment it was made.
- **Turning it on the first time** on a second Mac replaces its untouched welcome note with
  your library; notes you already had there are merged in, with one Drafts and one Onboarding.
- **Locked notes stay on this Mac.** Your other Macs only see that the note exists, under
  Settings ▸ iCloud ▸ Locked on other Macs. **Locked notes are not in iCloud — if this Mac is
  lost they are lost with it unless you export a bundle.** If a note is locked on one Mac while
  another has unsaved edits to it, that Mac asks whether to discard them (the default) or keep
  them as a new, unlocked note that stays on that Mac only.
- **Signing out of iCloud or into another Apple ID** pauses sync; nothing is uploaded to the
  other account unless you turn sync on again there. Signing back in resumes where it left off.
- **Turn Off** keeps everything on this Mac; turning it back on sends only what changed
  meanwhile. **Turn Off and Remove from iCloud** also deletes Orbital's data from iCloud; your
  other Macs keep their copies and stop syncing.
- Status and **Last synced** are in Settings ▸ iCloud, with **Sync Now**. Sync needs a build of
  Orbital from the Mac App Store; a development build says "Not available in this build".

### Locking notes

Note locking (Pro and Premium) encrypts a note on disk with AES-GCM, using a key derived
from a password you choose.

1. **Set a password** in Settings ▸ General ▸ Note locking ▸ Set Password…, or the first
   time you choose Lock Note. At least six characters. Change it later from the same place;
   the current password is required.
2. **Lock a note** with Note ▸ Lock Note, right-click ▸ Lock Note…, the lock button in the
   toolbar, or the … menu.
3. **Unlock** by opening the note and entering the password. One password opens every
   locked note (and shows every hidden notebook) for the session.
4. **Lock Session** (⌃⌘L in the Note menu) closes them all again and forgets the password.
   Orbital also locks the session by itself when the Mac sleeps, the screen locks, or you
   switch users (Settings ▸ General, on by default), and optionally after 5, 15, 30, or 60
   minutes with no keyboard or mouse input.
5. **Remove Lock** turns the note back into a plain, unencrypted note.

What is encrypted: the note's text, transcript, TimeTags, speaker names, recordings,
attachments, and its audio-edit backup. Recordings are encrypted chunk by chunk, so a
two-hour recording is no heavier to lock than a paragraph. What stays readable on disk: the
note's title (and the folder name derived from it), how many recordings it has and how long
they are, and which notebook and folder it sits in.

While the session is unlocked, decrypted recordings sit in a hidden folder inside the
library (excluded from Time Machine) and are sealed again when the session locks or you
quit. Locking a note also purges its plaintext from the metadata backups. AI chats about a
locked note are kept in memory only.

**There is no password reset.** The key is derived from your password and Orbital has no
server or copy of it. If you forget the password, locked notes cannot be opened. After five
wrong guesses, each further attempt waits longer (the prompt says how long), and the count
survives a relaunch. Lock Session is refused while a locked note is recording or
transcribing, so a result cannot land after the key is gone.

### Hidden notebooks

Right-click a notebook ▸ Hide Behind Password… hides it and its notes until the lock
password is entered. This is a visibility gate inside the app, not encryption: the notes
inside stay unencrypted on disk. To protect a notebook's contents at rest, lock its notes
individually. Remove Lock un-hides it.

### Keys and secrets

API keys and the note-lock verifier live in your macOS Keychain; your purchases are kept by the App Store. They are
never written to plain files and are sent only to the service they belong to.

### The diagnostics log

`~/Library/Containers/com.orbital.mac/Data/Library/Logs/Orbital/diagnostics.log` records labels like "transcription failed" and one
line per launch with the version and macOS version. It never contains note content,
transcripts, or keys, and it is never uploaded. Help ▸ Report a Problem… drafts an email in
your mail app with the app version, macOS version, and the last few of those labels; you
read it before deciding to send.

---

## 13. Export, import, bundles, and print

### The Export sheet

⌘⇧E, the share button, or File ▸ Export… opens a two-step chooser. Pick what, then a format:

| What | Formats |
|---|---|
| Notes | **Markdown** (`.md`, headings, lists, and styling; special characters escaped so it renders in any Markdown app), **Plain Text** (`.txt`, with timecodes), **PDF** (formatted exactly like Print, images and page breaks included) |
| Transcript | **Text** (`.txt`, `[0:01:23] Speaker: line`), **Subtitles** (`.srt`, SubRip) |
| Audio | **M4A** (AAC, small), **WAV** (uncompressed), **AIFF** (uncompressed). All of a note's recordings are joined into one file |
| Orbital Bundle | `.orbitalnote`, see below |

### Bundles

Bundles move notes between Macs with everything intact.

- **File ▸ Export Note as Bundle…** writes a `.orbitalnote` file: text, recordings,
  transcript, attachments, and the note's AI chats and AI Notes.
- **File ▸ Export Library…** writes the whole library as one `.orbital` file.
- **File ▸ Import Note Bundle…** and **Import Library…** bring either back. When a note
  already exists, Orbital asks whether to skip it, replace it, or keep both as copies.
  Replace names the notes it would delete and asks twice.

A locked note travels sealed inside its bundle and opens only on the Mac that locked it;
Orbital says so before the save panel. Bundles from elsewhere are treated as untrusted:
every file's checksum is verified, and an archive with links, path traversal, or an
implausible size is refused before anything is extracted.

### Print

⌘P prints the note with its images and page breaks. PDF export uses the same layout.

---

## 14. Storage

Settings ▸ Storage shows what your library is made of: recordings, imported originals,
audio-edit backups, and attachments, plus the ten largest notes with Show in Finder buttons.
From here you can:

- Set how long audio-edit backups are kept (Forever, 30 days, 7 days), or **Discard All…**
  of them at once.
- **Compress** imported lossless audio that predates automatic conversion.
- **Show in Finder** for the library folder.

Snapshots in `Backups/` share disk blocks with the live notes, so their size overlaps with
the rest.

---

## 15. Plans, purchases, and usage

| | Free | Pro | Premium |
|---|---|---|---|
| Price | $0 | $49 one-time | $9.99 / month or $79.99 / year |
| Notes and notebooks | Unlimited | Unlimited | Unlimited |
| Recording | 120 min / month | Unlimited | Unlimited |
| On-device transcription | Unlimited | Unlimited | Unlimited |
| Full editor, themes, search | Yes | Yes | Yes |
| Cloud transcription (ElevenLabs Scribe) | No | Your own key | Built in, 10 h / month, or your key |
| Encrypted note locking and hidden notebooks | No | Yes | Yes |
| Summarize, Key Moments, Action Items, Meeting Minutes, Titles | No | Your own key | Built in, 300 actions / month, or your key |
| Chat and @-mention across notes | No | No | Yes |
| AI Notes (canvas and tab) | No | No | Yes |
| Auto-summarize recordings | No | No | Yes |
| Clean Up Audio | No | No | Yes |

Pro is a one-time purchase; major versions are paid upgrades. Premium is the only
subscription, because it pays for the AI and transcription Orbital runs on your behalf.
Premium annual works out to $6.67 a month, and starts with a **3-day free trial** (the monthly
plan has no trial). The trial includes a smaller allowance for its three days — 2 hours of
built-in transcription and 30 AI actions — and the full monthly allowance starts when the paid
subscription does. Cancel at least 24 hours before the trial ends, in your App Store account
settings, and you are not charged; cancel later than that and the first year may already be
charged.

### Buying and restoring

Settings ▸ Plans (or the ✨ panel's See Plans button). Prices are the App Store's, in your
currency:

- **Buy Pro** — a one-time purchase. **Subscribe monthly** / **Subscribe annually** — Premium,
  which renews automatically until you cancel it in your App Store account settings
  (**Manage Subscription** opens them). While your Apple Account can still take the yearly
  plan's free trial, the annual button reads **Start 3-day free trial**, with the price it
  turns into and the trial's terms beside it. The monthly button never offers a trial.
- **Restore Purchases** brings back what the Apple Account signed into the App Store has
  bought — on a new Mac, or after reinstalling. Purchases belong to that Apple Account.
- While you subscribe, the Plan pane says when Premium renews or expires. If the App Store
  cannot charge your card, Premium keeps working for a grace period while it retries, and
  the pane says so. If Premium ends, you keep Pro if you bought it.
- Built-in transcription and Orbital AI sign in to Orbital's servers with your App Store
  purchase, automatically. Nothing about you beyond that purchase record is sent.

### Usage

Settings ▸ Usage shows the meters that apply to your plan: recording minutes on Free; on
Premium, live server-side counts of AI actions and transcription hours with their reset
dates — during the free trial, when the trial ends instead, because the trial's allowance does
not reset monthly. If you bring your own AI keys, the tab also keeps a running cost estimate you can
reset.

When Premium's included transcription hours are spent, recordings continue on-device. When
the 300 AI actions are spent, the panel says so and they reset next month; your own keys, if
any, keep working. During the free trial the same happens at the trial's allowance, which
does not reset until the subscription starts.

---

## 16. Updates and getting help

### Updates

Orbital updates through the Mac App Store. Settings ▸ General shows the version you have.

### Help menu

- **Show Onboarding** replays the guided tour on the welcome note.
- **Report a Problem…** drafts an email with the app and macOS versions and the last few
  diagnostic labels. You read it before it is sent.

Support and privacy questions: [tchaalan23@gmail.com](mailto:tchaalan23@gmail.com).

---

## 17. Troubleshooting

**"No audio input available" or the mic is not detected.** Orbital retries on its own after
you grant Microphone access; if it still fails, quit and reopen. If macOS is blocking the
microphone for an updated copy of the app, the error names the exact toggle in System
Settings ▸ Privacy & Security ▸ Microphone to flip.

**"Nothing to record."** The microphone is unticked in the input menu and Capture System
Audio is off. Tick an input or turn on system audio.

**No transcript appears.** Check System Settings ▸ Privacy & Security ▸ Speech Recognition.
On the automatic path a cloud failure falls back to on-device; a cloud engine you chose
explicitly shows its error instead. Temporary service hiccups are retried automatically.

**Cloud transcription of a long meeting fails on my network.** Uploads try HTTP/3 first, which
networks that cut off large transfers cannot interrupt, then fall back. You are never charged
Premium quota for a transcript you did not receive.

**Clean Up Audio says "Nothing to clean".** Since 1.5.1 the silence detector follows the
recording's own noise floor. If it still finds nothing, the recording has no stretches of
silence long enough to remove.

**Revert Audio Edits is greyed out.** There is no backup to restore: you chose Keep Audio
Edits, the retention period passed, or the note was archived. It is also disabled while a
recording, clean-up, or transcription is running.

**Lock Session is greyed out.** The session is already locked, or a locked note is
currently recording. Stop the recording first.

**"This month's included AI actions are used up."** Premium's 300 actions reset next month.
Add your own key in Settings ▸ AI to keep going in the meantime.

**The AI answer names a provider I did not pick.** Fallback re-sent the request after your
primary failed. Turn off Settings ▸ AI ▸ Fallback to send only to the provider you chose.

**A note written by a newer Orbital.** It opens on an older build instead of disappearing.

**I need to see exactly what happened.** Help ▸ Report a Problem… or open
`~/Library/Containers/com.orbital.mac/Data/Library/Logs/Orbital/diagnostics.log`. Files Orbital cannot read are set aside in a
`recovery` folder inside the library instead of being deleted.

---

## 18. Settings reference

**General**
- Notes list: Sort by (Last edited, Date created, Title), Descending, Date format
  (relative, Short, Long), Archive deleted notes instead of erasing them (on).
- Editor: Show timestamp gutter (on), Highlighter selects by (Word, Character).
- Privacy & storage: Note locking Set / Change Password…, Lock again when the Mac sleeps or
  the screen locks (on), Lock again after (Never, 5, 15, 30 minutes, 1 hour idle).
- About: current version.

**Audio**
- Recording: Quality (Space saver, Good, Best), TimeTag offset (−10, −5, −3, −1, 0 s).
- Playback: Skip interval (5, 10, 15, 30, 60 s), Noise reduction and strength, Equalizer
  with Low, Mid, High. Playback-only; recordings on disk are never altered.

**iCloud**
- Sync this library with iCloud (off), status and Last synced, Sync Now, Turn Off and Remove
  from iCloud; notes locked on other Macs; the locked-notes sentence.

**Storage**
- Library breakdown and the largest notes; Keep audio-edit backups (Forever, 30 days, 7
  days); Discard All audio-edit backups; Compress imported lossless audio; Show library in
  Finder.

**Appearance**
- Appearance (System, Dark, Light), Theme (ten), Editor font and size, Reset to System Font.

**Speech**
- Transcription: Engine (Apple, ElevenLabs Scribe), ElevenLabs API key (Pro), Transcribe
  recordings automatically (on), Ask which engine when transcribing manually (on).
- Dictation: Put each dictated phrase on its own line (on), Language.

**AI**
- Built-in AI status and remaining actions (Premium).
- Provider (OpenAI, Claude, Groq, Google Gemini) and model; Fall back to other configured
  providers when a request fails (on).
- API keys for OpenAI, Claude, Groq, Gemini, with links to each console.
- Automation: Auto-summarize recordings when transcription finishes (Premium, on).

**Plans**
- Current plan, App Store prices, Buy Pro, Subscribe monthly / annually, Restore Purchases,
  Manage Subscription, the subscription status, Terms of Use and Privacy Policy.

**Usage**
- Recording minutes (Free), Orbital AI actions and transcription hours with reset dates
  (Premium), bring-your-own-key cost estimate and Reset.

---

## 19. Keyboard shortcuts

### Notes and files

| Shortcut | Action |
|---|---|
| ⌘N | New Note |
| ⌘⇧N | New Notebook |
| ⌘⇧D | Duplicate Note |
| ⌘⇧I | Import Audio… |
| ⌘⇧A | Attach Files… |
| ⌘⇧E | Export… |
| ⌘P | Print… |
| ⌘F | Find in note |
| ⌘, | Settings |

### View

| Shortcut | Action |
|---|---|
| ⌘+ / ⌘− / ⌘0 | Zoom in / out / actual size |
| ⌥⌘S | Show or hide the notebooks sidebar |
| ⌥⌘L | Show or hide the note list |
| ⌃⌘F | Focus Mode |
| ⌘⇧T | Show or hide the transcript |

### Note and audio

| Shortcut | Action |
|---|---|
| ⌘T | Insert TimeTag |
| ⌘' | Set Timestamp on the selected paragraphs |
| ⌃⌘L | Lock Session |
| ⌘R | Record / Stop Recording |
| ⌘↩ | Play / Pause |
| ⌥⌘→ / ⌥⌘← | Skip forward / backward by the skip interval |
| ⌥⇧⌘→ / ⌥⇧⌘← | Forward / back 3 seconds |

### Formatting

| Shortcut | Action |
|---|---|
| ⌥⌘1 / ⌥⌘2 / ⌥⌘0 | Header Large / Header Medium / Body |
| ⌘B / ⌘I / ⌘U | Bold / Italic / Underline |
| ⌘] / ⌘[ | Increase / Decrease indent |
| ⌘⇧H | Highlighter |

Plain ⌘← and ⌘→ stay with the text editor (line start and end), as everywhere else on Mac,
which is why the audio skips use ⌥.

---

## 20. How Orbital compares to other audio note apps

This section compares Orbital with twelve other apps people use to take notes from
audio. It is meant to help you decide whether Orbital is the right tool, not to sell it,
so each entry lists what the other app has that Orbital does not, as well as the reverse.

**How to read it.** Facts were checked against each vendor's own pricing or support pages
on September 15, 2026, or against 2026 third-party reviews where a vendor page could not be
reached. Anything marked *unverified* could not be confirmed from a fetched page and should
be checked before you rely on it. Prices are US dollars unless stated, exclude tax, and
change often. Feature lists are not exhaustive.

### Where Orbital sits

These apps fall into four groups, and the right comparison depends on which one you need:

- **Timestamped note-takers** tie what you write during a recording to the audio so you
  can click back to the moment. Orbital, Notability, Noted, AudioNote 2, Goodnotes, and
  OneNote are in this group.
- **Meeting recorders** capture calls, transcribe them in the cloud, and produce AI
  summaries. Otter.ai, Granola, Notion AI Meeting Notes, and Fathom are built for this.
  Some of them do not keep the audio at all.
- **Transcription utilities** turn audio into text and stop there. MacWhisper is the
  Mac-native example.
- **General note apps with audio** record and transcribe as one feature among many. Apple
  Notes and Evernote fit here. Genio Notes (formerly Glean) is a student-focused variant.

### What Orbital does not do

Read this list first. If any item is a requirement for you, another app on this page will
serve you better.

- **Mac only.** There is no iPhone, iPad, Windows, Android, or web app, and no sync
  between Macs. Notes move between Macs by exporting and importing bundles. Every other app
  here except MacWhisper and AudioNote 2's Mac edition runs on at least one more platform.
- **No handwriting.** Notability, Goodnotes, AudioNote 2, and OneNote replay pen strokes in
  sync with audio. Orbital is typed text only.
- **No collaboration or sharing.** No shared notebooks, comments, team spaces, or links.
- **No calendar integration, meeting bot, or video.** Orbital records whatever your Mac
  plays when you press Record; it does not join calls for you, know your schedule, or
  record video.
- **On-device transcription is Apple's.** It supports the languages macOS speech recognition
  supports, and it does not label speakers. Speaker labels and 90-language auto-detection
  require the ElevenLabs cloud engine (your key on Pro, built in on Premium). MacWhisper does
  speaker labels and 100+ languages locally.
- **Live transcription is on-device only.** Cloud transcription runs after a recording
  stops, not while it runs.
- **AI on Pro needs your own API keys.** Creating keys at OpenAI, Anthropic, Groq, or Google
  is a setup step most apps here do not ask of you. Premium removes it.
- **The free plan caps recording** at 120 minutes a month. Apple Notes and Fathom record for
  free without a cap; Otter's free tier allows 300 minutes a month.
- **Mac only, through the App Store.** Purchases are App Store in-app purchases; there is
  no iPhone or iPad app yet.
- **Built by one developer.** The privacy policy says so plainly. There is no support team
  or status page. The larger products have both.

### What Orbital does that most of these do not

- **Typed notes stamped to audio, automatically.** Verified in Notability, Noted, AudioNote 2,
  and OneNote as well. Apple Notes, Otter, MacWhisper, and Fathom make only the transcript
  clickable. Granola and Notion keep no audio to click back to.
- **Local by default, with no account.** Only MacWhisper and AudioNote 2 also keep data on
  your Mac by default. Every other app centres on a cloud account.
- **Encrypted notes.** Locked notes, including their recordings and attachments, are
  AES-GCM encrypted on disk under a password only you hold. None of the other apps here
  advertise encryption of audio notes at rest under a user-held key (Apple Notes and Evernote
  offer note locking; details were not re-verified).
- **Bring your own AI key.** Among these apps, only MacWhisper also lets you point the AI at
  your own OpenAI, Anthropic, Groq, or Google key. The note-taking apps all bundle AI into a
  subscription.
- **One-time purchase that includes AI.** Notability Classic ($49.99) and AudioNote 2
  ($14.99) are one-time but exclude AI and cloud transcription. Noted's $59.99 lifetime
  includes transcription. MacWhisper Pro (€64) includes AI with your own key but is not a
  notes app.
- **System-audio capture without a bot.** Shared with Granola, MacWhisper Pro, Notion, and
  Fathom's beta. Not offered by Notability, Noted, AudioNote 2, Goodnotes, Apple Notes, or
  OneNote on Mac.
- **Audio editing that keeps timestamps in sync.** Trim, delete, and clean-up remap every
  stamp, tag, and transcript line. No other app here advertises this.

### Feature matrix

| | Orbital | Notability | Noted | Apple Notes | OneNote | Otter.ai | Granola | Genio Notes | AudioNote 2 | MacWhisper | Evernote | Goodnotes | Notion AI Meeting Notes | Fathom |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Mac app | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Yes | Web; desktop unverified |
| iPhone / iPad | No | Yes | Yes | Yes | Yes | Yes | iPhone | Yes | Yes | No | Yes | Yes | Unverified | Unverified |
| Windows / Android / web | No | No | No | Web (partial) | Yes | Yes | Win, Android | Yes | Win unverified | No | Yes | Yes | Win | Web |
| Typed notes tied to audio | Yes | Yes | Yes (#TimeTags) | Transcript only | Yes | Transcript only | No audio kept | Partial, unverified | Yes | Transcript only | No | Handwriting yes; typed unverified | No audio kept | Transcript only |
| Handwriting tied to audio | No | Yes | No | No | Yes (Windows) | No | No | No | Yes | No | No | Yes | No | No |
| Transcription runs | On-device; cloud optional | Unverified | Unverified | On-device (implied) | Cloud, Windows only | Cloud | Cloud | Unverified | On-device | On-device; cloud optional | Cloud | On-device; cloud optional | Cloud | Cloud |
| Live transcription | Yes (on-device) | Pro tier | Yes | Yes | Windows | Yes | Yes | Institutional only | Yes | Yes (Pro) | Meeting mode | Unverified | Yes | Yes |
| Speaker labels | Cloud engine | Unverified | Yes (v7.0) | No | Yes | Yes | Me / Them | Unverified | No | Yes (Pro, Apple silicon) | Yes | Unverified | Yes | Unverified |
| Languages | ~90 (cloud); Apple's list (on-device) | Unverified | 18 | 14 | 80+ | 6 | Multi, unverified | Multi | Dozens | 100+ | 50+ | Multi | Unverified | Unverified |
| AI summaries / chat | Yes (Pro key or Premium) | Yes (tiered) | Siri, Assistant IAP | Summaries | Copilot | Yes (paid) | Yes | Quiz, outline | None | Yes (Pro) | Yes (paid) | Yes (AI Pass) | Yes | Yes |
| Bring your own AI key | Yes | No | No | No | No | No | No | No | n/a | Yes, incl. local models | No | No | No | No |
| Keeps the audio | Yes | Yes | Yes | Yes | Yes | Yes | No | Yes | Yes | Yes | Yes | Yes | Unverified | Yes (video) |
| System audio on Mac, no bot | Yes | Unverified | Unverified | Phone/FaceTime only | No | Unverified | Yes | Unverified | Unverified | Yes (Pro) | Unverified | Unverified | Yes | Beta |
| Local-only storage by default | Yes | No | No | Local + iCloud | No | No | No | No | Yes | Yes | No | No | No | No |
| Encrypted notes, user-held key | Yes | Unverified | Unverified | Locked notes | Section passwords | No | No | Unverified | No | n/a | Text encryption | Unverified | No | No |
| Works offline | Yes, except cloud features | Notes yes; AI unverified | Recording yes | Yes | Notes yes; transcription no | No | No | 30 days | Yes | Yes | Notes cached | Notes yes | No | No |
| Audio editing keeps timestamps | Yes | No | Skip silences on playback | No | No | No | n/a | No | No | No | No | No | n/a | Clips |

### Pricing at a glance

| App | Free tier | Paid | Model |
|---|---|---|---|
| Orbital | Unlimited notes; 120 recording min/month; unlimited on-device transcription | Pro $49 once; Premium $9.99/month or $79.99/year | One-time plus optional subscription |
| Notability | 5 notes | Lite $14.99/yr; Plus $19.99/yr; Pro $99.99/yr; Classic $49.99 once (no transcription or AI) | Subscription; one-time for the classic feature set |
| Noted | Basic tier | $9.99/month; $49.99/yr; $59.99 lifetime | Subscription or lifetime |
| Apple Notes / Voice Memos | Everything | None | Free with macOS 15+ (Apple silicon for transcription) |
| OneNote | The app | Transcribe needs Microsoft 365; 300 upload min/month | Subscription |
| Otter.ai | 300 min/month, 30 min per conversation | Pro $8.33/month annual ($16.99 monthly); Business $19.99/month annual | Subscription |
| Granola | Limited meeting history | Business $14/user/month; Enterprise $35/user/month | Subscription |
| Genio Notes | 30-day trial | From £12/month; £144/yr | Subscription |
| AudioNote 2 | Lite (Mac); iOS app free | Mac $14.99 once; iOS Pro $9.99/yr | One-time (Mac) |
| MacWhisper | Free tier | Pro €64 once, lifetime updates | One-time |
| Evernote | 50 notes, 1 device | Starter about $99/yr; Advanced about $249.99/yr (third-party figures) | Subscription |
| Goodnotes | Limited | Essential $11.99/yr; Pro $35.99/yr; AI Pass $9.99/month or $119.88/yr (third-party figures) | Subscription |
| Notion AI Meeting Notes | Limited trial on Free and Plus | Business $20/member/month for full use | Subscription |
| Fathom | Unlimited recordings and transcriptions | Premium $16/month annual ($20 monthly); Team $15/user/month annual; Business $25 | Free core; subscription for AI extras |

### App by app

#### Notability

Notability is the closest match to Orbital's core idea on Apple platforms, with the addition
of handwriting.

- **Has that Orbital lacks:** iPad, iPhone, and Vision Pro apps with sync through Notability
  Cloud and iCloud; Apple Pencil handwriting replayed in sync with audio; PDF annotation;
  AI flashcards, quizzes, and YouTube import; collaboration and a business tier.
- **Orbital has that it lacks:** a free tier not capped at 5 notes; a one-time price that
  includes transcription and AI (Notability Classic excludes both); your own AI key;
  encrypted notes; system-audio capture; on-device transcription that is stated as such.
- **Unverified:** whether transcription runs on-device or in the cloud; speaker labels;
  export formats. Notability's support site could not be fetched.
- **Sources:** [App Store](https://apps.apple.com/us/app/notability-notes-pdf/id360593530),
  [notability.com/pricing](https://notability.com/pricing).

#### Noted

Noted's #TimeTags are the same idea as Orbital's TimeTags, and it is the only other app here
with a lifetime license that includes transcription.

- **Has that Orbital lacks:** iPhone, iPad, Apple Watch, and Vision apps with iCloud sync;
  Siri integration; transcription of imported video; a lifetime license at $59.99.
- **Orbital has that it lacks:** automatic paragraph timestamps without pressing anything;
  your own AI key; encrypted notes; audio editing that keeps timestamps in sync; a stated
  local-only posture; system-audio capture.
- **Unverified:** on-device versus cloud transcription; note encryption; system audio.
  Speaker identification arrived in version 7.0 in September 2026.
- **Sources:** [App Store](https://apps.apple.com/us/app/noted-record-ai-transcribe/id1149425482),
  [digitalworkroom.co.uk](https://www.digitalworkroom.co.uk/works/noted).

#### Apple Notes and Voice Memos

Free, built in, and the baseline any Mac user should compare against.

- **Has that Orbital lacks:** no cost; every Apple device with iCloud sync; iPhone call
  recording, and on macOS Tahoe, Phone-app call recording with transcripts saved to Notes;
  Apple Intelligence summaries with no key; Markdown import and export.
- **Orbital has that it lacks:** timestamps on the notes you type, not just the transcript;
  speaker labels; 90-language cloud transcription; a chat assistant and your choice of AI
  provider; system-audio capture for any app, not just calls; audio editing; export to SRT,
  PDF, and bundles.
- **Limits to know:** transcription needs macOS 15 or later on Apple silicon, supports about
  14 languages, and is not available in every region.
- **Sources:** [Record and transcribe audio in Notes](https://support.apple.com/guide/notes/record-and-transcribe-audio-apdb5106e334/mac),
  [Voice Memos transcription](https://support.apple.com/guide/voice-memos/view-a-transcription-of-a-recording-vm4a03609f0d/mac),
  [Call recording](https://support.apple.com/en-us/121583).

#### Microsoft OneNote

OneNote has linked audio notes on both Windows and Mac, but its transcription is Windows only.

- **Has that Orbital lacks:** Windows, Android, and web; the Microsoft 365 ecosystem; 80+
  transcript languages with speaker labels; ink linked to audio on Windows; enterprise
  administration.
- **Orbital has that it lacks:** any transcription on the Mac client; local storage; a
  one-time price; your own AI key; encrypted notes; unlimited transcription (OneNote's cap
  is 300 uploaded minutes a month on a standard Microsoft 365 plan).
- **Sources:** [Transcribe your recordings](https://support.microsoft.com/en-us/word/transcribe-your-recordings),
  [Record audio or video notes](https://support.microsoft.com/en-us/onenote/onenote-help-and-learning/record-audio-or-video-notes).

#### Otter.ai

A cloud meeting service rather than a notes app.

- **Has that Orbital lacks:** a bot that joins Zoom, Teams, and Meet; calendar integration;
  web, iOS, and Android; team sharing; 300 free minutes a month.
- **Orbital has that it lacks:** typed notes tied to audio; local storage and offline use;
  encryption under your key; a one-time price; your own AI key; more than six transcript
  languages; no per-conversation length cap (Otter's free tier stops at 30 minutes).
- **Sources:** [otter.ai/pricing](https://otter.ai/pricing).

#### Granola

Granola captures system audio on Mac without a bot, like Orbital, but keeps only the
transcript.

- **Has that Orbital lacks:** Windows, iPhone, and Android; calendar-aware meeting flow;
  team Spaces; integrations with Notion, Slack, HubSpot, and others; an API and MCP server;
  the fact that no audio is ever stored, which some compliance teams prefer.
- **Orbital has that it lacks:** the recording itself, and therefore any way to replay a
  moment; timestamps into audio; import of existing files; local-only storage; a one-time
  price; your own AI key; named speakers without a Zoom or Meet setup (Granola labels
  "Me" and "Them").
- **Sources:** [granola.ai/pricing](https://www.granola.ai/pricing),
  [Granola transcription docs](https://docs.granola.ai/help-center/taking-notes/transcription).

#### Genio Notes (formerly Glean, formerly Sonocent)

Built for students and disability-support offices; glean.co now redirects to genio.co.

- **Has that Orbital lacks:** web, Windows, Chromebook, iOS, and Android; institutional
  licensing; study tools (AI quiz, outline); live captions on institutional plans; 30 days of
  offline use with sync.
- **Orbital has that it lacks:** a one-time price (Genio is from £12 a month); local-only
  storage; your own AI key; encrypted notes; live captions on an individual plan.
- **Unverified:** whether free text is time-linked to audio; on-device transcription;
  speaker labels; export formats.
- **Sources:** [genio.co/pricing/individuals](https://genio.co/pricing/individuals).

#### AudioNote 2

The cheapest one-time option, with on-device transcription and handwriting.

- **Has that Orbital lacks:** iPhone and iPad with iCloud or Dropbox sync; handwriting,
  drawing, and PDF-slide annotation tied to audio; a $14.99 one-time price.
- **Orbital has that it lacks:** any AI features; speaker labels; cloud transcription;
  encrypted notes; system-audio capture; audio editing; active development (the Mac app's
  last update was version 9.1 in March 2025, and recent reviews report recording failures).
- **Sources:** [Mac App Store](https://apps.apple.com/us/app/audionote-2-voice-recorder/id1136796093?mt=12),
  [luminantsoftware.com](https://luminantsoftware.com/apps/audionote-notepad-and-voice-recorder/).

#### MacWhisper

A transcription utility, not a note-taker, but the closest to Orbital in privacy posture.

- **Has that Orbital lacks:** local Whisper-family models in 100+ languages; speaker
  recognition on-device; batch and YouTube transcription; VTT, DOCX, and HTML export;
  AI with your own key from a longer list of providers, including local models through
  Ollama and LM Studio; system-wide dictation.
- **Orbital has that it lacks:** a note library and editor; typed notes tied to audio;
  encrypted notes; a built-in AI tier that needs no key.
- **Sources:** [macwhisper.com](https://macwhisper.com/).

#### Evernote

A general note app with cloud transcription added.

- **Has that Orbital lacks:** every platform with sync; a web clipper; Slack and Teams
  integrations; 50+ transcript languages with speaker labels; document OCR search.
- **Orbital has that it lacks:** notes tied to audio time; local storage; a free tier beyond
  50 notes on one device; a one-time price; your own AI key; per-recording limits (Evernote's
  pages disagree between 60 minutes and 2 hours per recording).
- **Sources:** [evernote.com/compare-plans](https://evernote.com/compare-plans),
  [evernote.com/ai-transcribe](https://evernote.com/ai-transcribe). Paid prices are
  third-party figures.

#### Goodnotes

Handwriting-first, with audio replay and an on-device transcription model.

- **Has that Orbital lacks:** iPad, iPhone, Windows, Android, and web; handwriting with tap-
  to-replay; PDF annotation; an infinite canvas; collaboration.
- **Orbital has that it lacks:** AI without a separate $9.99-a-month pass; your own AI key;
  encrypted notes; system-audio capture; audio editing.
- **Unverified:** typed-text linking to audio; speaker labels; exact plan prices (Goodnotes'
  plan page could not be fetched).
- **Sources:** [goodnotes.com/features/audio-recording](https://www.goodnotes.com/features/audio-recording).

#### Notion AI Meeting Notes

Meeting capture inside the Notion desktop app, bot-free.

- **Has that Orbital lacks:** a full workspace around the notes; team sharing; calendar
  sync; retention controls, SSO, and SOC 2; Windows and web.
- **Orbital has that it lacks:** audio you can replay and timestamps into it; local storage
  and offline use; a one-time price; your own AI key; full use below the $20-per-member
  Business plan.
- **Sources:** [notion.com/product/ai-meeting-notes](https://www.notion.com/product/ai-meeting-notes),
  [notion.com/pricing](https://www.notion.com/pricing).

#### Fathom

The meeting-bot category, with the most generous free tier on this page.

- **Has that Orbital lacks:** unlimited free recordings and transcriptions of video calls; a
  bot that joins automatically; video; clips and playlists; CRM sync on team plans.
- **Orbital has that it lacks:** in-person and dictation use (Fathom is call-centric); typed
  notes tied to audio; local storage; encryption under your key; your own AI key.
- **Sources:** [fathom.ai/pricing](https://fathom.ai/pricing).

### Choosing

- You want to type during lectures or interviews and click back to the moment, on a Mac,
  with your data staying local: Orbital, or AudioNote 2 if you do not need AI.
- You want the same on an iPad with a pen: Notability or Goodnotes.
- You want the same on iPhone with sync and a lifetime price: Noted.
- You want meetings recorded automatically with summaries shared to a team: Otter, Fathom,
  Granola, or Notion, depending on which workspace you already live in.
- You want the best local transcription on a Mac and do not need a notes editor: MacWhisper.
- You want something free that is already installed: Apple Notes, if an Apple silicon Mac on
  macOS 15 or later and no typed-note timestamps are acceptable.

---

## 21. Glossary

- **Gutter timestamp.** The `0:00:09` stamp beside a paragraph, added automatically when
  you type while recording or playing. Click to seek.
- **TimeTag.** A named marker (`#Decision`) dropped at a moment with ⌘T. Shows as a pill in
  the note and a dot on the timeline.
- **Segment.** One recording or import. A note's segments play as a single timeline.
- **Session.** In the AI Notes tab, any note with a transcript.
- **On-device transcription.** Apple's Speech framework running on your Mac when possible,
  with Apple's servers as a fallback.
- **Scribe.** ElevenLabs' cloud transcription model, used for speaker labels and
  multilingual audio.
- **Orbital AI.** The built-in, no-keys AI on Premium, metered at 300 actions a month.
- **BYOK.** Bring your own key: using your own OpenAI, Claude, Groq, Gemini, or ElevenLabs
  API key on Pro.
- **Locked note.** A note encrypted on disk under your lock password.
- **Hidden notebook.** A notebook hidden in the app behind the same password, without
  encryption.
- **Bundle.** A `.orbitalnote` (one note) or `.orbital` (whole library) file for moving
  notes between Macs.
- **Session lock.** Forgetting the lock password until it is entered again: Note ▸ Lock
  Session, sleep, screen lock, or the idle timer.
