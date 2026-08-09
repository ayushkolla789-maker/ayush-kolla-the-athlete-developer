# Ayush Kolla: The Athlete Developer

Build a single-page portfolio website for Ayush Kolla, a full-stack developer based in Hyderabad. The vibe should be cinematic, athletic, and interactive — not a generic template. Use React with Tailwind CSS.

COLOR PALETTE (use these exact hex values throughout)
- Cream (base/light): #FCF6F5
- Cream dim (secondary light): #EFE1DF
- Rich dark red (primary brand): #990011
- Bright red (accent/hover/glow): #C41230
- Deep red (shadows/gradients): #5E0009
- Ink (near-black, dark sections/text): #150005
- Ink soft (secondary dark surface): #260910

TYPOGRAPHY
Import these from Google Fonts:
- Anton — bold, condensed, all-caps display font for headings and the hero name. Athletic/jersey feel.
- Manrope — clean modern sans-serif for body paragraphs.
- JetBrains Mono — for labels, stats, eyebrows, timecodes, and terminal-style text.

HERO SECTION — cinematic landscape frame with a 3D flip
This is the centerpiece, spend the most effort here.
- Full-width section, aspect ratio around 21:9, max height ~76vh.
- A large landscape photo of Ayush fills the frame (object-fit: cover) with a dark gradient vignette overlay (left-to-right and top-to-bottom) so overlaid text stays legible.
- Add black "letterbox" bars above and below the frame, like a widescreen film crop. Top bar: small mono text "AK — PORTFOLIO CUT" on the left, and a live ticking timecode on the right in format HH:MM:SS:FF that counts up from page load (~24fps), colored bright red.
- Overlaid on the image, left-aligned and vertically centered: an eyebrow line "Hyderabad — on the court, in the gym, in the codebase", then a huge two-line name in the Anton font — "AYUSH" in cream, "KOLLA" in bright red — stacked on separate lines. Each line should animate in on page load with a staggered slide-up entrance, then continue a slow, subtle infinite drift so it never sits fully still. On scroll, apply parallax: the background image and the name text should move at slightly different speeds for depth.
- Below the name: one paragraph about being a full-stack developer in Java and Python who's also consistently into basketball, cricket, badminton, gym, and running. Then two buttons: "Get in touch" (solid red fill) and "See the work" (outlined/ghost, light border, sits on the image).
- A small red pill tag top-right reading "ATHLETE MODE".
- Make the ENTIRE hero frame clickable — clicking it flips the whole frame in true 3D (CSS perspective + rotateY 180°, ~1s smooth ease) to reveal a "DEV MODE" back face: dark background, monospace terminal-style lines listing role, languages ([Java, Python]), focus, off-duty activities, latest shipped projects, and a status line showing "online" in green. Add a small hint label "Click frame to flip →" on both sides.
- The bottom letterbox bar contains an infinite horizontal scrolling marquee of keywords in mono font, alternating cream and bright red: JAVA · PYTHON · FULL-STACK · BASKETBALL · CRICKET · BADMINTON · GYM · RUNNING · SHIPPING IDEAS · (looping).
- Add a small bouncing scroll-down indicator centered below the frame.

ABOUT SECTION
- Two-column layout (heading left, copy right on desktop; stacked on mobile).
- Left: eyebrow "Who's Ayush", heading "Code by day. Court by evening." in Anton.
- Right: three short paragraphs covering — full-stack development in Java and Python with real projects pushed to GitHub; consistent training across basketball, cricket, badminton, gym, and running; and sharing intellectual facts and knowledge as a content creator.
- Below that, three stat blocks in a row: big red Anton numbers with small mono captions — "2 / Core languages: Java · Python", "5 / Sports & training disciplines", "100% / Projects shipped to GitHub".

STACK SECTION
- Dark ink background.
- Heading "What I build with".
- Skill bars for Java (92%), Python (90%), Full-Stack Development (85%), Git & GitHub Workflow (80%) — mono label + percentage above each track, bar fills animate from 0 to target width when scrolled into view, using a red gradient.

COURT & FIELD SECTION
- Cream background.
- Heading "Court & field".
- Grid of 5 cards with a subtle 3D tilt-on-hover effect (mouse-position-based, max ~8 degrees), simple line icon, title, and one short line each for: Basketball, Cricket, Badminton, Gym, Running.

WORK SECTION
- Heading "Featured work".
- Project cards for these three real projects — use this content exactly, don't invent different ones:
  1. Farmer Forward — an agricultural platform for farmers, connecting them with resources, market information, and tools to plan, grow, and sell smarter.
  2. Awaaz — a public welfare platform where people can raise their voice against injustice, report issues, and push for accountability.
  3. B-Trade — a peer-to-peer marketplace where everyday people trade books directly with each other instead of buying new.
  Each card: Anton title, short description, small mono tech tag "Java · Python · Full-Stack", and a "View on GitHub →" link (placeholder href for now).

CONNECT SECTION
- Full-bleed rich dark red background, cream text.
- Heading "Let's connect".
- Three large link cards that lift and invert to cream/red on hover:
  1. LinkedIn → https://www.linkedin.com/in/ayush-kolla-07742837a
  2. Instagram (personal) @ayush_kolla → https://instagram.com/ayush_kolla
  3. Instagram (content) @calloftruth1, "facts & knowledge drops" → https://instagram.com/calloftruth1

FOOTER
Simple centered dark red bar with name and current year.

OTHER REQUIREMENTS
- Sticky top nav: "AK" logo mark in red Anton, links to About/Stack/Court & Field/Work/Connect, a "Let's talk" pill button, mobile hamburger menu.
- Fully responsive down to mobile; hero frame switches to a taller ~4:5 ratio on small screens.
- Respect prefers-reduced-motion by disabling or shortening animations.
- Add a very subtle grain/noise texture overlay across the whole page for a filmic feel.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d44d16d1-d9a3-4ca1-9f10-5cce9291688f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
