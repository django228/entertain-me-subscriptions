import { useState, useEffect } from 'react';

export const useAnimatedNumber = (targetValue: number, duration: number = 1000) => {
    const [currentValue, setCurrentValue] = useState(0);

    useEffect(() => {
        const startValue = currentValue;
        const difference = targetValue - startValue;
        const startTime = Date.now();

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // для более плавной анимации
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            
            const newValue = Math.round(startValue + (difference * easeOutQuart));
            setCurrentValue(newValue);

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [targetValue, duration]);

    return currentValue;
};
