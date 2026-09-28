// Hand-written content for the static Orbital Notes landing and support
// pages. Feature and support wording follows src/orbital/docs/USER-GUIDE.md.

export const TAGLINE =
  "An audio-first notebook for Mac: everything you type while recording is tied to the moment it was said.";

// Future link: once the app is live, point the "Coming soon on the Mac App
// Store" badge at https://apps.apple.com/app/id6816387450
export const landingContent = `<section class="hero">
  <h1><span class="accent">Orbital</span> Notes</h1>
  <p class="lede">${TAGLINE}</p>
  <p class="badge">Coming soon on the Mac App Store</p>
</section>
<ul class="features">
  <li class="feature">
    <h2>On-device transcription</h2>
    <p>Recordings are transcribed on your Mac when possible, on every plan.</p>
  </li>
  <li class="feature">
    <h2>AI summaries and chat</h2>
    <p>Summarize a note, pull out key moments, and ask questions about it.</p>
  </li>
  <li class="feature">
    <h2>Locked notes</h2>
    <p>Lock a note with a password and it is encrypted on disk.</p>
  </li>
  <li class="feature">
    <h2>Optional iCloud sync</h2>
    <p>Off until you turn it on, and it syncs through your own iCloud account.</p>
  </li>
</ul>
<p class="landing-more">New to Orbital Notes? Read the <a href="/orbital/guide">User Guide</a> or visit <a href="/orbital/support">Support</a>.</p>`;

export const supportContent = `<h1>Orbital Notes Support</h1>
<p class="lede">Questions, problems, or feedback about Orbital Notes? Here is how to get help.</p>

<h2 id="contact">Contact</h2>
<p>Email <a href="mailto:orbitaldevs@outlook.com">orbitaldevs@outlook.com</a>.</p>

<h2 id="report-a-problem">Report a problem from the app</h2>
<p>In Orbital Notes, choose <strong>Help ▸ Report a Problem…</strong>. It drafts an email with the app and macOS versions and the last few diagnostic labels, and you read it before it is sent.</p>

<h2 id="restore-purchases">Restore purchases</h2>
<p>Open <strong>Settings ▸ Plans ▸ Restore Purchases</strong>. It brings back what the Apple Account signed in to the App Store has bought, on a new Mac or after reinstalling.</p>

<h2 id="manage-or-cancel-a-subscription">Manage or cancel a subscription</h2>
<p>Subscriptions are managed by Apple. Manage or cancel yours at <a href="https://apps.apple.com/account/subscriptions">apps.apple.com/account/subscriptions</a>, or from the app with <strong>Settings ▸ Plans ▸ Manage Subscription</strong>.</p>

<h2 id="refunds">Refunds</h2>
<p>Refunds are handled by Apple. Request one at <a href="https://reportaproblem.apple.com">reportaproblem.apple.com</a>.</p>

<h2 id="user-guide">User Guide</h2>
<p>The <a href="/orbital/guide">Orbital Notes User Guide</a> covers recording, transcription, the AI assistant, locking, iCloud sync, plans, and troubleshooting.</p>`;
