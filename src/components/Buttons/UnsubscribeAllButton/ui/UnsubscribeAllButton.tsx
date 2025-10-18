import './UnsubscribeAllButton.scss'
import { ButtonHTMLAttributes } from "react";

interface UnsubscribeAllButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const UnsubscribeAllButton = (props: UnsubscribeAllButtonProps) => {
    const { children, ...otherProps } = props;
    
    return (
        <button
            type="button"
            className="UnsubscribeAllButton"
            {...otherProps}
        >
            {children}
        </button>
    );
};