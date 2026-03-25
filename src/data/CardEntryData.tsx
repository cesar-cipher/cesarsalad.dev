import type { CardSectionProps } from "../card/CardSection.tsx";

export const sections: CardSectionProps[] = [
    {
        title: "Cesar Cano",
        subtitle: "Back-end Software Engineer",
        kind: "BASIC",
        entries: [
            {
                title: "Hi, I'm Cesar (like the salad)",
                description: `
                    <p>
                        I'm a <strong>back-end software engineer</strong> with over 
                        <strong>5 years of professional experience at Apple</strong>, 
                        working on the Identity and Digital Car Key projects.
                    </p>
                    <p>
                        Prior to my role at Apple, I completed a <strong>Bachelor of Arts in Computer Science degree</strong> 
                        at <strong>Boston University</strong>.
                    </p>
                    <p>
                        During my time as a student, I had internships at <strong>Siemens Energy</strong> and 
                        <strong>Drift.com (now Salesloft)</strong>, and also completed mentorships with <strong>Wallbreakers</strong> and 
                        <strong>Facebook's "Above and Beyond Computer Science" (ABCS)</strong> training program.
                    </p>
                `,
                callout: `
                    By the way, I previously used my birth name <strong><em>Ishmael Perez</em></strong>, and I filed a legal name change 
                    at the end of 2025. I wanted to use a less typo-prone first name along with my family's surname. Plus, I really do love caesar salads.
                `
            }
        ]
    },
    {
        title: "Employment",
        kind: "TECHNICAL",
        entries: [
            {
                title: "Software Engineer - Access (Digital Car Key)",
                subtitle: "Apple, Inc.",
                duration: "October 2023 - June 2025",
                location: "Cupertino, CA • Hybrid",
                description: `
                <p>
                    After a few years working on Apple Pay's mobile driver license project, I wanted to learn more 
                    by working on a new project. I switched within Apple Pay to the Digital Car Key team.
                </p>
                <p>
                    For context: the Digital Car Key project manages provisioning, lending/borrowing, and remote updates of 
                    car keys stored in the Apple Wallet, which are compatible with many new models of cars from brands like BMW.
                </p>
                `,
                descExpansion: [`My core responsibilities and achievements included:`,
                `
                <ul>
                    <li>
                        Refactored existing Digital Car Key server code to include features like 
                        digital key lending and new data structures while remaining completely backwards 
                        compatible.
                    </li>
                    <li>
                        Wrote extensive test coverage for all server classes I worked on, to ensure all 
                        edge cases were caught and handled correctly.
                    </li>
                    <li>
                        Completed Apple's OpenAPI documentation for v3 of the international digital car key specification by  
                        working as part of the Car Connectivity Consortium (CCC). I wrote the spec in YAML, with nested inheritances 
                        and extensive commenting to provide maximum utility, e.g. myriad examples of valid JSON requests and responses 
                        <em>and</em> high-level definitions of data structures.
                    </li>
                    <li>
                        Completely rewrote Apple's internal CCC specification v1 with the same high quality to match the v3 representation. 
                        Useful to both project managers and developers alike, it became the <em>de facto</em> source of truth for future development.
                    </li>
                    <li>
                        Met with developers from vehicle manufacturing companies like BMW to plan features like 
                        car key borrowing and lending, remote lending revocations, and test cases, along with their development cycles.
                    </li>
                </ul>
                `],
                techStack: ["JAVA", "YAML"]
            },
            {
                title: "Software Engineer - Identity",
                subtitle: "Apple, Inc.",
                duration: "September 2020 - October 2023",
                location: "Cupertino, CA • Hybrid",
                description: `
                <p>
                    My first role as a new graduate was with Apple in their Wallets, Payments, and Commerce (WPC) division. 
                    Specifically, the project on which I first worked was the Apple Pay Identity project: a feature in which 
                    users can add their driver's license to their iPhone's Wallet app.
                </p>
                <p>
                    The first state to launch with Apple was <a href="https://www.apple.com/newsroom/2022/03/apple-launches-the-first-drivers-license-and-state-id-in-wallet-with-arizona/">Arizona in March of 2022</a>. 
                    Since then, the same server code has been expanded to support <a href="https://learn.wallet.apple/id#states-list">14 total states</a>, as of March 2026.
                </p>
                <p>
                    I worked on back-end server code for the project before its launch and maintained the code as well.
                </p>
                `,
                descExpansion: [`Some of my roles and achievements were:`,
                `
                <ul>
                    <li>
                        Refactoring existing REST APIs to support new variables like state acronym enums, and onboarded the first four 
                        state DMV partners. Alongside the initial launch features, I developed features to aid repeatability and automation 
                        for future state partners, and a structure that allowed the feature to expand to other possible forms of identity.
                    </li>
                    <li>
                        Meeting with representatives of state DMV offices to coordinate development, verify specification information, 
                        and track launch schedules. Due to the nature of the project, my team and I placed a very keen emphasis on data 
                        integrity, low latency to service thousands (if not millions) of users onboarding at once in a given state on launch day, 
                        and Apple's commitment to privacy - e.g. presenting IDs in a given situation should only transfer absolutely-required information,
                        and do so with user awareness and consent.
                    </li>
                    <li>
                        Privacy monitoring: revisiting existing classes to verify that variables like users' phone IDs were 
                        never stored alongside personally identifiable information, or even in logs that would allow Apple employees 
                        to piece together people's whereabouts and/or opting into products.
                    </li>
                    <li>
                        An "extra credit" assignment I completed on my own was streamlining the localization process. One of my recurring side 
                        tasks was to manually update JSON files of UI strings and corresponding key-value maps for the over 30 languages 
                        supported by Apple on iPhone. I developed a Python script to automatically update the dozens of JSON files and their map entries.
                        Additionally, having noticed that sometimes the localization teams' delivered files had missing entries, I implemented a feature 
                        in the script to notify the user which files had missing entries and in which keys. I presented this to my team and 
                        created a new internal feature that kept increased engineering time <em>and</em> aided cross-functional communication by 
                        drastically reducing the amount of back-and-forth communication between the server engineering and iPhone localization teams.
                    </li>
                </ul>
                `],
                techStack: ["JAVA", "PYTHON"]
            },
            {
                title: "Software Engineer Intern",
                subtitle: "Drift.com (now Salesloft)",
                duration: "July 2019 - December 2019",
                location: "Boston, MA • On site",
                description: `
                <p>
                    I interned at Drift while it was still a startup. My internship started in summer and I continued my work 
                    throughout the fall semester while studying full-time and working a second job as a Resident Assistant at BU.
                </p>
                <p>
                    My internship was split between working on the front-end of the Drift Video Android app in Kotlin, and 
                    building out the Drift Video iOS app's test suite in Swift. This app was new to Drift's suite of tools, 
                    and provided a new sales resource for thousands of marketers who used Drift daily.
                </p>
                `,
                callout: `
                <p>
                    By the way: <a href="https://www.salesloft.com/company/newsroom/salesloft-acquires-drift">Drift was acquired by Salesloft</a> in February of 2024,
                    in case you're looking it up for more information!
                </p>
                `,
                descExpansion: [`To speak about my internship's duties in detail:`,
                `
                <ul>
                    <li>
                        I started my internship by creating the first front-end components of the Drift Video app 
                        for Android. Using Kotlin, I built the main menu and used existing Android libraries like CameraX and OkHttp 
                        to build and test the recording and playback features already present on the iOS version of the app.
                        <ul>
                            <li>
                                I was new to front-end work, and learned Kotlin on the job. I "translated" the iOS Swift code to Kotlin
                                and researched robust, secure libraries to duplicate the iOS app's capabilities.
                            </li>
                        </ul>
                    </li>
                    <li>
                        For the second half of my internship, I pivoted from Android to iOS development. The existing Drift Video app 
                        on iOS worked, but it had low code coverage which caused breaking changes to go unnoticed. I used XCode's XCUITest 
                        framework to write automated tests that would run before shipping to production.
                    </li>
                    <li>
                        My tests compared final UIs after a series of inputs (e.g. typing value X and tapping button Y should land the user on screen Z) 
                        and validated expected vs actual outputs for a given input generated randomly.
                    </li>
                    <li>
                        The last stretch of my internship involved revamping the iOS app's UI/UX. I followed the MVC 
                        (Model-View-Controller) design paradigm to rework the iOS app's login screen and video detail views.
                        I used Postman to mock and verify HTTP POST request and response data like incorrect logins to verify 
                        the UI components I wrote would work correctly.
                    </li>
                </ul>
                `],
                techStack: ["KOTLIN", "SWIFT"]
            },
            {
                title: "Technical Intern",
                subtitle: "Siemens Energy AG",
                duration: "September 2017 - March 2019",
                location: "Orlando, FL • On site (and later remote)",
                description: `
                <p>
                    My first internship! I worked in office when I started, and was lucky enough to be granted remote work 
                    when I transferred from the University of Central Florida to Boston University at the start of 2019.
                </p>
                <p>
                    My work largely consisted of optimizing existing Apex (Salesforce's proprietary Java-like language) code 
                    to remove redundancies, write new classes with fields and logic requested by Siemens clients, and write/rewrite 
                    test classes to reach at least 90% code coverage.
                </p>
                `,
                descExpansion: [`To get into detail about my internship:`,
                `
                <ul>
                    <li>
                        A large part of my work was documenting existing procedures that the wind energy division previously 
                        performed by hand, and then writing Apex classes and SQL code to automate the process. 
                        My automation work, like bulk data processing for accounts and invalid data detection and removal, saved 
                        countless hours of manual data collection and prrevented human-prone errors - in addition to removing a 
                        long, arduous process for wind energy employees.
                    </li>
                    <li>
                        I performed a bit of "extra credit" by making sure all classes I touched would reach at least 90% code coverage, 
                        regardless of if I wrote them from scratch or was modifying an existing class. My priority was clean code that 
                        could be checked for correctness via these automatic tests, in addition to tests that would catch breaking changes. 
                        My only compromise was time, since I didn't want my meticulousness to delay deadlines - so I noted test classes to 
                        revisit when I had any downtime later on in the internship.
                    </li>
                </ul>
                `],
                techStack: ["JAVA", "SQL"]
            }
        ]
    },
    {
        title: "Education",
        entries: [
            {
                title: "Bachelor of Arts - Computer Science",
                subtitle: "Boston University • Graduated May 2020",
                description: `
                <p>
                    I studied computer science at BU. The university was very rigorous, and even more expensive! 
                    I worked multiple jobs while studying full time to pay each semester.
                </p>
                <p>My extracurriculars included:</p>
                <ul>
                    <li>Member of <strong>Upsilon Pi Upsilon</strong> computer science honor society</li>
                    <li>Member of <strong>Society of Hispanic Professional Engineers (SHPE)</strong>
                    <ul>
                        <li>Winner of SHPE's 2019 <strong>Chevron Scholarship</strong></li>
                    </ul>
                    </li>
                </ul>
                `
            }
        ]
    },
    {
        title: "Projects",
        kind: "TECHNICAL",
        entries: [
            {
                title: "Portfolio website in React",
                subtitle: "Fully-from-scratch single-page application",
                duration: "February 2026 → Present",
                description: `
                <p>
                    The website you see right now is all coded by hand by me, with no AI input. 
                    Although I'm mainly a back-end SWE, I wanted to expand my horizons and learn some React 
                    so I could create this portfolio website <em>and</em> carry the learnings into my future projects. 
                    Plus, by making it a learning opportunity, I could also add in my creative tastes and design ideas!
                </p>
                <p>
                    I had a personal portfolio site prior to this, but it used my old legal name and was coded using Bootstrap with 
                    a bunch of spaghetti code. It wasn't very pretty inside or out, to say the least. I decided to start from scratch 
                    and set up a master plan <em>before</em> touching the code, and learn React by real-time practice.
                </p>
                <p>
                    The code is all written in Typescript and HTML/CSS (of course). I opted to use base CSS rather than a 
                    library like Tailwind or Pico since it's such a small website, and it felt superfluous to import a library.
                </p>
                <p>
                    This website's code and Git history are all visible <a href="https://github.com/cesar-cipher/cesarsalad.dev">on my Github repo here</a>.
                </p>
                `,
                techStack: ["REACT", "TYPESCRIPT", "HTMLCSS"]
            }
        ]

    },
    {
        title: "Hobbies",
        kind: "BASIC",
        entries: [
            {
                title: "Nothing Special, Co.",
                subtitle: "My sewing project! • Launched October 2025",
                location: "San Francisco",
                description: `
                    <p>
                        After many years of hemming my clothes to fit my 5'4" self, I decided to take 
                        sewing more seriously as a passion project, rather than a little hobby in my bedroom.
                    </p>
                    <p>
                        The largest part of my "sabbatical" after quitting my job in June of 2025 has been focused on 
                        creating my own clothing brand by doing industry research and joining a small business mentorship program 
                        hosted by the SF LGBT Center. I invested in a sewing studio in the SoMa neighborhood, worked with 
                        a graphic designer to create branding, and have spent countless hours learning pattern drafting and 
                        garment construction (in addition to a lot of seam ripping).
                    </p>
                    <p>
                        While I haven't launched an online store yet, I continue to design patterns and sew garments like 
                        summery shirts and shorts sets, plus utility items like sleek bike-frame bags.
                    </p>
                    <p>
                        My projects can be viewed <a href="https://www.instagram.com/nothing.special.co/">on the Instagram page I created for the brand</a>.
                    </p>
                `
            },
            {
                title: "Piano and music",
                subtitle: "Arranging song covers by ear and busking",
                location: "San Francisco",
                description: `
                    <p>
                        Playing piano has been one of my biggest passions for close to 20 years now. I've loved 
                        arranging covers to my favorite songs and recording them for YouTube and live busking in 
                        my neighborhood.
                    </p>
                    <p>
                        The songs for which I've made covers range from Sabrina Carpenter to L'Impératrice to Radiohead, 
                        and I challenge myself to learn new techniques with each one - especially since I haven't received 
                        professional lessons since I was about 12 years old!
                    </p>
                    <p>
                        My piano recordings can be viewed <a href="https://www.youtube.com/ishfulthinking">on my YouTube channel here</a>.
                    </p>
                `
            }
        ]
    }
];