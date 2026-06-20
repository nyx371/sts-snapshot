<h1 align="center">Save to Spotify</h1>

<p align="center">
  <strong>The official Spotify skill for turning agent-made audio into Spotify episodes.</strong>
</p>

<p align="center">
  Give your agent a listening job. It asks only what matters, prepares the episode, previews the plan, and saves it to Spotify.
</p>

<p align="center">
  <a href="https://officialskills.sh/spotify/save-to-spotify"><strong>OfficialSkills</strong></a> ·
  <a href="https://clawhub.ai/spotify/save-to-spotify"><strong>ClawHub</strong></a> ·
  <a href="#install"><strong>Install</strong></a> ·
  <a href="#capabilities"><strong>Capabilities</strong></a>
</p>

<p align="center">
  <img alt="Official Spotify Skill" src="https://img.shields.io/badge/Official-Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white" />
  <img alt="Agent Skill" src="https://img.shields.io/badge/Agent%20Skill-SKILL.md-7C3AED?style=for-the-badge" />
</p>

## Install

Prompt your agent to install:

```text
> Install Save to Spotify by running https://saveto.spotify.com/install.sh
```

That is the happy path. Your agent can install the tool, check setup, and guide you through Spotify login.

<details>
<summary>Prefer installing manually?</summary>

```bash
curl -fsSL https://saveto.spotify.com/install.sh | bash
save-to-spotify auth login
save-to-spotify doctor
```

</details>

## Quick start

Tell your agent what you want to listen to:

```text
Turn [placeholder source] into a [placeholder length] Spotify episode.
Use [placeholder tone].
Save it to [placeholder show].
Preview before uploading.
```

Good sources can be files, links, notes, transcripts, or existing audio.

<p align="center">
  <img src="./assets/workflow-gallery.svg" alt="Placeholder workflow gallery" width="100%" />
</p>

## Capabilities

Save to Spotify helps your agent:

- understand the listening goal
- ask only the choices that change the result
- accept existing audio or produce new audio
- create show and episode metadata
- attach cover art
- add chapters, timeline images, source links, and Spotify cards
- preview before upload
- save to Spotify
- check that the episode is ready

<p align="center">
  <img src="./assets/episode-card-placeholder.svg" alt="Placeholder Spotify episode preview" width="78%" />
</p>

## Safety and consent

The skill should make Spotify actions easy to approve:

- show the active Spotify account
- explain requested OAuth scopes
- separate read-only checks from write actions
- preview before creating or changing anything
- validate the result after upload

<p align="center">
  <img src="./assets/oauth-scope-preview.svg" alt="Placeholder OAuth and consent preview" width="100%" />
</p>

## For agent builders

Keep the experience friendly:

- lead with user intent, not CLI flags
- use sensible defaults
- ask fewer, better questions
- preview before mutation
- return links and readiness status
- recover clearly from auth, rate limits, or partial failures

<details>
<summary>CLI reference for agents</summary>

```bash
save-to-spotify auth status
save-to-spotify doctor
save-to-spotify upload ./episode.mp3 --title "[placeholder title]"
save-to-spotify --json timeline validate --from-file timeline.json
```

Other install paths:

```bash
openclaw skills install @spotify/save-to-spotify
npx skills add spotify/save-to-spotify
```

</details>

## Placeholder assets

Replace these before launch:

- `assets/workflow-gallery.svg`
- `assets/episode-card-placeholder.svg`
- `assets/timeline-preview.svg`
- `assets/oauth-scope-preview.svg`
