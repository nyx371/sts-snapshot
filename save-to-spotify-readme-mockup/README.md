<p align="center">
  <img src="./assets/hero-placeholder.png" alt="Save to Spotify hero placeholder: an agent turns articles, notes, meetings, and lessons into polished Spotify episodes" width="100%" />
</p>

<h1 align="center">Save to Spotify</h1>

<p align="center">
  <strong>The official Spotify skill for turning agent work into something you can listen to anywhere.</strong>
</p>

<p align="center">
  Create polished audio episodes from meetings, articles, research, study notes, briefings, and voice memos - then save them to Spotify with cover art, chapters, timeline images, links, and Spotify-native entity cards.
</p>

<p align="center">
  <a href="https://officialskills.sh/spotify/save-to-spotify"><strong>OfficialSkills</strong></a> ·
  <a href="https://clawhub.ai/spotify/save-to-spotify"><strong>ClawHub</strong></a> ·
  <a href="https://saveto.spotify.com/install.sh"><strong>Install</strong></a> ·
  <a href="#see-it-in-action"><strong>Demo</strong></a> ·
  <a href="#safety-and-consent"><strong>Safety</strong></a>
</p>

<p align="center">
  <img alt="Official Spotify Skill" src="https://img.shields.io/badge/Official-Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" />
  <img alt="Agent Skill" src="https://img.shields.io/badge/Agent%20Skill-SKILL.md-7C3AED?style=for-the-badge" />
  <img alt="OpenClaw" src="https://img.shields.io/badge/OpenClaw-ready-22D3EE?style=for-the-badge" />
</p>

---

## Why this exists

AI agents are great at summarizing, researching, scripting, and producing. But most useful work still lands in chat windows, Markdown files, or folders you forget to reopen.

**Save to Spotify turns that work into durable listening.**

Use it when you want to:

- turn a meeting recap into a private listening episode
- convert articles or research into a concise audio briefing
- create language-learning drills you can replay on a walk
- package release notes, incident reviews, or onboarding docs as audio
- generate rich Spotify episodes with chapters, cover art, source links, timeline images, and Spotify cards

> Placeholder artifact: `demo-agent-to-episode.gif` - 30 seconds showing a user asking an agent to turn research links into a Spotify episode.

---

## See it in action

| From | To |
| --- | --- |
| Meeting transcript | 8-minute recap episode with decisions, owners, and follow-ups |
| Research links | Briefing with chapters, source links, and timeline images |
| Vocabulary list | Spaced-repeat language lesson with pauses and review prompts |
| Product notes | Shareable audio update with cover art and show notes |

<p align="center">
  <img src="./assets/episode-card-placeholder.png" alt="Placeholder Spotify episode card with cover, title, chapters, and timeline companions" width="78%" />
</p>

```text
You: Turn these launch notes into a 6-minute Spotify episode.

Agent: I’ll produce:
- title: Launch Briefing - Save to Spotify
- format: 6-minute narrated episode
- timeline: chapters + source links + Spotify entity cards
- destination: Product Updates show

Say “go” and I’ll generate a preview before saving.
```

---

## Install

### OpenClaw / ClawHub

```bash
openclaw skills install @spotify/save-to-spotify
```

### Universal installer

```bash
curl -fsSL https://saveto.spotify.com/install.sh | bash
```

### Skills.sh

```bash
npx skills add spotify/save-to-spotify
```

After installing, authenticate once:

```bash
save-to-spotify auth login
save-to-spotify doctor
```

---

## First run: guided, not overwhelming

The skill is designed around **intent-first onboarding**. You should not need to understand Spotify APIs, episode metadata, audio formats, or timeline schemas to get a good result.

A good agent will ask only what matters:

1. **What are we making?** A briefing, recap, lesson, show episode, or raw media upload.
2. **What source material should it use?** Files, URLs, notes, transcript, or existing audio.
3. **Where should it go?** Existing show or new show.
4. **Before any write action:** preview the plan and ask for confirmation.

```text
Agent: I can use sensible defaults. I only need three choices:
1. Should this be a briefing, recap, or lesson?
2. About how long should it be?
3. Save to an existing show or create a new one?
```

---

## What Save to Spotify produces

Save to Spotify can save raw audio, but it shines when agents produce **rich listening artifacts**.

### Episode package

- MP3/M4A/WAV/OGG upload
- title, summary, language, cover image
- show creation or show selection
- readiness polling and validation

### Rich timeline

- chapters
- in-player images
- source links
- Spotify entity cards for tracks, albums, artists, shows, episodes, playlists, or audiobooks
- timestamped HTML show notes

```jsonc
{
  "items": [
    { "type": "chapter", "start_ms": 0, "title": "What changed" },
    { "type": "image", "start_ms": 12000, "file": "launch-map.jpg" },
    { "type": "link", "start_ms": 26000, "url": "https://example.com/source" },
    { "type": "spotify_entity", "start_ms": 42000, "uri": "spotify:playlist:..." }
  ]
}
```

> Placeholder artifact: `timeline-preview.png` - a visual strip showing chapters, images, links, and Spotify cards over time.

---

## Safety and consent

This is an official Spotify skill, so trust is part of the product.

**Read actions are lightweight. Write actions require clarity.**

The skill should preview and ask before it:

- creates or edits shows
- uploads episodes
- changes timeline metadata
- changes library or playlist state
- publishes, shares, or modifies anything externally

It should clearly explain:

- OAuth scopes requested
- which Spotify account is active
- whether the action is read-only or mutating
- what will be created or changed
- how to undo or clean up where possible

```bash
save-to-spotify doctor
save-to-spotify auth status
save-to-spotify --json timeline validate --from-file timeline.json
```

---

## Example workflows

### Turn a meeting into a commute-ready recap

```text
Save this transcript to Spotify as a concise 7-minute recap.
Highlight decisions, owners, and open questions.
Put it in my “Work Recaps” show.
```

### Turn research into an audio briefing

```text
Make a 10-minute briefing from these links.
Use a calm editorial voice, include source links in the timeline, and create a cover image.
```

### Turn study notes into a language lesson

```text
Create a Swedish practice episode from this vocabulary list.
Use call-and-response pacing with pauses after each prompt.
```

### Save existing audio

```bash
save-to-spotify upload ./lecture.mp3 \
  --title "Lecture 12 - Distributed Systems" \
  --new-show "CS Study Notes"
```

---

## For agent builders

Save to Spotify is not just a CLI. It is a reusable agent capability.

The skill is designed around durable principles:

- **Intent over commands** - route by what the user wants, not by API surface.
- **Progressive disclosure** - simple path first, advanced controls only when needed.
- **Consent before mutation** - preview before writing to Spotify.
- **Observable outputs** - return links, validation results, and readiness state.
- **Graceful recovery** - handle auth, rate limits, unavailable media, and partial failures clearly.
- **Composable workflows** - new Spotify surfaces can plug into the same onboarding model.

---

## CLI reference

```bash
save-to-spotify auth login
save-to-spotify auth status
save-to-spotify doctor

save-to-spotify upload ./episode.mp3 --title "Morning Briefing"
save-to-spotify shows create --title "Daily Briefings"
save-to-spotify episodes --show-id spotify:show:...
save-to-spotify timeline validate --from-file timeline.json
save-to-spotify timeline set --episode-id spotify:episode:... --from-file timeline.json
```

---

## Placeholder launch assets

Use these while preparing the final repo:

- `assets/hero-placeholder.png` - hero showing “agent work → Spotify episode”
- `assets/demo-agent-to-episode.gif` - install + prompt + preview + Spotify result
- `assets/episode-card-placeholder.png` - final Spotify episode card
- `assets/timeline-preview.png` - chapters/images/links/entity cards strip
- `assets/oauth-scope-preview.png` - readable permission/consent explanation
- `assets/workflow-gallery.png` - meeting recap, research briefing, language lesson, raw upload

---

## Status

This README is a positioning mockup. Replace placeholder assets with official screenshots and final install/listing URLs before launch.

