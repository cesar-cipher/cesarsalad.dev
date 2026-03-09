import type { CardSectionProps } from "../card/CardSection.tsx";

export const sections: CardSectionProps[] = [
    {
        title: "César Cano",
        subtitle: "Back-End Software Engineer",
        entries: [
            {
                title: "Hi, I'm César - like the salad",
                description: `
                    <p>
                        I'm a <strong>back-end software engineer</strong> with over 
                        <strong>5 years of professional experience at Apple</strong> 
                        in their Apple Pay division, working on the Identity and Digital Car Key projects.
                    </p>
                    <p>
                        Prior to my role at Apple, I completed a <strong>Bachelor of Arts in Computer Science degree</strong> 
                        at <strong>Boston University</strong>.
                    </p>
                    <br>
                    <p>
                        During my time as a student, I had internships at <strong>Siemens Energy</strong> and 
                        <strong>Drift.com (now Salesloft)</strong>, and completed mentorships with <strong>Wallbreakers</strong> and 
                        <strong>Facebook's "Above and Beyond Computer Science" (ABCS)</strong> program.
                    </p>
                    <p>
                        By the way, I previously used my birth name <strong><em>Ishmael Perez</em></strong>, and I filed a legal name change 
                        at the end of 2025 to use a less typo-prone first name along with my family's surname.
                    </p>
                `,
            }
        ]
    },
    {
        title: "Employment",
        entries: [
            {
                title: "Software Engineer - Access (Digital Car Key)",
                subtitle: "Apple • October 2023 - June 2025",
                location: "Cupertino, CA • Hybrid",
                description: `
                <p>
                    After a few years working on Apple Pay's mobile driver license project, I wanted to learn by working 
                    on a new project. I switched within Apple Pay to the Digital Car Key team.
                </p>
                <p>
                    The Digital Car Key project manages provisioning, lending/borrowing, 
                    and remote updates of car keys stored in the Apple Wallet, which 
                    are compatible with many new models of cars from brands like BMW.
                </p>
                <p>
                    My core responsibilities and achievements included:
                </p>
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
                `
            },
            {
                title: "Software Engineer - Identity",
                subtitle: "Apple • September 2020 - October 2023",
                location: "Cupertino, CA • Hybrid",
                description: `
                <p>
                    My first role as a new graduate was with Apple in their Wallets, Payments, and Commerce (WPC) division. 
                    Specifically, the project on which I first worked was the Apple Pay Identity project: a feature in which 
                    users can add their driver's license to their iPhone's Wallet app.
                </p>
                <p>
                    The first state to launch with Apple was <a href="https://www.apple.com/newsroom/2022/03/apple-launches-the-first-drivers-license-and-state-id-in-wallet-with-arizona/">Arizona in March of 2022</a>. 
                    Since then, the same server code has been expanded to support <a href="https://learn.wallet.apple/id#states-list">14 total states</a>, as of March 2025.
                </p>
                <p>
                    I worked on back-end server code for the project before its launch. Some of my achievements were:
                </p>
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
                `,
            },
            {
                title: "Software Engineer Intern",
                subtitle: "Drift.com (now Salesloft) • July 2019 - December 2019",
                location: "Boston, MA • On site",
                description: `
                <p>
                    I interned at Drift while it was still a startup. My internship started in summer and I continued my work 
                    throughout the fall semester while studying full-time and working a second job as a Resident Assistant at BU.
                </p>
                <p>
                    <em>By the way: <a href="https://www.salesloft.com/company/newsroom/salesloft-acquires-drift">Drift was acquired by Salesloft</a> in February, 2024,
                    in case you're looking it up for more information!</em>
                </p>
                <p>
                    My internship started with working on the Drift Video app's Android front-end in Kotlin, and its iOS 
                    app's test suite in Swift. This app was new to Drift's suite, and provided a new tool to 
                    the thousands of marketers who used Drift daily as a sales tool.
                </p>
                <p>
                    I started my internship by creating the first front-end components of the Drift Video app 
                    for Android. Using Kotlin, I built the main menu and used existing Android libraries to match the recording 
                    and playback features of the iOS version on Android natively. I was new to front-end work, and learned Kotlin 
                    on the job to design an Android prototype using the existing iOS app as a visual and functional reference.
                </p>
                <p>
                    The second part of my internship consisted of enriching the automated test suite of Drift Video's iOS app. 
                </p>
                `,
            },
        ]
    },
    {
        title: "Education",
        entries: [
            {
                title: "Bachelor of Arts - Computer Science",
                subtitle: "Boston University • Graduated May 2020",
                description: `
                <p>I studied computer science at BU. The university was very rigorous, and even more expensive! 
                I worked multiple jobs while attending to pay through school.</p>
                <p>My extracurriculars include:</p>
                <ul>
                    <li>Member of <strong>Upsilon Pi Upsilon</strong> computer science honor society</li>
                    <li>Member of <strong>Society of Hispanic Professional Engineers (SHPE)</strong>
                    <ul>
                        <li>Winner of 2019 Chevron Scholarship</li>
                    </ul>
                    </li>
                </ul>
                `
            }
        ]
    }
];