import { UnsubscribeAllButton } from 'components/Buttons/UnsubscribeAllButton';
import React, { useState } from 'react';
import { Sidebar } from "components/Sidebar/ui/Sidebar";
import { QuizCard } from "components/QuizCard";
import { Modal } from "components/Modal";
import { useLocalStorage } from './hooks/useLocalStorage';
import subscriptionsData from './subscribe.json';

interface Subscription {
    site: string;
    subscribed: boolean;
    description: string;
}

export const App = () => {
    const [subscriptions, setSubscriptions] = useLocalStorage<Subscription[]>('subscriptions', subscriptionsData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [oldFunPercentage, setOldFunPercentage] = useState(0);

    const subscribedCount = subscriptions.filter(sub => sub.subscribed).length;
    const funPercentage = Math.round((subscribedCount / subscriptions.length) * 100);

    const handleToggleSubscribe = (index: number) => {
        setSubscriptions(prev => {
            const updated = [...prev];
            updated[index] = { ...updated[index], subscribed: !updated[index].subscribed };
            
            // Выводим JSON в консоль
            console.log('Updated subscriptions:', JSON.stringify(updated, null, 2));
            
            return updated;
        });
    };

    const handleUnsubscribeAll = () => {
        setOldFunPercentage(funPercentage);
        setIsModalOpen(true);
    };

    const handleConfirmUnsubscribe = () => {
        const updated = subscriptions.map(sub => ({ ...sub, subscribed: false }));
        setSubscriptions(updated);
        
        // Выводим JSON в консоль
        console.log('Updated subscriptions:', JSON.stringify(updated, null, 2));
        
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const getIconPath = (index: number) => `/assets/icons/quiz-card-icon_${index + 1}.svg`;
    
    return (
        <div className="container">
            <Sidebar 
                funPercentage={funPercentage} 
                userEmail="harry.simon@yahoo.com" 
            />
            <div className="main-content">
                <div className="main-content__header">
                    <div className="main-content__text">
                        <h2 className="main-content__title">
                            Ok, let's change your preferences
                        </h2>
                        <p className="main-content__description">
                            To unsubscribe, please uncheck the appropriate box(es).
                        </p>
                    </div>
                    <UnsubscribeAllButton onClick={handleUnsubscribeAll}>
                        Unsubscribe from all
                    </UnsubscribeAllButton>
                </div>
            
                <div className="quiz-grid">
                    {subscriptions.map((sub, index) => (
                        <QuizCard
                            key={sub.site}
                            index={index}
                            icon={getIconPath(index)}
                            site={sub.site}
                            description={sub.description}
                            subscribed={sub.subscribed}
                            onToggleSubscribe={() => handleToggleSubscribe(index)}
                        />
                    ))}
                </div>
            </div>
            
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmUnsubscribe}
                title="Are you sure?"
                message={`Please confirm that you want to unsubscribe from all and lose ${oldFunPercentage}% fun.`}
                confirmButtonText="Affirmative"
            />
        </div>
    )
}