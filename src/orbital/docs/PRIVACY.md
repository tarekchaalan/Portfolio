<!-- Source: /Users/tarek/Developer/macos/orbital/docs/PRIVACY.md — re-sync by copying that file over this one -->
# Orbital Privacy Policy

**Effective date: September 28, 2026**

Orbital is made by me, Tarek Chaalan — a sole developer, not a company with a data team.
This policy describes what the app actually does, in the same terms the code does. If
anything here is unclear, email me: [orbitaldevs@outlook.com](mailto:orbitaldevs@outlook.com)
(site: [tarekchaalan.com](https://tarekchaalan.com)).

## The short version

- Your notes, recordings, and transcripts live **on your Mac**, as local files. There is no
  Orbital account and no Orbital server that holds your content. If you turn on **iCloud
  sync**, a copy of your library goes to **your own iCloud account**. Apple stores it, and
  I can't read it. Your recordings and your locked notes stay on your Mac (see
  [iCloud sync](#icloud-sync-optional-off-by-default)).
- **Orbital sends nothing to an AI or transcription service on its own initiative.** Each
  of those requests comes from something you do, or from a setting you chose: transcribing
  with a cloud engine, running an AI action, Premium's automatic summaries, or opening the
  Settings panes that show your plan and usage. Apple's own services talk to Apple as
  usual: the App Store checks prices and your purchases, and iCloud syncs if you turned it
  on.
- **You buy Orbital through the Mac App Store.** Apple handles your payment. I never see
  your name, email address, Apple Account, or card.
- Orbital has **no analytics, no telemetry, no crash reporting, no ads, and no third-party
  SDKs**. I cannot see how you use the app.
- I **never sell your data** and **never use it to train AI models**, and I don't give
  anyone else permission to do so on my behalf.

## What lives on your Mac

Everything, unless you explicitly send it somewhere:

- **Notes, audio, transcripts, attachments** — files under
  `~/Library/Containers/com.orbital.mac/Data/Library/Application Support/Orbital/` (the app's
  sandbox container).
- **Backups** — the app snapshots your notes' JSON metadata locally (the latest 15
  snapshots are kept). Backups never leave the machine.
- **AI chats** — conversations with the assistant are stored locally alongside your notes.
  Chats about a locked note are deliberately never written to disk.
- **A diagnostics log** — a small local file (`~/Library/Containers/com.orbital.mac/Data/Library/Logs/Orbital/diagnostics.log`) that records labels like
  "transcription failed" for troubleshooting. It deliberately contains **no note content,
  no transcripts, and no keys**, and it is never uploaded. It only goes anywhere if you
  choose to send it to me: Help ▸ Report a Problem… drafts an email in your mail app with
  the app version, macOS version, and the last few of those labels — you read exactly
  what it says before deciding to send it.
- **Settings and usage meters** — preferences, local counters like the Free plan's
  recording minutes, and the last plan the App Store reported. That last one is only a
  display hint, so Settings doesn't flash "Free" during the moment StoreKit takes to answer
  at launch. It never unlocks anything and is never sent anywhere. The purchase records
  themselves are kept by macOS's App Store framework (StoreKit), not by Orbital.

**The Keychain** holds your secrets: any AI or ElevenLabs API keys you enter, the verifier
for your note-lock password, and a count of recent wrong lock passwords (used to slow down
guessing). Keys are sent only to the provider they belong to and are never written to
plain files. Nothing in Orbital's Keychain items syncs through iCloud.

**System audio, if you turn it on, stays on your Mac like every other recording.** Orbital has
an opt-in **Capture System Audio** setting that records what your Mac is playing — on a call,
that is the other participants — and mixes it into the recording alongside your microphone.
Turning it on makes macOS ask for the **Screen & System Audio Recording** permission, because
that is the bucket Apple gates this behind. Two things are worth being plain about:

- **Orbital takes audio, not pictures.** The system framework requires a video stream to
  exist, so Orbital asks for the smallest one it allows (2×2 pixels, one frame a second) and
  never reads a single frame. Your screen is not captured, recorded, or sent anywhere.
- **The captured audio is local.** It is written into the same audio files as the rest of the
  recording, under `~/Library/Containers/com.orbital.mac/Data/Library/Application Support/Orbital/`. It is never uploaded on its own.
  If you later run cloud transcription on that recording, it travels the same disclosed path
  as any other audio — described below — and not before.

Recording other people may require their consent where you live. Orbital doesn't and can't
make that judgement for you.

**Note locking is encryption; notebook locking is not.** A locked *note* has its content,
transcript, time tags, recordings and attachments encrypted on disk with AES-GCM, using a
key derived from your lock password (its title is not). While you have unlocked the session,
the decrypted recordings sit in a hidden folder inside the library and are removed again
when it locks. A locked *notebook* is only
hidden in the app — the app's own UI says the same — so the notes inside stay unencrypted
on disk. To protect content at rest, lock the individual notes.

## iCloud sync (optional, off by default)

If you turn on **Settings ▸ iCloud ▸ Sync this library with iCloud**, Orbital keeps your
library in step across the Macs signed in to your Apple ID by storing a copy in **your own
iCloud account** (Apple's CloudKit private database). What is copied: your notes' text and
titles, notebooks and folders, transcripts, TimeTags and speaker names, attachments up to
1 MiB (1,048,576 bytes), AI chats and AI Notes documents, and your recordings' details
(length, file name, date, file size, and a SHA-256 fingerprint of the audio file).

The recordings themselves are not copied in this version. Nor is the content of an
attachment over 1 MiB, though its file name, size and SHA-256 fingerprint are. A
fingerprint can't be turned back into the file. It only lets someone who already has a
file confirm it's the same one. Each synced note also carries the name of the Mac that
saved it. The library's own record carries the name of the Mac that set the library up
in iCloud, and every record carries the Orbital version that wrote it.

**How iCloud protects it.** Apple stores this data under its own iCloud terms and encrypts
it in transit and on its servers. That is not end-to-end encryption: Apple holds the keys
for most of it, so Apple could technically access it. Turning on Apple's **Advanced Data
Protection** does not change that for most of Orbital's synced data. Advanced Data
Protection end-to-end encrypts only the parts of an app's iCloud data that the app stores
as files ("assets") or marks as encrypted, and Orbital doesn't mark any of its data that
way. With Advanced Data Protection on, what is end-to-end encrypted is attachment files
(up to 1 MiB) and any note text, transcript, AI chat or AI Notes document too large to
store inline. Everything else keeps Apple's standard protection with or without Advanced
Data Protection: titles, most note text and transcripts, names, dates, fingerprints, the
Mac names, and the hardware-UUID hash described below. The notes that need the most protection are the ones you lock, and those
never go to iCloud at all (below).

Orbital has no server in this path and cannot read, access or delete your iCloud data.
The relays never see it.

**Not synced:** your API keys, your lock password, and your preferences stay on each Mac.

**Locked notes never go to iCloud.** Neither do AI chats or AI Notes about a locked note.
Your other devices see only that a locked note exists: its title, its notebook and
folder, when it was locked, and which Mac holds it. A locked note has no copy anywhere but
the Mac that locked it. If that Mac is lost, the note is lost with it unless you have
exported a bundle.

**A one-way hash of this Mac's hardware UUID is stored in your iCloud.** To detect when
two Macs accidentally share the same sync identity (for example, after using Migration
Assistant), Orbital stores in your private iCloud database a SHA-256 hash of this Mac's
hardware UUID combined with a random per-device sync id. The hardware UUID itself is never
stored or transmitted — only this one-way hash, which cannot be reversed to recover the
UUID. Apple, which operates iCloud, can read this hash; Orbital's own servers never receive
it. Someone who already knows a specific Mac's hardware UUID and has access to your private
iCloud data could use the hash to confirm that it came from that Mac, but could not
discover the UUID from the hash alone. It is removed with the rest of Orbital's iCloud data
(below).

You can turn sync off at any time. **Turn Off** keeps everything on your Mac; **Turn Off and
Remove from iCloud** also deletes Orbital's data from your iCloud account. You can also
remove it in System Settings ▸ your name ▸ iCloud ▸ Manage Storage. Orbital never uploads
one iCloud account's library into another account without you turning sync on there.

## What runs on your Mac, whatever your plan

On every plan, Free included, these happen **on your Mac** and send nothing to me:

- **Recording** from your microphone and, if you turn it on, system audio.
- **Transcription with the Apple engine** (the default), **live transcription and
  dictation.** They use macOS's speech recognizer on-device whenever your language
  supports it. When it doesn't, or on-device recognition fails, macOS falls back to
  Apple's servers (see [When audio leaves your Mac](#when-audio-leaves-your-mac)).
- **Reading your attachments for the AI**: text from documents and PDFs, and text
  recognized in images (on-device, with Apple's Vision framework). This text stays on
  your Mac unless you run an AI feature.
- **Search, editing, audio cleanup, export and import, backups, and note-lock
  encryption.**

Orbital has **no on-device AI model.** Every AI feature uses a cloud model, and there are
two ways to reach one:

- **Your own API key (Pro and up).** The request goes **directly from your Mac** to the
  provider you chose, under your own account. None of my servers is involved.
- **Orbital AI and built-in transcription (Premium).** These are the only features that
  send your content to my servers: two small **relays**, described
  [below](#what-the-relays-receive-keep-and-log). Apart from them, Orbital contacts a
  relay only to show it your purchase when you open a Settings pane that shows your plan
  or usage. That includes **Settings ▸ Plans** for Pro owners. No note text or audio is
  sent then.

With the cloud engine selected, Orbital tries each option in turn until one works:
Premium's relay (on Premium), then your own ElevenLabs key if you entered one, then the
Apple engine. The Apple engine works on your Mac when it can, but it can itself fall back
to Apple's servers (see [When audio leaves your Mac](#when-audio-leaves-your-mac)). That
last step is skipped when you picked the cloud engine specifically for that one
recording, so you see the cloud error instead.

## When audio leaves your Mac

Audio is never uploaded for storage or sync. Once you choose a cloud engine, new
recordings are transcribed with it automatically while **Auto-transcribe** is on (the
default). Otherwise audio leaves the machine only in these cases, each one a choice you
make:

- **Cloud transcription with your own key (Pro).** If you pick the ElevenLabs engine and
  have entered your own ElevenLabs key, the audio file is sent directly to ElevenLabs for
  transcription under your own account.
- **Built-in cloud transcription (Premium).** If you pick the cloud engine on Premium, the
  audio is sent to Orbital's transcription relay (a Cloudflare Worker), which streams it
  straight through to ElevenLabs under Orbital's account and returns the transcript. The
  relay picks every ElevenLabs setting itself, and none of your identifiers go to
  ElevenLabs. It does not buffer or store your audio, and it never logs it. If the relay
  can't help (an outage, or this month's allowance is used up), Orbital tries your own
  ElevenLabs key if you have one, then the Apple engine, which may itself use Apple's
  servers (next bullet).
- **The Apple engine.** On-device (Apple) transcription, live transcription, and dictation
  run locally when on-device recognition is available for your language. When it isn't
  available or fails, macOS's speech recognition falls back to **Apple's servers** — that
  is Apple's machinery, covered by the Speech Recognition permission you grant macOS and
  by Apple's own privacy policy. If you never grant that permission and never pick a cloud
  engine, audio never leaves the machine.

## When note text leaves your Mac

Only when you run an AI feature (Summarize, Key Moments, Action Items, Suggest Title,
Meeting Minutes, AI Notes, or chat). There is one automatic case: on Premium,
**Auto-summarize recordings when transcription finishes** (Settings ▸ AI ▸ Automation, on
by default) summarizes the note you're viewing once its transcript lands.

What is sent: the note's title, its text, its attachments' names and the text Orbital
extracted from them, its timestamped transcript (with speaker labels), any notes you
@-mentioned into the chat, and brief context from your earlier chats about the same note.
The attachment files themselves are never sent, only their names and extracted text.
Where it goes:

- **Your own provider (Pro and up).** The request goes directly to the provider you
  configured with your own API key — OpenAI, Anthropic (Claude), Groq, or Google (Gemini)
  — under your own account and their terms.
- **Orbital AI (Premium).** The request goes to Orbital's AI relay (a Cloudflare Worker).
  The relay forwards only the message text to its configured upstream model, currently
  Google's Gemini API under Orbital's account. It strips everything else from the
  request, picks the model itself, and sends none of your identifiers to Google.

**Fallback:** by default, if your chosen provider fails, Orbital retries with the other
providers you have keys for (and, on Premium, the relay). That means note text can reach a
configured provider you didn't pick for that request. Set **Settings ▸ AI ▸ Fallback** to
*Off* and requests go only to the provider you selected. One exception, on Premium: if
the provider you selected has no API key entered, Orbital can't use it, so requests go to
Orbital AI instead, even with Fallback off.

## What the relays receive, keep, and log

The two Premium relays (one for transcription, one for Orbital AI) are the only
Orbital-operated servers. Both are Cloudflare Workers.

**Showing the relay your purchase.** A relay needs to know that a request comes from a
paying subscriber. Before the first built-in request, Orbital sends the relay the signed
purchase record that the App Store keeps on your Mac, known as a JWS. For a subscription it
also sends Apple's signed renewal information, plus the app version and "macos". Apple
decides what those records contain: the product, purchase and expiry dates, Apple's
transaction identifiers, the App Store country, the price and currency, and whether the
purchase was refunded or is in a billing grace period. They also carry a
device-verification value that Apple computes for the Mac the record was issued to. The
relays ignore it and never store it. The records contain **no name, email address, Apple
Account, or payment details.**

The relay checks Apple's signature on the record against Apple's root certificate,
without any network call. Then it checks the product, expiry, refunds and Family Sharing.
For a subscription it may also ask Apple's App Store Server API whether the subscription
is still active. That call sends Apple the subscription's original transaction id, which
Apple issued in the first place. If everything checks out, the relay returns a **session
token**. The token expires within 24 hours, or when your subscription does if that comes
sooner.

The token carries only a pseudonymous subscription identifier, your plan, whether it is a
real or test (Sandbox) purchase, an "admin" flag that is set only for my own test
purchases, and when it was issued and expires. Orbital keeps the token in memory and
never writes it to disk. The relays keep no copy: they check its signature instead.

This exchange happens when you use a built-in Premium feature, or open a Settings pane that
shows your plan or usage. If you own Pro, opening **Settings ▸ Plans** shows the AI relay
your Pro purchase record in the same way, but a Pro session can't use any metered feature.

**The pseudonymous identifier** is a one-way hash of Apple's original transaction id for
your purchase (SHA-256, cut to 24 hex characters). It is the same every time for the same
purchase, which is what lets the relay count your monthly allowance. It isn't your name or
your Apple Account, and the relays never store the transaction id itself.

**What they keep**, all filed under that identifier:

- **Usage totals.** That means seconds transcribed, AI actions, and AI tokens for the
  month, plus the latest per-minute counter used for rate limiting and a note of any
  request still in progress. Nothing deletes these on a schedule. When a new month starts,
  the old month's totals are replaced only when that subscription makes its next request.
  So if you stop using the built-in features, or your subscription lapses, your last
  totals and counters stay on the relay **indefinitely**, until I delete them (see
  [Your rights and contact](#your-rights-and-contact)).
- **Apple's last answer about your subscription**, meaning whether it was active and when
  the relay asked. It is kept for up to 6 hours, or 5 minutes if Apple didn't answer.
- **A blocklist entry**, only if I disable a subscription (see the
  [Terms](TERMS.md)). My own test purchases also carry an "admin" entry.

Nothing else. **No purchase records, no session tokens, no transaction ids in the clear,
and no audio, transcripts, or note text is ever stored** by the relays. Your audio and
message text pass straight through to ElevenLabs and Google, as described above.

**What they log:** the pseudonymous identifier, each decision (session issued or refused,
with plan, test-or-real, and expiry), usage lines (seconds metered, action and token
counts), and errors. Error lines hold status codes and error messages: a network error's
text, up to 300 characters of the AI provider's reply when it reports a missing model, or
the message and stack trace of an unexpected failure inside the relay. No log line
includes the purchase record, the token, the transaction id in the clear, the text or
audio you sent, or Apple's replies. The relays are configured with Cloudflare's automatic
per-request logs switched off, so only these lines are logged. Cloudflare's Workers Logs
is switched on for both relays, and Cloudflare stores these lines for up to 7 days, then
deletes them.

**Cloudflare**, which hosts the relays, handles your connection like any Cloudflare-hosted
service. It sees your IP address to deliver the traffic. It may also apply per-IP
protections at its edge, such as a rate-limiting rule; those are set in my Cloudflare
account, not in the relay code. The relay code itself never reads or records your IP
address or anything derived from it, such as your location.

## Buying Orbital through the App Store

Orbital is sold only on the Mac App Store, through Apple's StoreKit. **Pro** is a one-time
purchase. **Premium** is an auto-renewing subscription, billed monthly or yearly.

**What Orbital knows about your purchase.** On your Mac, Orbital asks StoreKit which of its
products your Apple Account is currently entitled to (`Transaction.currentEntitlements`).
Apple answers with its signed transaction records: which product, when it was bought, when
a subscription renews or expires, and whether it's in a billing grace period or was
refunded. Orbital uses them only to unlock the features you paid for, to word your plan's
status in Settings, and to show a relay your subscription (above). Restore Purchases asks
the App Store to re-sync your purchases, and it runs only when you click it.

**What Orbital doesn't know.** Apple handles the whole payment: your name, email address,
Apple Account, payment method and billing address. None of it reaches the app, the relays,
or me. Purchases are tied to the Apple Account signed in to the App Store. Family Sharing
isn't offered for Orbital's purchases. Refunds and subscription management go through
Apple.

## Third parties

| Who | When they see anything | What they see |
|---|---|---|
| **ElevenLabs** | Cloud transcription (your key, or via the Premium relay) | The audio you transcribe |
| **Google (Gemini)** | Premium "Orbital AI", or as a provider you configure | Note text sent to AI |
| **OpenAI / Anthropic / Groq** | Only if you configure them with your own key | Note text sent to AI |
| **Apple** | App Store purchases (and the relays' subscription checks); speech-server fallback; iCloud sync, if you turn it on | Purchase records; audio (speech fallback); your synced library (iCloud) |
| **Cloudflare** | All Premium relay traffic (infrastructure) | Relay requests in transit, your IP address |

Each processes data under its own privacy policy. For AI and transcription providers,
their API terms govern their retention and use of what is sent; none of them receives
anything unless you use the corresponding feature.

## Retention

- **On your Mac:** everything is yours; delete notes, backups, keys, or the whole app
  folder whenever you like, and it's gone.
- **In your iCloud (if you turned sync on):** until you remove it with **Turn Off and
  Remove from iCloud**, or in System Settings ▸ your name ▸ iCloud ▸ Manage Storage.
- **On the relays:** per-subscription usage totals and rate-limit counters, kept
  **indefinitely**. A new month's first request replaces the old month's totals, but
  nothing deletes them for a subscription that stops being used, until you ask me to.
  Also Apple's last subscription status (up to 6 hours), blocklist entries for disabled
  subscriptions, and operational logs (at most 7 days). There is no content to retain.
- **Upstream providers:** ElevenLabs, Google, and any provider you configure retain data
  per their own policies, not mine.

## Your rights and contact

Since your content never reaches me, most requests (access, export, deletion) are things
you can do directly on your own Mac, and in your own iCloud account for synced data. The
relays hold only usage totals under a subscription's pseudonymous identifier. Email me and
I'll work out with you which subscription is yours (for example, from the order ID on
Apple's receipt), then delete or disclose what the relays hold for it. For anything else:
[orbitaldevs@outlook.com](mailto:orbitaldevs@outlook.com).

## Changes

If this policy changes, the new version is published here (and on
[tarekchaalan.com](https://tarekchaalan.com)) with an updated effective date. I won't
quietly weaken it — material changes get called out.
