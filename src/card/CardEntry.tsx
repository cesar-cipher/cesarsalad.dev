import styles from "./Card.module.css";
import DescExpansion from "./DescExpansion.tsx";
import { TagList } from "../component/TagList.tsx";

// Basic props
export interface CardEntryProps {
    title: string;                      // Left-hand detail, name of job/project/etc.
    subtitle?: string;                  // Left-hand detail, company/summary/etc.
    upperRightCorner?: React.ReactNode; // Slot for upper right-hand corner details
    description: string;                       // Short blurb about the entry; always visible
    descExpansion?: [string, string];   // Detailed blurb about the entry; button must be clicked to view
                                        //     key = preview text; value = detail text
    callout?: string;                   // Callout for any important info
    footer?: React.ReactNode;           // Slot for elements at the bottom of the entry
}

// Employment & project entry props
export interface TechnicalCardEntryProps extends CardEntryProps {
    duration?: string;                  // Right-hand detail
    location?: string;                  // Right-hand detail
    techStack: string[];                // Footer with badges for languages, frameworks etc.
}



/* BASIC CARD ENTRY: General use; contains two slots for additional data in children props */
export function CardEntry({title, subtitle, upperRightCorner, description, descExpansion, callout, footer}: CardEntryProps) {
    return (
        <article className={styles.cardEntry}>
            <div className={styles.header}>
                {/* Upper left corner details */}
                <div className={styles.upperLeftCorner}>
                    <h3 className={styles.title}>{title}</h3>
                    {subtitle && <h4 className={styles.subtitle}>{subtitle}</h4>}
                </div>

                {/* Slot for upper right corner details */}
                {upperRightCorner}
            </div>

            {/* Render the CardEntry.description via pre-typed HTML */}
            <span className={styles.description} dangerouslySetInnerHTML={{ __html: description }}/>

            {/* Display the callout message, if it's present. It's set above the expansion part so it's harder to miss */}
            {callout && <aside className={styles.callout} dangerouslySetInnerHTML={{ __html: callout }}/>}

            {/* Do the same for .descExpansion, if it's present */}
            {descExpansion &&
                <DescExpansion
                    previewText={descExpansion[0]}
                    detailText={descExpansion[1]}
                />
            }

            {/* Slot for any elements below the main cardEntry elements */}
            {footer}
        </article>
    );
};

/* TECHNICAL CARD ENTRY: Employment & projects; fills corner slot with duration + location info; fills footer with tech stack */
export function TechnicalCardEntry({duration, location, techStack, ...basicProps}: TechnicalCardEntryProps) {
    return (
        <CardEntry
            {...basicProps}
            upperRightCorner={
                <div className={styles.upperRightCorner}>
                    {duration && <h4 className={styles.duration}>{duration}</h4>}
                    {location && <h5 className={styles.location}>{location}</h5>}
                </div>
            }
            footer={
                <TagList
                    entries={validateTechStackTagList(techStack)}
                    classNameStyles={{
                        container: styles.tagList,
                        entry: styles.entry,
                        icon: styles.icon,
                        label: styles.label
                    }}
                />
            }
        />
    );
}

function validateTechStackTagList(techStack: string[]) {
    const TechType: Record<string, {icon: string, label: string}> = {
        // Back-end
        JAVA:       {icon: "☕️", label: "Java"},
        PYTHON:     {icon: "🐍", label: "Python"},
        SQL:        {icon: "🛢️", label: "SQL"},
        // Front-end
        REACT:      {icon: "⚛️", label: "React"},
        TYPESCRIPT: {icon: "🛂", label: "TypeScript"},
        HTMLCSS:    {icon: "✴️", label: "HTML/CSS"},
        KOTLIN:     {icon: "🆔", label: "Kotlin"},
        SWIFT:      {icon: "🈳", label: "Swift"},
    }

    // Create a list of ALL the tech types using above TechType Record
    const techStackEntriesAll = techStack.map(key => {
        const tech = TechType[key];
        if (!tech) return null;
        return { icon: tech.icon, label: tech.label};
    });
    // Filter out any null entries (which means I made a typo...)
    const techStackEntriesFiltered = techStackEntriesAll.filter(entry => entry !== null);
    // Return the survivors!
    return techStackEntriesFiltered;
}



export default CardEntry;

/*
// This function is never used; I wrote it here to extract the logic above into a more explicit 
// write-out so I could understand its logic in TypeScript better.

export type TechType = typeof TechType[keyof typeof TechType];

function TechStackButVerbose({skills}: TechStackProps) {
    const techStackEntriesAll = skills.map(key => {
        const tech = TechType[key];
        // Avoid a breakage if the key at skills[i] doesn't actually map to a TechType
        if (!tech) return null;
        // Otherwise, return the appropriate key-value pair associated with the input TechType key
        return { icon: tech.icon, label: tech.label };
    });

    // Some of the entries in techStackEntries could be null; get rid of 'em
    const techStackEntriesFiltered = techStackEntriesAll.filter(item => item !== null);
    
    if (techStackEntriesAll.length === 0) return null;

    return (
        <ul className={styles.techStack}>
            {techStackEntriesFiltered.map(entry => {
                return (
                    <li className={styles.techStackEntry}>
                        <span className={styles.techStackEntryIcon}>{entry.icon}</span>
                        <span className={styles.techStackEntryLabel}>{entry.label}</span>
                    </li>
                )
            })}
        </ul>
    );
}
*/