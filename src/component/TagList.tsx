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
    return (
        <ul className={`${styles.tagList} ${classNameStyles?.container ?? ''} `}>
            {entries.map(entry => (
                <li className={`${styles.entry} ${classNameStyles?.entry ?? ''}`}>
                    <span className={`${styles.icon} ${classNameStyles?.icon ?? ''}`}>{entry.icon}</span>
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