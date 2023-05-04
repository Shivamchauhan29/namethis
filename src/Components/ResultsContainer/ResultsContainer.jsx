import React from 'react';
import './ResultsContainer.css'
import NameCard from '../Namecard/Namecard';

const ResultsContainer= ({ suggestedNames }) => {

    const suggestnamejsx = suggestedNames.map((suggestedName) => {
        return <NameCard key={suggestedName} suggestedName={suggestedName} />
    });

    return (
        <div className='results-container'>{suggestnamejsx}</div>
            
    )
}

export default ResultsContainer;