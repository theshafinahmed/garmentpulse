# GarmentPulse - Design System

**Project:** GarmentPulse
**Course:** CSE327, Group 2
**Document purpose:** This file explains, in simple words, **how GarmentPulse should look and feel**: the colours, fonts, sizes, buttons, cards and status labels. Anyone building a screen later should be able to follow this file and make it match the rest of the app, without asking the team.

**Related documents:**

- [prd.md](prd.md) - **what** the app does and **who** uses it.
- [architecture.md](architecture.md) - **how** the app is built (React Native for mobile, Next.js for web).
- [mvp.md](mvp.md) - **which features** are in the first version.
- [plan.md](plan.md) - **who** builds it and **when**.

**Where the look comes from:** the sample screen design, [GarmentPulse Web App](https://claude.ai/artifact/V5cWdL7DKezQAGrLQYP6BF). It has 13 sample screens (manager, owner, worker, technician). This file turns that sample into rules. Where the team chose something different from the sample, section 14 lists it.

---

## 1. The idea in one minute

GarmentPulse is for garment factories, so the app **looks a little like cloth**.

- Cards and buttons have a thin **dashed line near the edge**, like a line of stitching.
- Status labels look like the small **woven labels** sewn into clothes.
- Each type of user has **their own colour**, like wearing a different uniform.

Three rules matter more than everything else:

1. **Easy to see.** Text must always be clearly darker (or lighter) than what is behind it.
2. **Easy to press.** Nothing a person taps is smaller than 44 px.
3. **Easy to understand.** A colour never works alone. Every status also has a word next to it.

---

## 2. Decisions the team made

These were chosen by the team. The rest of this file follows them.

| Topic | Decision |
|---|---|
| Colours per user | **4 colour families**: Manager blue, Owner dark red, Worker purple, Technician green |
| Cloth look | **Light**: keep the stitch lines, keep backgrounds plain (no heavy fabric patterns) |
| Status colours | **Same meaning for everyone** (yellow, blue, green), in soft shades that sit well on every user's colour |
| Report statuses | **3 only**: Waiting, In progress, Resolved |
| Expense statuses | **3 only**: Waiting, Approved, Rejected. A rejected expense stays in the list with the owner's short reason |
| Fonts | The **manager dashboard fonts**: Cormorant Garamond, Jost, IBM Plex Mono |
| Bangla font | The **device's own** Bangla font. No extra Bangla font is added |
| Language | **One language at a time**, changed with a small switch in the top-right corner |
| Numbers in Bangla | **Bangla digits** (২,৪০০). IDs such as `C-2041` always stay in English |
| Dark mode | **No.** Light look only |
| Phone buttons | **Normal size** (48 px tall), not the extra-tall ones in the sample |
| Login screen | **Manager dark blue** (nobody has a role yet, so blue is the "main brand" colour) |
| Chatbot | Takes the colour of **whoever is logged in** |
| Icons | **Lucide** icon set |

---

## 3. Colours

### 3.1 How to read the colour tables

Every user type (called a **role**) has the same list of colour jobs. Only the colour codes change. So a builder can write a screen once and swap the role.

| Colour job | What it is used for |
|---|---|
| **Page** | The background behind everything |
| **Bar** | The top bar (and on phones, the bottom tab bar) |
| **Bar text** | Words and icons on the bar |
| **Bar stitch** | The dashed line on the bar |
| **Card** | Boxes that hold content |
| **Card border / Card stitch** | The solid edge of a card, and the dashed line just inside it |
| **Text** | Normal words on a card |
| **Soft text** | Less important words (times, hints) |
| **Main button** | The one most important button on a screen |
| **Link** | Words you can click |

### 3.2 Manager - blue (web)

| Colour job | Code | Notes |
|---|---|---|
| Page | `#DDE3EA` | Pale blue-grey |
| Bar | `#1F2B47` | Dark denim blue |
| Bar text | `#D3D9E8` | Active item: `#FFFFFF` |
| Bar stitch | `#D6AC68` | Gold, like jeans thread |
| Card | `#F7F9FB` | |
| Card border | `#C9D2DE` | |
| Card stitch | `#98A6BA` | |
| Second card | `#B4C1CF` | Darker blue card for lists. Border `#8C9DB0`, stitch `#6F8296`, soft text `#2F3C4C` |
| Number box | `#5F7387` | Summary boxes at the top. Border `#4C5E71`. All text on it is `#FFFFFF` |
| Text | `#1E2430` | Headings: `#1A202B` |
| Soft text | `#55606F` | |
| Main button | `#2E4670` | Text `#FFFFFF`, border `#1C2D4C`, hover `#36527F` |
| Link | `#2A3A5C` | Hover `#6E1F2E` |
| Count bubble | `#A8622B` | The small number next to a menu item. Text `#FFF7EC` |
| Logo tile | `#DCC593` | The square with "G". Letter `#3A2E14` |

### 3.3 Owner - dark red (web)

| Colour job | Code | Notes |
|---|---|---|
| Page | `#4E1522` | Deep burgundy. Text placed straight on the page is light |
| Text on page | `#F6E3E7` | Headings on page: `#FFF6F2`. Links on page: `#F6D7DD` |
| Bar | `#2E3035` | Charcoal, like a wool suit |
| Bar text | `#D2CEC5` | Active item: `#FFFFFF` |
| Bar stitch | `#F0EADC` | Cream |
| Card | `#FFFCFC` | |
| Card border | `#E8D3D7` | |
| Card stitch | `#D9BCC2` | |
| Card top strip | `#8C2A3C` | A 6 px burgundy strip on top of important cards |
| Text | `#2A0A12` | Text on cards |
| Soft text | `#5A2230` | |
| Main button | `#6A1C2B` | Text `#F8EDE8`, border `#4A111D`, hover `#73202F` |
| Link | `#6E1F2E` | On cards. Hover `#4E1320` |
| Logo tile | `#8C2A3C` | Letter `#F8EDE8` |

### 3.4 Worker - purple (mobile)

| Colour job | Code | Notes |
|---|---|---|
| Page | `#E9E5EF` | Pale lilac |
| Bar | `#4A2346` | Deep plum. Used for the top bar and the bottom tab bar |
| Bar text | `#FBF4FA` | Second line on bar: `#E9D4E6`. Tab not chosen: `#E6CFE2`. Tab chosen: `#FFFFFF` |
| Bar stitch | `#F0D6EC` | Pale pink |
| Card | `#F6F1FA` | |
| Card border | `#D7C3E6` | |
| Card stitch | `#C3AED6` | |
| Icon tile | `#EDE2F3` | Soft square behind an icon. Icon colour `#4A2346` |
| Text | `#1E1226` | |
| Soft text | `#4A3A55` | |
| Main button | `#4A2346` | Text `#FFFFFF`, border `#2E1230` |
| Link | `#5E2A5A` | |

### 3.5 Technician - green (mobile)

| Colour job | Code | Notes |
|---|---|---|
| Page | `#B5D0BF` | Sage green |
| Bar | `#1F4236` | Bottle green. Used for the top bar and the bottom tab bar |
| Bar text | `#F4F6F8` | Second line on bar: `#D3E4DC`. Tab not chosen: `#B9D3C8`. Tab chosen: `#FFFFFF` |
| Bar stitch | `#C6E04A` | Bright lime |
| Card | `#EEF7F1` | |
| Card border | `#BFD9C9` | |
| Card stitch | `#A9C9B6` | |
| Text | `#111A15` | |
| Soft text | `#34413A` | |
| Main button | `#9CBF1E` | Lime. **Dark** text `#1B2408` (not white), border `#5F7710` |
| Link | `#1F5A48` | |

### 3.6 Colours shared by every role

| Colour job | Code | Notes |
|---|---|---|
| Second button | `#F7F9FB` | Text is the role's Text colour. Border `#AEB9C8` (worker: `#4A2346`) |
| Input background | `#FCFDFE` | Border `#AEB9C8`. Hint text inside: `#7A8495` |
| Error / danger background | `#F2D6CF` | |
| Error / danger text | `#8A2A1A` | Border `#D9AFA4` |
| White | `#FFFFFF` | |

**Red is only for errors and "no" actions** (for example a "Reject" button or "Choose what you did first"). Never use red for decoration.

---

## 4. Status colours

A status label tells you where something is in its journey. The colours mean the **same thing for every user**.

### 4.1 Report statuses (3)

| Status | Meaning | Label background | Label text | Bangla word |
|---|---|---|---|---|
| **Waiting** | Reported, nobody is fixing it yet | `#F3E2B8` (soft yellow) | `#6E4E0E` | অপেক্ষমাণ |
| **In progress** | A technician is working on it | `#DCE2EE` (soft blue) | `#263B66` | কাজ চলছে |
| **Resolved** | Fixed | `#E1E5CC` (soft green) | `#4A5320` | সমাধান হয়েছে |

The Bangla words for every status in sections 4.1 to 4.3 were approved by the team.

### 4.2 Expense statuses (3)

| Status | Meaning | Uses the colours of | Bangla word |
|---|---|---|---|
| **Waiting** | Above the owner's limit, waiting for the owner | Waiting (soft yellow) | অপেক্ষমাণ |
| **Approved** | The owner said yes, or it was under the limit | Resolved (soft green) | অনুমোদিত |
| **Rejected** | The owner said no | Error colours from section 3.6 (soft red) | প্রত্যাখ্যাত |

A **rejected** expense stays in the list with its label and the owner's short reason, so the manager always knows what happened.

### 4.3 Technician availability

| Label | Uses the colours of | Bangla word |
|---|---|---|
| **Free** | Resolved (soft green) | ফ্রি |
| **Busy** | In progress (soft blue) | ব্যস্ত |

### 4.4 Rules for status labels

- **Always show the word.** Never a coloured dot alone. Some people cannot tell colours apart.
- On **phones**, also put a small icon before the word.
- Use **only** the colours above for status (the soft red of "Rejected" is the error colour from section 3.6). Do not invent a new status colour for one screen.
- The step tracker on a worker's report has **3 steps**: Waiting, In progress, Resolved.

---

## 5. Fonts

| Font | Used for | Weights |
|---|---|---|
| **Cormorant Garamond** | Big titles only (page title, section title) | 600 |
| **Jost** | Everything else: text, buttons, labels, menus | 400, 500, 600, 700 |
| **IBM Plex Mono** | Codes and IDs: `C-2041`, `M-117`, amounts in tables | 500 |

All three are free Google Fonts.

**Bangla text:** these three fonts cannot draw Bangla letters. In Bangla mode the app uses the **device's own Bangla font** automatically. So always end the font list with a general fallback:

- Web: `Jost, system-ui, sans-serif`
- Titles: `'Cormorant Garamond', Georgia, serif`

Because each device has a different Bangla font, Bangla text can look slightly different on each phone. That is expected.

### 5.1 Text sizes

| Name | Web | Phone | Font and weight |
|---|---|---|---|
| Page title | 42 px | 32 px | Cormorant Garamond 600, tight line height (1.05 to 1.1) |
| Section title | 25 px | 24 px | Cormorant Garamond 600 |
| Big number | 38 px | - | Jost 700 (summary boxes) |
| Card title | 16 px | 18 px | Jost 600 |
| Normal text | 14 px | 15 px | Jost 400 or 500, line height 1.5 |
| Button text | 14 px | 16 px | Jost 600 |
| Small text | 12 px | 13 px | Jost 500 |
| Tiny label | 11 px | 12 px | Jost 600, CAPITALS, letters spaced out (0.07em) |
| Code / ID | 13 px | 12 px | IBM Plex Mono 500 |

**Rules:**

- Never go smaller than **11 px** on web or **12 px** on phones.
- Do **not** use CAPITALS or letter spacing on Bangla text. Bangla has no capital letters, and spacing breaks the letters apart.
- Bangla letters are taller. Give Bangla text a little more line height (about 1.6).

---

## 6. Language and numbers

- The app shows **one language at a time**: Bangla or English.
- The **language switch** is a small pill button in the **top-right corner of every screen**. It shows `EN · বাং`. It is 36 px tall on the bar, with at least 44 px of tappable space around it.
- **Numbers in Bangla mode use Bangla digits**: `২,৪০০`, `১০:৪২`.
- **IDs never change**: `C-2041` and `M-117` stay in English letters and digits in both languages. They must match the stickers on the machines.
- **Money** is written with the taka sign first: `৳2,400` in English, `৳২,৪০০` in Bangla.
- Write short, plain words on buttons: "Report a problem", "Start work", "Approve". No hard words.
- Leave room. A Bangla sentence can be longer than the English one, so never fix a button's width to fit only the English word.

---

## 7. Spacing, corners and shadows

### 7.1 Spacing steps

Use only these gaps, so everything lines up: **4, 8, 12, 16, 20, 24, 32, 48 px**.

| Where | Web | Phone |
|---|---|---|
| Edge of the screen to content | 32 px | 16 px |
| Gap between cards | 24 px | 18 px |
| Inside a card | 20 px | 18 px |
| Gap between small things in a row | 8 to 12 px | 8 to 12 px |
| Widest the content may get | 1360 px, centred | Full width |

### 7.2 Corners

| Thing | Web | Phone |
|---|---|---|
| Card | 10 px | 14 px |
| Button | 6 px | 12 px |
| Input box | 8 px | 10 px |
| Status label | 3 px (like a woven label) | Fully round (pill) |
| Avatar, count bubble, language switch | Fully round | Fully round |

### 7.3 Shadows

Shadows are soft and small. A card should look like it sits **just above** the page.

- Web card: `0 10px 24px -18px rgba(30, 40, 60, 0.45)`
- Phone card: `0 6px 16px -14px` in a dark shade of the role's colour, about 40% see-through
- No shadow on status labels or inputs.

---

## 8. The stitch line (the cloth look)

The stitch line is what makes the app feel like GarmentPulse. Keep it **light**.

| Where | Stitch |
|---|---|
| Card | 1.5 px dashed, **7 px inside** the card's edge, in the role's Card stitch colour |
| Main button | 1 px dashed, **5 px inside** the edge, in a see-through light colour (dark on the lime technician button) |
| Status label | 1 px dashed, **3 px inside** the edge, same colour as the label's text but half see-through |
| Top bar | One 1.5 px dashed line along the **bottom**, 12 px in from each side, in the Bar stitch colour |
| Bottom tab bar (phone) | The same line along the **top** |

**Do:**

- Use plain, flat background colours.
- Use one stitch line per thing.

**Do not:**

- Add woven fabric patterns, shiny silk gradients or check patterns. The team chose the light look.
- Put a stitch line on inputs, tables rows or text.

**Note for builders:** on the web, the stitch is a CSS `outline` with a negative `outline-offset`. React Native has no outline offset, so on phones draw the stitch as an inner box with a dashed border.

---

## 9. Parts of the screen (components)

### 9.1 Buttons

| Kind | When to use | Look |
|---|---|---|
| **Main** | The one most important action on the screen | Role's Main button colour, with a stitch line |
| **Second** | Other actions (Cancel, Undo, Open) | Near-white `#F7F9FB`, thin border, no stitch |
| **Danger** | Saying no or removing something (Reject) | Near-white, red text `#8A2A1A`, border `#D9AFA4`. Hover: `#F2D6CF` |

| Size | Web | Phone |
|---|---|---|
| Normal height | 44 px | 48 px |
| Small height (inside tables) | 36 px | - |
| Side padding | 18 px | 16 px |
| Width | As wide as its words | Full width of the card or screen |

**Rules:**

- **Only one Main button per screen.** If everything is important, nothing is.
- Every important button has **words**. An icon alone is only allowed for well-known things (back arrow, bell), and it must have a hidden name for screen readers.
- A button that cannot be used yet looks faded (50% see-through) and does nothing when pressed.
- Important buttons are always visible. Do not hide them inside a menu.

### 9.2 Cards

- Background, border and stitch come from the role's colour table.
- Corners and inside space come from section 7.
- A card holds **one idea**: one report, one job, one expense.
- Owner only: an important card can have the 6 px burgundy **top strip**.

### 9.3 Status labels

- Colours from section 4.
- Web: 11 px Jost 600, CAPITALS (English only), 5 px by 11 px padding, 3 px corners.
- Phone: 12 px Jost 700, pill shape, 7 px by 12 px padding, small icon first.
- Never wrap onto two lines.

### 9.4 Inputs (text boxes and dropdowns)

| Part | Web | Phone |
|---|---|---|
| Height | 44 px | 46 px |
| Background | `#FCFDFE` | `#FFFFFF` |
| Border | 1 px `#AEB9C8` | 1 px, soft shade of the role's colour |
| Text | 14 px Jost 500 | 15 px Jost 500 |
| When selected (focus) | 2 px ring in the role's Bar colour | Same |

- Every input has a **label above it** that says what to type. The grey hint inside the box is extra help, not the label.
- Error messages go **right under** the input, in the error colours, and say what to do: "Choose a machine first".
- The machine picker is a **simple dropdown**, as the PRD asks.

### 9.5 Top bar

| | Web (manager, owner) | Phone (worker, technician) |
|---|---|---|
| Left | Logo tile "G" + "GarmentPulse" + the role name | Same, or a back arrow on inner screens |
| Middle | Menu links with icons | Page title under the first row |
| Right | **Language switch** | **Language switch** |
| Bottom edge | Stitch line | Stitch line |

- Menu link: 40 px tall, 14 px Jost 500. The chosen one is white with a soft see-through white background and a dashed outline.
- Logo tile: 36 px square, 9 px corners, letter "G" in Cormorant Garamond 700.
- In the first version the owner's web app is one screen, so its top bar has **no menu links**: only the logo, the role name and the language switch.

### 9.6 Bottom tab bar (phone only)

- 2 to 4 tabs. Each tab is an **icon with a word under it**.
- Each tab is at least 56 px tall.
- Same colour as the top bar, with the stitch line on top.
- The chosen tab is white on a soft see-through pill.

| Role | Tabs |
|---|---|
| Worker | Home, Report, My reports |
| Technician | Jobs, History |

### 9.7 Tables (web only)

| Part | Look |
|---|---|
| Header row | Background `#26324F`, text `#EFE3C8`, 11 px Jost 600, CAPITALS |
| Body row | Background `#E8EDF3`, text `#1E2430`, 14 px |
| Line between rows | 1 px dashed `#AEB9C8` |
| Row under the mouse | `#DCE3EC` |
| Cell padding | 13 px top and bottom, 16 px left and right |

- IDs in the first column use IBM Plex Mono.
- The action button (Assign, Open) sits at the **right end** of the row.
- On a narrow screen the table scrolls sideways inside its card. The page itself must not scroll sideways.

### 9.8 Avatars

- A circle with the person's two initials (for example "KH").
- 38 px on lists, 34 px in small spots.
- Background `#DCE3EC`, letters in the role's Text colour, Jost 700, 13 px.

### 9.9 Step tracker (worker's report)

- 3 dots joined by lines: **Waiting, In progress, Resolved**.
- Finished step: filled dot in the role's Bar colour with a tick, solid line after it.
- Current step: white dot with a thick 3 px ring.
- Future step: white dot with a dashed border, dashed line.
- The word for the current step is bold.

### 9.10 Icons

- Icon set: **Lucide**. Thin line icons, no filled shapes.
- Line thickness: **1.8**.
- Sizes: 20 px in web menus, 22 px in phone tabs, 24 px inside icon tiles.
- An icon takes the colour of the text next to it.
- **No emoji** as icons.

| Meaning | Lucide icon |
|---|---|
| Report a problem / repair job | `wrench` |
| My reports / list | `list` |
| History | `history` |
| Dashboard | `layout-dashboard` |
| Expenses | `receipt` |
| People | `users` |
| Notifications | `bell` |
| Back | `chevron-left` |
| Done | `check` |
| Chatbot | `message-circle` |

---

## 10. Screens shared by everyone

### 10.1 Login

- Uses the **manager blue** colours (section 3.2), because nobody has a role yet.
- One card in the middle: logo tile, "GarmentPulse", email box, password box, one Main button "Log in".
- The language switch is in the top-right corner here too.

### 10.2 Chatbot

- Uses the colours of **the role that is logged in**.
- The person's messages: role's Main button colour, on the right.
- The chatbot's messages: role's Card colour with the card border, on the left.
- The typing box follows the input rules (section 9.4), with a Main button to send.
- Text only in the first version.

---

## 11. Phone and web layout

| | Web (manager, owner) | Phone (worker, technician) |
|---|---|---|
| Design width | 1440 px | 390 px |
| Navigation | Top bar with menu links | Top bar + bottom tab bar |
| Layout | Cards side by side in columns | One column, cards stacked |
| Main button | Top-right of the page header | Full width, easy to reach with a thumb |

Web pages must also work on a narrow window: columns stack on top of each other, menus wrap onto a second line, and tables scroll inside their card.

---

## 12. Rules so everyone can use the app

- **Tap size:** anything tappable is at least **44 by 44 px**.
- **Contrast:** normal text must be at least **4.5 times** darker or lighter than its background. The main pairs in this file (text on cards and pages, bar text, Main buttons, status labels) were checked and pass. Two small pairs were **not** checked and should be tested before use: the count bubble and the grey hint text inside inputs. If you make a new pair, check it first.
- **Not colour alone:** status always has a word. Errors always have a message.
- **Focus ring:** when someone moves with a keyboard, the chosen item shows a clear 2 px ring.
- **Real buttons:** a button is built as a real button and a link as a real link, so keyboards and screen readers work.
- **Labels:** every input has a visible label. Every icon-only button has a hidden name.
- **Speed:** the app must answer within 2 seconds ([architecture.md](architecture.md) NFR-01). While waiting, show a small "Loading" message. Never leave a blank screen.

---

## 13. Quick checklist for a new screen

Before saying a screen is finished, check:

- [ ] It uses the right role's colours from section 3.
- [ ] Titles use Cormorant Garamond. Everything else uses Jost. IDs use IBM Plex Mono.
- [ ] There is only **one** Main button.
- [ ] Cards and the Main button have a stitch line. Nothing else has fabric patterns.
- [ ] Statuses use only the colours and words in section 4.
- [ ] The language switch is in the top-right corner.
- [ ] The screen works in **both** Bangla and English, and nothing is cut off in Bangla.
- [ ] Numbers are in Bangla digits in Bangla mode. IDs are unchanged.
- [ ] Everything tappable is at least 44 px.
- [ ] All gaps come from the spacing steps in section 7.

---

## 14. Where this file is different from the sample

The sample screens were a first try. The team then made choices that change a few things. **When the sample and this file disagree, this file wins.**

| Topic | In the sample | In this file |
|---|---|---|
| Fabric patterns | Denim, silk, check and woven backgrounds | Plain colours with stitch lines only |
| Main buttons | Shiny silk gradient | One flat colour (the middle colour of that gradient) |
| Status colours | Shades of each role's own colour | Yellow, blue, green for everyone |
| Number of statuses | 7 (Submitted, Under review, Assigned, In progress, Resolved, Waiting on owner, Rejected) | 3 for reports, 3 for expenses |
| Worker step tracker | 5 steps | 3 steps |
| Language | English and Bangla shown together on worker screens | One language at a time |
| Bangla font | Hind Siliguri | The device's own Bangla font |
| Phone buttons | 52 to 58 px tall | 48 px tall |
| Small text in number boxes | Pale blue `#DCE4EC` | White `#FFFFFF`, because the pale blue was too hard to read |

---

## 15. Open items

These are not final yet. The team should decide them before building the related screens.

- **Owner web screen:** the colours (dark red) and the content are decided: one read-only list of all reports with three count boxes on top, and no menu links ([mvp.md](mvp.md) section 2.5). The screen itself has not been drawn yet.
- **Camera / floor presence screens:** not in the first version ([mvp.md](mvp.md) section 3), so they are not covered here.
- **Voice report player:** shown in the sample, but voice input is not in the first version, so it is not covered here.
