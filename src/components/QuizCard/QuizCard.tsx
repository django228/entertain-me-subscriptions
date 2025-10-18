import { classNames } from "helpers/classNames/classNames";
import './QuizCard.scss';
import subscribeIcon from '../../assets/icons/subscribe-button-icon.svg';

interface QuizCardProps {
    index: number;
    icon: string;
    site: string;
    description: string;
    subscribed: boolean;
    onToggleSubscribe: () => void;
}

export const QuizCard = ({ index, icon, site, description, subscribed, onToggleSubscribe }: QuizCardProps) => {
    return (
        <div className="quiz-card">
            <div className="quiz-card__icon">
                <img src={icon} alt={`Quiz ${index + 1}`} />
            </div>
            
            <p className="quiz-card__description">
                {description}
            </p>
            
            <button 
                className={classNames('quiz-card__button', {
                    'quiz-card__button--subscribed': subscribed
                })}
                onClick={onToggleSubscribe}
            >
                {subscribed ? (
                    <>
                        <img src={subscribeIcon} alt="Subscribe" className="quiz-card__button-icon" />
                        Subscribed
                    </>
                ) : (
                    'Subscribe'
                )}
            </button>
        </div>
    );
};

