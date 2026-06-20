# Media-generation agent skills review

## Classified list of media-generation skills

### Podcast / spoken audio
- Microsoft podcast-generation — https://officialskills.sh/microsoft/skills/podcast-generation
  - Generates podcast-style spoken audio from text using Azure OpenAI Realtime API.
  - Good for: narrated summaries, podcast episodes from scripts, product/audio previews.
- OpenAI speech — https://officialskills.sh/openai/skills/speech
  - Generates spoken audio from text using OpenAI Audio API.
  - Good for: narration, voiceover clips, accessibility reads, batch IVR/audio prompts.
- Venice audio speech — https://github.com/veniceai/skills/blob/main/skills/venice-audio-speech/SKILL.md
  - TTS models, voices, output formats, streaming.
- fal.ai audio — https://officialskills.sh/fal-ai-community/skills/fal-audio
  - Text-to-speech and speech-to-text via fal.ai audio models.

### Music / audio generation
- Venice audio music — https://github.com/veniceai/skills/blob/main/skills/venice-audio-music/SKILL.md
  - Music generation queueing/retrieval/completion endpoints.

### Video generation
- OpenAI Sora — https://officialskills.sh/openai/skills/sora
  - Generates, edits, extends, queues, and downloads Sora video jobs.
- fal.ai generate — https://officialskills.sh/fal-ai-community/skills/fal-generate
  - Text-to-image, image-to-video, text-to-video workflows.
- fal.ai video edit — https://officialskills.sh/fal-ai-community/skills/fal-video-edit
  - AI video editing: remix, upscale, remove background, add audio.
- fal.ai lip sync — https://officialskills.sh/fal-ai-community/skills/fal-lip-sync
  - Talking-head and lip-sync video creation.
- Venice video — https://github.com/veniceai/skills/blob/main/skills/venice-video/SKILL.md
  - Video generation and transcription workflows.
- Remotion — https://officialskills.sh/remotion-dev/skills/remotion
  - Programmatic video creation with React; best for explainer videos, data-driven videos, captioned/narrated clips.
- Google Labs Remotion — https://officialskills.sh/google-labs-code/skills/remotion
  - Generates walkthrough videos from Stitch app screens/designs.

### Image generation / editing
- OpenAI imagegen — https://officialskills.sh/openai/skills/imagegen
  - Generates/edits images, product shots, textures, UI mockups, cutouts.
- fal.ai generate — https://officialskills.sh/fal-ai-community/skills/fal-generate
  - Image generation and image-to-video.
- fal.ai image edit — https://officialskills.sh/fal-ai-community/skills/fal-image-edit
  - Style transfer, object removal, edits.
- fal.ai restore/upscale/realtime/train — officialskills fal.ai collection
  - Image restoration, enhancement, realtime generation, LoRA training.
- Venice image generate — https://github.com/veniceai/skills/blob/main/skills/venice-image-generate/SKILL.md
  - Image generation and styles.
- Venice image edit — https://github.com/veniceai/skills/blob/main/skills/venice-image-edit/SKILL.md
  - Editing, upscaling, background removal.

### Generative art / GIFs / visual artifacts
- Anthropic algorithmic-art — https://officialskills.sh/anthropics/skills/algorithmic-art
  - Generates p5.js generative art with seeded randomness and controls.
- Anthropic canvas-design — https://officialskills.sh/anthropics/skills/canvas-design
  - Visual art in PNG/PDF formats.
- Anthropic slack-gif-creator — https://officialskills.sh/anthropics/skills/slack-gif-creator
  - Generates optimized animated GIFs for Slack emoji/attachments.

### Presentations / document media
- OpenAI slides — https://officialskills.sh/openai/skills/slides
  - Generates/edits .pptx decks with layout helpers and previews.
- Anthropic pptx — https://officialskills.sh/anthropics/skills/pptx
  - Creates/edits/analyzes PowerPoint presentations.
- Anthropic docx/pdf/xlsx — https://github.com/anthropics/skills
  - Creates/edits Word, PDF, and Excel files.
- Google Workspace slides — https://officialskills.sh/googleworkspace/skills/gws-slides
  - Read/write Google Slides presentations.

### 3D / model generation
- fal.ai 3D — https://officialskills.sh/fal-ai-community/skills/fal-3d
  - Generates 3D models from text or images.

## Skills with strong first-use onboarding patterns

These are useful to study because they explain setup, when to use the skill, and the first prompt shape clearly.

1. Microsoft podcast-generation
   - Strength: very clear use cases for a first-time podcast/audio user.
   - Onboarding pattern to copy: “What content should be narrated, target audience, voice/style, episode length, output format?”

2. OpenAI speech
   - Strength: separates single clip vs batch jobs, voice/tone/pacing controls.
   - Onboarding pattern to copy: ask for script/text, voice, tone, pacing, output format, and whether batch generation is needed.

3. OpenAI imagegen
   - Strength: explains generation vs editing, references assets in the same coding session.
   - Onboarding pattern to copy: ask for subject, style, dimensions/aspect ratio, background/negative space, references, number of variants.

4. OpenAI Sora
   - Strength: covers full lifecycle: create, edit, extend, status, download, queues.
   - Onboarding pattern to copy: ask for clip duration, scene, camera motion, style, constraints, whether to create/edit/extend.

5. fal.ai generate
   - Strength: good model-selection onboarding; supports text-to-image, image-to-video, text-to-video.
   - Onboarding pattern to copy: first ask what modality and source assets exist, then choose model/workflow.

6. Remotion
   - Strength: explains why code-generated video is better for repeatable/personalized/data-driven video.
   - Onboarding pattern to copy: ask for script/storyboard, scenes, duration, dimensions, captions, audio/voiceover, data inputs.

7. Google Labs Remotion
   - Strength: clear first-use for walkthrough videos from design screens.
   - Onboarding pattern to copy: ask for source design/screens, screen order, transitions, callouts, narration, output resolution.

8. Anthropic slack-gif-creator
   - Strength: sharply scoped output constraints: emoji vs attachment, dimensions, file size.
   - Onboarding pattern to copy: ask target platform, dimensions, animation idea, source image/logo, loop duration, file-size limit.

9. Anthropic algorithmic-art
   - Strength: good onboarding for vague creative prompts; turns aesthetic intent into parameters/seeds.
   - Onboarding pattern to copy: ask mood, palette, motion/static, interactivity, seed/reproducibility, export format.

10. Venice media skills
   - Strength: well-organized by API surface with explicit endpoints and gotchas.
   - Onboarding pattern to copy: ask which Venice surface is needed — image, edit, speech, music, video, transcription — then auth/output constraints.

## Suggested universal first-use question template

When the user asks for media generation, ask only the minimum needed:

1. What are we making? podcast, voiceover, image, video, GIF, slides, 3D, music.
2. What is the source material? script, article, prompt, image, design screens, data, nothing yet.
3. Who is it for? audience/platform/use case.
4. What style should it have? tone, voice, visual style, brand, pacing.
5. What output do you need? format, length, dimensions, aspect ratio, file type.
6. Any constraints? brand rules, safety, budget/API provider, rights, deadline.

For good UX, do not ask all six every time. Ask 2–3 high-impact questions, then proceed with reasonable defaults.

## Distribution: how to package skills and get people to try them

### Distribution formats to support

1. Plain GitHub repo with `skills/<skill-name>/SKILL.md`
   - Lowest friction and works across most runtimes.
   - Follow the Agent Skills spec: directory name matches `name`, required `name` + `description`, optional `scripts/`, `references/`, `assets/`.
   - Keep `SKILL.md` under ~500 lines and move heavy docs into `references/`.

2. Claude Code plugin marketplace format
   - Strong for Claude Code users.
   - Pattern used by Anthropic and OnboardJS: users add a marketplace, then install a plugin/skill pack.
   - Include copy-paste commands in the README.

3. Codex-compatible skill/plugin format
   - Codex treats skills as the authoring format and plugins as the distribution unit.
   - For reusable distribution, package one or more skills as a plugin.
   - Add `agents/openai.yaml` for Codex app metadata: display name, short description, icon, default prompt, dependencies, implicit-invocation policy.

4. `.agents/skills` open-standard layout
   - Best cross-agent target.
   - Codex scans `.agents/skills`; OpenCode also reads `.agents/skills`, `.claude/skills`, and its own `.opencode/skills`.
   - Recommendation: publish canonical skills in `skills/`, plus install instructions for `.claude/skills`, `.agents/skills`, `.opencode/skills`, and Cursor if relevant.

5. `npx skills add` / `pnpm dlx skills add`
   - Very good trial UX.
   - OnboardJS uses this well:
     - install all skills
     - install one specific skill
     - list available skills
   - If possible, make the repo compatible with this installer pattern.

6. Aggregators / directories
   - Submit or make discoverable on:
     - officialskills.sh / Awesome Agent Skills
     - SkillsMP
     - Anthropic/Claude plugin marketplace where applicable
     - OpenAI skills/plugin ecosystem where applicable
   - These matter because users search there instead of random GitHub.

### Minimum repo checklist before sharing

- `README.md` with:
  - one-sentence value proposition
  - 3–5 concrete example prompts
  - install all / install one / uninstall or update instructions
  - screenshots or output samples, especially for media skills
  - compatibility table: Claude Code, Codex, OpenCode, Cursor, etc.
  - auth/API-key requirements clearly stated
- `skills/<name>/SKILL.md` with:
  - strong description that includes trigger words
  - “When to use” section
  - “First-time use” section
  - “Ask these questions only if missing” section
  - sane defaults so users are not interrogated
- `examples/` with:
  - before/after outputs
  - sample prompts
  - generated media previews or links
- `references/` for detailed provider docs, model choices, voice/style presets.
- `scripts/` only when deterministic behavior is needed.
- License and contribution guide.
- Security note for API keys, file writes, external requests, and generated media rights.

### How to get distribution / early users

1. Start with a narrow wedge
   - Do not launch “media generation skills.” Launch one crisp painkiller:
     - “Generate a narrated podcast from a blog post”
     - “Generate a product teaser video from a screenshot”
     - “Create Slack-ready GIFs from a logo”
   - Users try specific outcomes, not generic infrastructure.

2. Publish demo-first
   - Put the output at the top: audio clip, GIF, video, deck screenshot.
   - Then show the exact prompt and install command.
   - Best format: “Input → prompt → generated output → how to install.”

3. Make the first run tiny
   - One command to install.
   - One prompt to try.
   - No account creation unless the provider requires it.
   - If API keys are required, provide a dry-run/sample-output mode.

4. Seed with communities that already use agents
   - Claude Code users
   - Codex users
   - OpenCode users
   - Cursor/Windsurf/Cline communities
   - Remotion/fal.ai/OpenAI/Claude developer communities
   - Indie hackers building marketing/media automation
   - DevRel/content teams that repeatedly make demos, explainers, launch assets

5. Use “template tasks” as acquisition
   - Instead of saying “try my skill,” say:
     - “Reply with a blog post URL and I’ll turn it into a podcast script/audio workflow.”
     - “Drop a landing page screenshot; this skill creates a 5-sec teaser video.”
     - “Give me a logo; this generates Slack emoji GIFs.”
   - The offer should produce an artifact quickly.

6. Submit to directories
   - PR to Awesome Agent Skills if quality is high and not AI-slop.
   - Ensure SkillsMP indexes the GitHub repo; optimize README and SKILL descriptions for searchable terms like podcast, TTS, image generation, Sora, video, Remotion, fal.ai.
   - If Claude plugin-compatible, publish/add as marketplace.

7. Partner with provider ecosystems
   - fal.ai, Remotion, Venice.ai, OpenAI, Azure/OpenAI, MiniMax-style communities all benefit when skills drive API usage.
   - Make provider-specific examples and tag them in launch posts.

8. Dogfood in public
   - Build 5–10 real media artifacts with the skill.
   - Post the artifacts, not just the repo.
   - Each post should include the exact prompt and “install/run this skill” CTA.

9. Make feedback trivial
   - Add GitHub issue templates:
     - “Skill failed on first run”
     - “Provider/API issue”
     - “Output quality issue”
     - “Request a preset/workflow”
   - Add a “copy diagnostics” command or checklist if scripts are involved.

10. Design for teams
   - Add project-local install instructions so teams can commit the skill into repos.
   - Add “house style” customization docs for brand voice, show format, visual style, output dimensions.
   - Add versioned presets: `podcast-summary`, `launch-teaser`, `slack-gif`, `product-walkthrough`.

### First-time-use onboarding pattern for your own skills

A good media-generation skill should not ask 12 questions up front. Use this flow:

1. Detect intent and modality.
   - podcast/audio, image, video, GIF, slides, 3D, music.
2. Check whether enough input exists.
   - If yes: proceed with defaults and mention assumptions.
   - If no: ask 2–3 questions maximum.
3. Offer presets.
   - “Quick demo”, “polished marketing”, “technical explainer”, “social short”, “brand-safe corporate”.
4. Generate a plan before expensive calls.
   - Especially for video/audio where API cost and time matter.
5. Produce a preview artifact or dry run first.
   - Script/storyboard/prompt sheet before full render.
6. After first output, ask for one axis of iteration.
   - “Change voice, pacing, length, or style?”

### Questions each media skill should know how to ask

Podcast / speech:
- What source should I turn into audio?
- Who is the audience?
- Solo narration or multi-speaker conversation?
- Target length?
- Voice/tone/pacing?
- Output format: mp3/wav, transcript, chapters?

Image:
- What subject and use case?
- Style/reference?
- Aspect ratio/dimensions?
- Transparent background or full scene?
- Number of variants?

Video:
- Text-to-video, image-to-video, or edit existing video?
- Duration and aspect ratio?
- Scene/camera motion/style?
- Need captions, voiceover, music?
- Is this a preview or final render?

GIF:
- Emoji or message attachment?
- Source logo/image?
- Animation idea?
- Platform constraints: Slack/Discord/web?

Slides/decks:
- Audience and purpose?
- Outline/source material?
- Desired number of slides?
- Brand/template?
- Need charts/images/speaker notes?

### Launch sequence recommendation

Week 1: private beta
- Pick 5–10 agent-heavy users.
- Give them one skill and one example prompt.
- Watch where they fail without explaining too much.

Week 2: public artifact launch
- Publish GitHub repo.
- Include install commands, demo outputs, and 3 use cases.
- Share in Claude/Codex/OpenCode/Cursor/devtool communities.

Week 3: directory and partner push
- Submit to Awesome Agent Skills / SkillsMP.
- Post provider-specific examples: fal.ai video, OpenAI speech, Remotion walkthrough.
- Ask provider teams/community maintainers to try and share if useful.

Week 4: retention
- Add requested presets.
- Add troubleshooting docs.
- Publish “top 5 outputs generated by users” examples.
- Improve first-run questions based on failures.

## Dedicated review: Spotify Save to Spotify CLI + skill

Repo reviewed: https://github.com/spotify/save-to-spotify

### What it already does well

- Strong multi-channel distribution:
  - curl installer: `curl -fsSL https://saveto.spotify.com/install.sh | bash`
  - `npx skills add spotify/save-to-spotify`
  - ClawHub: `openclaw skills install @spotify/save-to-spotify`
  - Claude Code plugin marketplace:
    - `/plugin marketplace add spotify/save-to-spotify`
    - `/plugin install save-to-spotify@save-to-spotify`
  - Manual release downloads and source build path.
- Installer bundles both CLI and skill, then links the skill into common agent directories:
  - `~/.claude/skills/save-to-spotify`
  - `~/.cursor/skills/save-to-spotify`
  - `~/.config/opencode/skills/save-to-spotify`
  - `~/.agents/skills/save-to-spotify`
- Good CLI surface for agents:
  - global `--json`
  - `auth status`
  - `upload`
  - `shows`
  - `episodes status --wait`
  - `timeline set/get/delete`
  - `token` for Spotify Web API lookup workflows.
- Good agent docs:
  - `docs/agent-integration.md` explains JSON mode and typical workflow.
  - `docs/ci-automation.md` explains DPoP token persistence and why raw env access tokens are bad for scheduled workflows.
- Good media-generation positioning:
  - skill covers script, TTS, cover image, timeline, description, and Spotify upload.
  - references are split cleanly: CLI usage, audio providers, cover image, timeline, Spotify API, description, content quality.
- Strong timeline model:
  - chapters, image companions, link companions, Spotify entity cards.
  - supports images with tap-through `url`.
  - recommends Spotify-native cards when possible.

### Recommended product / UX changes

1. Add a one-command “first run demo”
   - Current quick start tells users to install, then describe what they want.
   - Add a demo command or documented prompt that creates a tiny local sample episode from built-in text.
   - Example: `save-to-spotify demo --dry-run` or `save-to-spotify demo --title "Hello Spotify"`.
   - Why: for distribution, people need to experience success in under 2 minutes.

2. Add `doctor` / `preflight`
   - Suggested command: `save-to-spotify doctor --json`.
   - Should check: binary version, PATH, auth, token refresh, ffmpeg availability, image constraints, write dirs, agent skill install paths.
   - This would reduce first-run support burden and make agent troubleshooting easier.

3. Add a skill “quick mode” for raw uploads
   - The current skill is excellent for polished production but heavy for simple saves.
   - Add an early branch:
     - If user asks “save this audio file to Spotify,” do not run the full podcast interview.
     - Ask only show/title/cover if missing, then upload.
   - Keep the mandatory interview for generated episodes, not raw media saves.

4. Improve first-time onboarding by offering presets
   - Instead of asking all production choices separately, offer presets:
     - Raw upload
     - Daily briefing
     - Blog-to-podcast
     - Meeting recap
     - Language lesson
     - Story/narration
   - Each preset can imply defaults for length, tone, timeline density, image strategy, and description style.

5. Add “cost/time preview” before generation
   - For generated episodes, show estimated steps and rough cost/time drivers:
     - TTS minutes
     - number of images
     - expected audio length
     - timeline companions
   - This is especially useful before expensive AI image/TTS/video/audio calls.

6. Add sample output artifacts to README
   - README is strong technically but light on visual proof.
   - Add screenshots/GIFs of:
     - episode in Spotify
     - timeline companions in Now Playing
     - generated cover image
     - example show notes.
   - Distribution lesson: “show the artifact before install.”

7. Add a “copy-paste prompts” section
   - Include 5 prompts:
     - “Turn this article into a 6-minute podcast and save it to Spotify…”
     - “Save this lecture recording into my Lecture Notes show…”
     - “Make a language-learning episode from this vocabulary list…”
     - “Make a meeting recap audio episode from this transcript…”
     - “Create a daily briefing from these links…”

8. Make timeline image duration guidance match desired playback behavior
   - Current timeline guidance says to divide chapter windows into slots.
   - For one primary image per chapter, update the guidance: start the image at the chapter start and keep it visible for the full chapter duration, minus a small buffer if needed.
   - This matches K’s prior preference: one representative image per chapter should last the whole chapter, not a short slot.
   - Source memory: `memory/2026-05-18.md#L1-L5`.

9. Add skill-level “do not over-ask” rule
   - The skill currently says the user interview is mandatory and asks at least seven categories.
   - Better: still require confirmation, but ask only missing high-impact choices and use explicit presets/defaults.
   - Example: “I can use the standard podcast preset: English, 6–8 min, mixed images, generated cover, existing show X. Say go or change voice/show/length.”

10. Add `timeline validate` command
   - The CLI validates during `timeline set`, but agents would benefit from a local-only validation command.
   - Suggested: `save-to-spotify timeline validate --from-file timeline.json --duration-ms 600000 --json`.
   - Should catch: overlapping companions, chapters too close, missing files, image size/dimensions, Spotify URI format, chapter beyond duration.

11. Add `upload --timeline timeline.json`
   - Common agent workflow is upload → wait → timeline set.
   - A convenience wrapper could upload, wait until ready, push timeline, verify, and return one final JSON object.
   - Suggested: `save-to-spotify upload episode.mp3 --title ... --image cover.jpg --timeline timeline.json --wait`.

12. Add `--show-title` resolver
   - Agents often know a show name, not an ID.
   - Suggested: `--show-title "Daily Briefings"` that resolves exactly one show or errors with candidates.
   - This avoids brittle manual parsing of `shows` output.

13. Add install script dry-run visibility to README
   - Installer has options; make sure `--dry-run` is documented prominently if supported.
   - Users are wary of curl-bash; dry-run plus manual verification helps trust.

14. Publish an official “agent distribution case study”
   - This repo is actually one of the best examples found: CLI + skill + plugin + ClawHub + npx skills + docs.
   - A short blog/README section explaining this packaging would help other skill authors copy the pattern.

### Recommended skill text changes

- Add a top-level branch:
  - “If user provides an existing audio file and only wants it saved, load `cli-usage.md`, list shows, ask destination if missing, upload. Do not require TTS/cover/timeline interview unless they request a polished episode.”
- Add presets under User Interview:
  - `raw-upload`, `briefing`, `article-podcast`, `meeting-recap`, `language-lesson`, `storytime`.
- Change timeline guidance:
  - “When one primary image represents a chapter, make it span the full chapter duration.”
- Add “first response examples” for common prompts so agents ask better questions.
- Add “minimal confirmation” examples to avoid long interrogation in chat/mobile contexts.

### Recommended CLI roadmap priority

1. `doctor --json`
2. `timeline validate --from-file ...`
3. `upload --timeline ... --wait`
4. `--show-title` resolver
5. `demo` / sample episode command

### Distribution lessons from this repo

Save to Spotify already does many things right and should be treated as a reference implementation for skill distribution:

- canonical GitHub repo
- release artifacts with bundled skills
- curl installer
- npx skill installer compatibility
- ClawHub listing
- Claude plugin marketplace
- cross-agent skill symlinks
- agent docs and CI docs

The biggest opportunity is not distribution plumbing; it is first-run conversion: make the first successful artifact faster, more visual, and less questionnaire-heavy.
