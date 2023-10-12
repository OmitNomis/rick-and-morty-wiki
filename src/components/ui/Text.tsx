import { Lora } from "next/font/google";
type TextProps = {
    className?: string;
    tag?: "span" | "p" | "h1" | "h2" | "h3";
    font?: 'lora' | 'inter';
    lora?: boolean;
    id?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
    children: React.ReactNode;
};

const fontLora = Lora({ subsets: ["latin"] });
export const Text: React.FC<TextProps> = ({
    className,
    tag = "span",
    id,
    style,
    font = "inter",
    onClick,
    onMouseEnter,
    onMouseLeave,
    children,
}) => {

    const getFont = (font: string) => {
        switch (font) {
            case 'lora':
                return fontLora.className;
            case 'inter':
                return; // default font coming from layout
        }
    }

    const Tag = tag;

    return (
        <Tag
            id={id}
            className={`${getFont(font)} text-black dark:text-white ${className}`}
            style={style}
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {children}
        </Tag>
    );
};
