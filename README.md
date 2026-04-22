# Pedro Pereira — Portfolio :page_with_curl:

### [LIVE](https://doubleppereira.github.io/)

Personal portfolio site for Pedro Pereira. Single-page React app with a dark editorial aesthetic, custom cursor + spotlight, scroll-triggered reveals, and an inline Cal.com booking embed.

## Current design

- **Style**: dark editorial — warm near-black background, violet `#7666f0` accent, Cormorant Garamond display serif paired with Instrument Sans for body/UI.
- **Sections**: Hero → About → Skills → Experience → Projects → Testimonials → Book a call (Cal.com inline) → Contact → Footer.
- **Data-driven**: every section renders from [`public/resumeData.json`](public/resumeData.json). Edit the JSON to update copy, skills, work history, projects, Cal.com handle.
- **Booking**: [`@calcom/embed-react`](https://www.npmjs.com/package/@calcom/embed-react) inline embed, dark-themed, accent-branded, lazy-mounted (opens on scroll-into-view or click).
- **Interactions**: custom dot+ring cursor with hover expansion, radial accent spotlight following the pointer, IntersectionObserver-driven fade-in reveals, spinning dashed ring around the hero portrait.

Design handoff mocked in Claude Design (claude.ai/design), then recreated in React. Original prototype bundle lives in the chat history, not the repo.

## Previous versions (for the nostalgic)

This repo was originally forked from [`nordicgiant2/react-nice-resume`](https://github.com/nordicgiant2/react-nice-resume), a Styleshout-derived CRA resume template. The earlier iteration of the site used:

- **`particles-bg`** — animated particle polygon background behind the hero
- **`react-reveal`** — `<Fade>` / `<Slide>` wrappers for section entrance animations
- **`react-responsive-carousel`** — testimonial slider
- **`react-medium-image-zoom`** — click-to-zoom project thumbnails
- **`@emailjs/browser`** — contact-form submission via EmailJS
- **jQuery + Styleshout CSS** (`public/css/*`, `public/js/*`) — layout grid, smooth-scroll, flexslider
- **`anix`** — lightweight animation helpers

All of those have been removed. The redesign replaces them with native React patterns (IntersectionObserver for reveals, pure CSS for motion, Cal.com for booking instead of a hand-rolled form).

## Run

### 1. Clone

```shell
git clone https://github.com/doubleppereira/doubleppereira.github.io
```

### 2. Install + start

```shell
yarn install
yarn start
```

### 3. Build

```shell
yarn build
```

## Configure

- **Copy / work history / skills / projects / testimonials** — edit `public/resumeData.json`.
- **Cal.com handle / event** — `main.calUsername` + `main.calEvent` in the same JSON (leave `calEvent` empty for the event-picker root page).
- **Accent color** — change `--accent` in `src/index.css`.
- **Profile photo** — replace `public/images/profilepic.jpg`.
