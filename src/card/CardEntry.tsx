import styles from "./Card.module.css";
import DescExpansion from "./DescExpansion.tsx";
import { TechStack } from "./TechStack.tsx";

// Basic props
export interface CardEntryProps {
    title: string;                      // Left-hand detail, name of job/project/etc.
    subtitle?: string;                  // Left-hand detail, company/summary/etc.
    upperRightCorner?: React.ReactNode; // Slot for upper right-hand corner details
    description: string;                       // Short blurb about the entry; always visible
    descExpansion?: [string, string];   // Detailed blurb about the entry; button must be clicked to view
                                        //     key = preview text; value = full detail entry
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
            {/* Upper left corner details */}
            <div className={styles.cardEntryUpperLeftCorner}>
                <h3 className={styles.cardEntryTitle}>{title}</h3>
                {subtitle && <h4 className={styles.cardEntrySubtitle}>{subtitle}</h4>}
            </div>

            {/* Slot for upper right corner details */}
            {upperRightCorner}

            {/* Render the CardEntry.description via pre-typed HTML */}
            <span className={styles.cardEntryDesc} dangerouslySetInnerHTML={{ __html: description }}/>

            {/* Display the callout message, if it's present. It's set above the expansion part so it's harder to miss */}
            {callout && <aside className={styles.cardEntryCallout} dangerouslySetInnerHTML={{ __html: callout }}/>}

            {/* Do the same for .descExpansion, if it's present */}
            {descExpansion &&
                <DescExpansion
                    previewText={descExpansion[0]}
                    expansionText={descExpansion[1]}
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
                <div className={styles.cardEntryUpperRightCorner}>
                    {duration && <h5 className={styles.cardEntryDuration}>{duration}</h5>}
                    {location && <h5 className={styles.cardEntryLocation}>{location}</h5>}
                </div>
            }
            footer={
                <TechStack skills={techStack}/>
            }
        />
    );
}



export default CardEntry;
