import styles from "./Card.module.css";

const TechType: Record<string, {icon: string, label: string}> = {
    // Back-end
    JAVA:       {icon: "☕️", label: "Java"},
    PYTHON:     {icon: "🐍", label: "Python"},
    SQL:        {icon: "🛢️", label: "SQL"},
    // Front-end
    REACT:      {icon: "⚛️", label: "Java"},
    TYPESCRIPT: {icon: "🛂", label: "Java"},
    HTMLCSS:    {icon: "✴️", label: "Java"},
    KOTLIN:     {icon: "💟", label: "Java"},
    SWIFT:      {icon: "🈳", label: "Java"},
}

// Union type for exports
export type TechType = typeof TechType[keyof typeof TechType];



interface TechStackProps {
    skills: string[];   // Must map to the keys above in TechType, otherwise will skip
}

export function TechStack({skills}: TechStackProps) {
    return (
        <ul className={styles.techStack}>
            {skills.map(key => {
                const tech = TechType[key];
                if (!tech) return null;
                return (
                    <li className={styles.techStackEntry}>
                        <span className={styles.techStackEntryIcon}>{tech.icon}</span>
                        <span className={styles.techStackEntryLabel}>{tech.label}</span>
                    </li>
                )
            })}
        </ul>
    );
}



// This function is never used; I wrote it here to extract the logic above into a more explicit 
// write-out so I could understand its logic in TypeScript better.
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
                    <li key={entry.label} className={styles.techStackEntry}>
                        <span className={styles.techStackEntryIcon}>{entry.icon}</span>
                        <span className={styles.techStackEntryLabel}>{entry.label}</span>
                    </li>
                )
            })}
        </ul>
    );
}

export default TechStack;
