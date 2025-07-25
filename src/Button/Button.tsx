export type Props = {
    title: string;
    callback?: () => void
    disabled?: boolean;
}

export const Button = ({ callback, title, disabled }: Props) => {
    return (
        <button onClick={callback} disabled={disabled}>{title}</button>
    );
};