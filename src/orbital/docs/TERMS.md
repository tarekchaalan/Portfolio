<!-- Source: /Users/tarek/Developer/macos/orbital/docs/TERMS.md — re-sync by copying that file over this one -->
# Orbital Terms of Use (End User Licence Agreement)

**Effective date: September 28, 2026**

Orbital is made and sold by me, Tarek Chaalan, a sole developer. These terms are the deal
between you and me when you use Orbital. They're written to be read, not to intimidate —
if something is unclear, email [orbitaldevs@outlook.com](mailto:orbitaldevs@outlook.com)
(site: [tarekchaalan.com](https://tarekchaalan.com)).

## The deal in one paragraph

You get a personal licence to use Orbital. Your notes are yours, they live on your Mac,
and I claim no rights over them. You buy the paid plans on the Mac App Store, and Apple
handles the payment. Yearly Premium starts with a 3-day free trial, and it renews and
charges you unless you cancel at least 24 hours before the trial ends. Premium's built-in cloud features run
on my infrastructure and are metered, so they come with fair-use quotas, and I can switch
them off for a subscription that's being abused. AI features can get things wrong, so
check anything you rely on. The app is provided as-is, from one person — please read the
warranty section.

## This agreement, Apple, and your licence

- **This agreement is between you and me, not Apple.** I, not Apple, am solely
  responsible for Orbital and its content. Where anything here conflicts with Apple's
  Media Services Terms and Conditions, Apple's terms win.
- **Your licence.** I grant you a personal, non-transferable licence to use Orbital on any
  Apple devices that you own or control, as the Usage Rules in Apple's Media Services Terms
  allow. You may not rent, lease, lend, sell, or redistribute the app, or resell access to
  it.
- **Support is mine to give, not Apple's.** I provide any maintenance and support for
  Orbital (email below). Apple has no obligation to provide maintenance or support for it.
- **Apple can enforce these terms.** Apple and its subsidiaries are third-party
  beneficiaries of this agreement. Once you accept it, Apple has the right to enforce it
  against you as a third-party beneficiary, and is taken to have accepted that right.
- **Who to contact.** Questions, complaints, or claims about Orbital go to me: Tarek
  Chaalan, Kuwait City, Kuwait, [orbitaldevs@outlook.com](mailto:orbitaldevs@outlook.com),
  [tarekchaalan.com](https://tarekchaalan.com).

## Plans and what you're buying

- **Free** — no purchase. Unlimited notes and on-device transcription, with a monthly
  recording allowance.
- **Pro** — a **one-time purchase** on the Mac App Store for the current major version.
  Unlocks unlimited recording, cloud transcription and AI with your own API keys, and note
  locking. What Pro unlocks when you buy it stays unlocked. Features new in a future major
  version (e.g. Pro 2.0) may be a separate paid purchase.
- **Premium** — an **auto-renewing subscription** on the Mac App Store, billed monthly or
  yearly. The yearly plan starts with a **3-day free trial**; the monthly plan has no
  trial (see [Payments, subscriptions and refunds](#payments-subscriptions-and-refunds)).
  Everything in Pro plus the built-in, no-keys-needed cloud features: Orbital AI
  and built-in transcription, which run on my servers, and the AI features that can use
  Orbital AI (AI Notes, chat, and automatic processing). Whether those AI features run on
  my servers depends on your AI setup: with Orbital AI they do, and with your own
  provider key they go straight to that provider. Whatever runs on my servers stops when
  the subscription does. Premium doesn't require Pro. When a
  subscription ends, Orbital goes back to Pro if you also bought Pro, and to Free if you
  didn't.

Current prices and the full feature comparison are shown in Orbital (Settings ▸ Plans) and
on the App Store; the price the App Store shows at the point of sale is the price.

## Your purchases

- Purchases belong to the **Apple Account** signed in to the Mac App Store. They work on
  your Macs signed in to that account. Use **Restore Purchases** in Settings ▸ Plans if a
  Mac doesn't see one.
- Orbital's purchases aren't offered through **Family Sharing**. Built-in cloud features
  need a subscription bought with your own Apple Account.
- To prove Premium to Orbital's servers, the app shows them Apple's signed record of your
  purchase and gets back a short-lived session. That session is a credential for metered
  services: **don't extract, share, or resell it**, or the purchase record behind it. Everyone
  using it would draw on your one monthly allowance, and it looks exactly like abuse.

### When a subscription ends

Orbital learns from StoreKit on your Mac when a subscription renews, lapses, is refunded,
or is revoked. Apple doesn't notify my servers. Instead, when the app asks them for a
Premium session, they may check the subscription's current status with Apple's App Store
Server API. When Premium ends:

- **Your data is never held hostage.** Notes, recordings, and transcripts stay on your Mac
  and remain accessible, including notes you locked. The app keeps working on the plan
  your remaining purchases allow: Pro if you bought it, Free if you didn't.
- Everything backed by the Premium relays stops. A billing grace period keeps Premium
  running while Apple retries a failed payment.
- Renewing or resubscribing restores Premium as soon as the App Store confirms it.

### Disabling a subscription's cloud features

I can switch off the Premium relays for one subscription when it is refunded, shared or
resold, or used to abuse the service. I do that with a server-side blocklist. A disabled
subscription stops working for relay-backed features; the app and your local data are
unaffected. If built-in features stop working and you don't know why, email me —
mistakes get fixed.

## Premium quotas and fair use

Premium's built-in cloud features are metered **per subscription per UTC calendar month**,
with allowances that reset at the start of each month:

- **Built-in transcription:** currently **10 hours** of audio per month, with a per-file
  upload limit (currently 100 MB).
- **Orbital AI:** currently **300 AI actions** per month, with an additional overall token
  cap and per-request size limits.
- Both services apply short burst rate limits to keep the service healthy for everyone.

The yearly plan's **3-day free trial** has its own, smaller allowance for the whole trial
rather than a month's: currently **2 hours** of built-in transcription and **30 AI
actions**, with a smaller token cap. The per-file, per-request and burst limits above
apply too. The full monthly allowance starts when the paid subscription does.

Hitting a quota never locks you out of the app — your own API keys and on-device
transcription keep working. Allowance numbers may change; if they shrink meaningfully for
existing subscribers, I'll say so before it takes effect.

## Acceptable use

- Don't share, resell, or publish your relay sessions or the purchase records behind them.
- Don't abuse the relays: no modified clients that evade metering, no hammering the
  endpoints, no using the relays as a general-purpose API for anything other than Orbital.
- When you use Orbital you must also follow any third-party terms that apply, such as your
  agreements with the AI and transcription providers you bring your own key for, and your
  internet or network provider's. Content you send through cloud features must comply with
  the upstream providers' terms (ElevenLabs, Google, and any provider you bring your own
  key for).
- Don't use Orbital to break the law.

## Where you can use Orbital

You confirm that you are not located in a country subject to a U.S. Government embargo or
designated by the U.S. Government as a "terrorist supporting" country, and that you are
not on any U.S. Government list of prohibited or restricted parties. You may not use or
export Orbital in breach of U.S. export laws or the laws of the place you got it.

## Your content and your keys

Everything you create in Orbital is yours. I take no licence to it, and — as the
[privacy policy](PRIVACY.md) spells out — I never see it. If you bring your own API keys,
your relationship with those providers (billing included) is between you and them.

## AI features and AI-generated content

Orbital's AI features — summaries, suggested titles, key moments, action items, meeting
minutes, AI Notes, and chat answers — are written by AI models, not by me. They run on a
third-party provider: one you configured with your own key, or Orbital AI on Premium,
which uses Google's Gemini under my account. Orbital can also run them for you, for
example Premium's auto-summarize after a recording is transcribed.

- **AI output can be wrong.** It can be inaccurate or incomplete, leave out something
  important, attribute words to the wrong person, or state something that isn't in your
  notes at all. Transcripts and speaker labels can contain mistakes too.
- **I don't guarantee it.** I make no promise that AI output is accurate, complete, or fit
  for any purpose.
- **Check before you rely on it.** You're responsible for reviewing AI output before you
  use it, share it, or act on it. That matters most for medical, legal, financial, or other
  decisions where a mistake is costly. AI output is not professional advice.
- **It sits next to your own words.** AI output you keep becomes part of your notes, and
  you can edit or delete it like anything else you wrote. Treat it as a draft.
- **The provider's terms apply too.** Whoever runs the model handles the request under
  their own terms (see [Acceptable use](#acceptable-use) and the
  [privacy policy](PRIVACY.md)).

## Payments, subscriptions and refunds

- All purchases go through the Mac App Store and are also governed by Apple's Media
  Services Terms. Apple handles billing, renewal, and refunds. Payment is charged to your
  Apple Account when you confirm the purchase, or, with a free trial, when the trial ends.
- **Premium renews automatically** until you cancel. Monthly renews every month and yearly
  every year, at the price the App Store showed you. It renews unless you cancel at least
  24 hours before the end of the current period, and your Apple Account is charged for the
  renewal within the 24 hours before the period ends.
- **The 3-day free trial is for the yearly plan only.** The monthly plan has no trial. The
  trial gives you Premium free for 3 days. **If you don't cancel at least 24 hours before
  the trial ends, it turns into a paid yearly subscription**, and your Apple Account is
  charged the yearly price. Apple decides who is eligible: generally one trial per Apple
  Account, and not if you have already subscribed to Premium.
- **How to cancel:** in your Apple Account's subscription settings — the App Store app
  (your name ▸ Account Settings ▸ Subscriptions ▸ Manage), System Settings ▸ your name ▸
  Media & Purchases ▸ Subscriptions, or Settings ▸ Plans ▸ Manage Subscription in Orbital.
  Cancelling stops the next renewal. You keep Premium until the end of the period you've
  paid for, or until the end of the trial. Deleting the app doesn't cancel a subscription.
- **Refunds** are requested from Apple (reportaproblem.apple.com) and decided by Apple
  under its policy. A refunded purchase stops unlocking its features once Apple reports
  the refund.

## No warranty

Orbital is provided **"as is", without warranty of any kind**. I work hard on correctness
— especially around your data — but I'm one person, and I can't promise the app, the
relays, or the upstream providers will be uninterrupted or error-free, or that AI output
will be accurate (see [AI features and AI-generated content](#ai-features-and-ai-generated-content)).
Keep backups of anything you can't afford to lose (Orbital's local backups help, but they
live on the same disk).

Any warranty the law doesn't let me disclaim is mine alone, not Apple's. If Orbital fails
to meet such a warranty, you may notify Apple, and Apple will refund the purchase price
you paid for it. To the maximum extent the law allows, Apple has no other warranty
obligation for Orbital. Any other claims, losses, liabilities, damages, costs, or expenses
from a failure to meet a warranty are my responsibility, as limited by the next section.

## Limitation of liability

To the maximum extent the law allows, I'm not liable for indirect, incidental, or
consequential damages — lost profits, lost data, lost recordings — arising from your use
of Orbital. My total liability for any claim is capped at what you paid me for Orbital in
the twelve months before the claim. Some jurisdictions don't allow these limits, so parts
of this may not apply to you.

## Claims about Orbital

- **Product claims come to me, not Apple.** I, not Apple, am responsible for addressing
  any claim by you or anyone else about Orbital or your having or using it. That includes
  product liability claims, claims that Orbital fails to meet a legal or regulatory
  requirement, and claims under consumer protection, privacy, or similar laws. Nothing in
  these terms limits my liability to you further than the law allows.
- **Intellectual property claims come to me, not Apple.** If anyone claims that Orbital,
  or your having or using it, infringes their intellectual property rights, I, not Apple,
  am solely responsible for investigating, defending, settling, and discharging that
  claim.

## Changes to these terms

I may update these terms as the app evolves. The current version is always published here
(and on [tarekchaalan.com](https://tarekchaalan.com)) with its effective date, and
material changes get called out rather than slipped in. Continuing to use Orbital after a
change means you accept it.

## Governing law

These terms are governed by the laws of the State of Kuwait, without regard to
conflict-of-law rules.

---

Questions, or built-in features that stopped working:
[orbitaldevs@outlook.com](mailto:orbitaldevs@outlook.com). For refunds, see
[Payments, subscriptions and refunds](#payments-subscriptions-and-refunds).
