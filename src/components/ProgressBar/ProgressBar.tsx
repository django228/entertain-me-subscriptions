import './ProgressBar.scss';
import { useAnimatedNumber } from '../../hooks/useAnimatedNumber';

interface ProgressBarProps {
    percentage: number;
}

export const ProgressBar = ({ percentage }: ProgressBarProps) => {
    const animatedPercentage = useAnimatedNumber(percentage, 1000);

    return (
        <div className="progress-bar">
            <div className="progress-bar__header">
                <span className="progress-bar__label">FUN YOU GET</span>
                <span className="progress-bar__percentage">{animatedPercentage}%</span>
            </div>
            
            <div className="progress-bar__track">
                <div 
                    className="progress-bar__fill"
                    style={{ width: `${animatedPercentage}%` }}
                />
            </div>
        </div>
    );
};
