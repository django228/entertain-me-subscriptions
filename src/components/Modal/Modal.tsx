import { classNames } from "helpers/classNames/classNames";
import './Modal.scss';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmButtonText: string;
}

export const Modal = ({ 
    isOpen, 
    onClose, 
    onConfirm, 
    title, 
    message, 
    confirmButtonText 
}: ModalProps) => {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal">
                <div className="modal__header">
                    <h2 className="modal__title">{title}</h2>
                    <button 
                        className="modal__close" 
                        onClick={onClose}
                        aria-label="Close modal"
                    >
                        ×
                    </button>
                </div>
                
                <div className="modal__body">
                    <p className="modal__message">{message}</p>
                </div>
                
                <div className="modal__footer">
                    <button 
                        className="modal__confirm-button"
                        onClick={onConfirm}
                    >
                        {confirmButtonText}
                    </button>
                </div>
            </div>
        </div>
    );
};
