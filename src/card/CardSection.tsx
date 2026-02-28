import { CardEntryProps } from "./CardEntry.tsx";

export interface CardSectionProps {
    title: string;
    subtitle?: string;
    entries: Omit<CardEntryProps, "id">[];
}

const CardSection = ({title,})

export default CardSection;