# cesarsalad.dev

A portfolio site for me, César Cano!

> # Content Planning

## Version 1: Basic MVP

- Furnish the page with my info, separated into sections
  - **About**
    - Photo of yours truly
    - Summary of page
  - **Experience**
    - Job titles
    - Companies
    - Month + year of start -> Month + year of end
    - Description of the job, my impact, and tech stacks used
  - **Education**
    - Degree title
    - University name
    - Month + year of graduation
    - Description of extracurriculars, honor societies, scholarships
  - **Projects**
    - Project title
    - Solo vs collaborative
    - Month + year of start -> Month + year of end
    - Description of project purpose, tech stack, any reach analytics
  - **Hobbies**
    - Get to know me personally! This is where I list the extra stuff.
      - **Sewing**
        - Company name (Nothing Special)
        - Photos of example work
        - Description of brand, my efforts, small biz cohort membership
      - **Piano**
        - YouTube channel
        - Links to example pieces I've arranged
        - Description of what I actually do (learn by ear & arrangements)
      - **Languages**
        - List of languages spoken and fluency
        - Exams I've taken/am planning to take
        - Why I learned them?
- Make it at least pleasant to look at
  - Doesn't have to be groundbreakingly cool or reactive, just functional

## Version 2: Prettified
- Add a navbar
  - Quick auto-scroll to the various sections
- Implement a clear aesthetic direction
  - Light mode only
  - Filter/recolor images to use consistent palette/warmth/saturation
  - Some minimally reactive components: a wiggle here, a float there
- Design the page with a variety of desktop views in mind
  - Check typical monitor sizes
  - The elements should slide/scale/read cleanly between various sizes

## Version 3: Prettified plus
- Design the page with mobile views in mind
  - Elements like the navbar should shrink to a hamburger menu
  - Essential elements remain on screen even when the screen is narrow
  - Images scale cleanly without overlap or odd stretching
- Add subtle looping animations to bring life to the page
  - Small elements "floating" forever
  - Background that may ripple or slowly change color/brightness

## Version 4: Beautiful!
- Design a dark mode
  - Dark mode for desktop view
  - Dark mode for mobile view
- Toggle between light and dark modes
  - Add light vs dark state for each component
  - Explicit button for modifying component states
- Reference user time zone for initial state
  - 6am - 6pm -> Light mode
  - 6pm - 6am -> Dark mode

## Version 5: Gorgeous!!
- Add something for wow factor!
  - TBD
  - Many portfolios to examine as inspiration, but I gotta add what makes ME special
  
<br>
<br>
  
> # Technical planning

### Tech stack

Uses React framework

Coded in TypeScript

### Separation of powers

`/public`: All the header and boilerplate items like favicons  
`/src`: All source code
  - `/assets`: Static assets like images, fonts, global CSS files  
  - `/components`: All React components, and organized by nested-ness  
  - `/data`: JSON/TSX files for static content that I may update frequently, like project descriptions or global variable maps  
  - `/hooks`: Hooks used globally. ***Page-specific hooks should go in their specific page directory, if it exists...***  
  - `/utils`: All non-essential helper Typescript files  
