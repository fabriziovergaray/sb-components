import './MyLabel.css'

interface Props {
    /**
     * Text to display
     */
    label: string;
    /**
     * Label size
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';

    /**
     * Capitalize all letters
     */
    allCaps?: boolean;

    /**
     * Label color
     */
    color?: 'text-primary' | 'text-secondary' | 'text-tertiary'

    /**
     *Font Color
     */
    fontColor?: string
}


export const MyLabel = ({ label, size = 'normal', allCaps = false, color = 'text-primary', fontColor }: Props) => {
    return (
        <span style={{ textTransform: allCaps ? 'uppercase' : 'lowercase', color: fontColor }} className={`${size} ${color} label`}>{label}</span>
    )
}
