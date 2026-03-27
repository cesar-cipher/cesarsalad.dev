import twemoji from 'twemoji';
import { useRef, useEffect } from 'react';

import styles from "./Component.module.css";

export type TagEntry = {
    icon: string;
    label: string;
    href?: string;
}

export interface TagListStyles {
    container?: string;
    entry?: string;
    icon?: string;
    label?: string;
}

export interface TagListProps {
    entries: TagEntry[];
    classNameStyles?: TagListStyles;
}

export function TagList({entries, classNameStyles}: TagListProps) {
    // Hold the DOM reference to the emoji icon
    const iconRefs = useRef<(HTMLSpanElement | null)[]>([]);
    // And call useEffect() call Twemoji.parse() on each emoji icon after rendering
    useEffect(() => {
        iconRefs.current.forEach(span => {
            if (span) { // not null
                twemoji.parse(span, { className: 'twemoji'});
            }
        });
    }, [entries]);

    return (
        <ul className={`${styles.tagList} ${classNameStyles?.container ?? ''} `}>
            {entries.map((entry, index) => (
                <li className={`${styles.entry} ${classNameStyles?.entry ?? ''}`}>
                    <span
                        ref={elem => { iconRefs.current[index] = elem; }}
                        className={`${styles.icon} ${classNameStyles?.icon ?? ''}`}>{entry.icon}
                    </span>
                    {entry.href
                        ? <a className={`${styles.label} ${classNameStyles?.label ?? ''}`} href={entry.href}>{entry.label}</a>
                        : <span className={`${styles.label} ${classNameStyles?.label ?? ''}`}>{entry.label}</span>
                    }
                </li>
                )
            )}
        </ul>
    );
}

export default TagList;