import type { CardSectionProps } from "../card/CardSection.tsx";

export const sections: CardSectionProps[] = [
    {
        title: "Test hero section title",
        subtitle: "Test hero section subtitle, 2025-2026",
        entries: [
            {
                title: "Test hero entry title",
                subtitle: "Test hero entry subtitle",
                description: `
                    <p>This is me testing the new approach of using data injection!</p>
                    <br>
                    <p>And don't forget to <em>take 5</em> - that is, <strong>relax</strong> and take a breather.</p>
                `,
            }
        ]
    },
    {
        title: "Employment",
        entries: [
            {
                title: "Software Engineer",
                subtitle: "Apple, 2020 - 2025",
                description: `
                <p>Yeah I worked at Apple! It was interesting.</p>
                <br>
                <p>I worked in Apple Pay. <em>Very cool.</em></p>
                `,
            },
            {
                title: "SWE Intern at Drift.com",
                description: `
                <p>This was an internship where I was confused a lot of the time.</p>
                <p>But I also learned a lot - which is the whole point of an internship!</p>
                `,
            }
        ]
    }
];