import React from 'react';

const ScoreComponent = ({ steps }) => {
    const score = Object.values(steps)
       .filter(step => step.value !== undefined)
       .reduce((total, step) => {
         switch (step.value) {
           case 'not at all':
             return total + 0;
           case 'several days':
             return total + 1;
           case 'more than half the days':
             return total + 2;
           case 'nearly every day':
             return total + 3;
           default:
             return total;
         }
       }, 0);
   
    let diagnosis = '';
    let treatmentActions = '';
   
    if (score >= 0 && score <= 4) {
       diagnosis = 'None-minimal';
       treatmentActions = 'None';
    } else if (score >= 5 && score <= 9) {
       diagnosis = 'Mild';
       treatmentActions = 'Watchful waiting; repeat PHQ-9 at follow-up';
    } else if (score >= 10 && score <= 14) {
       diagnosis = 'Moderate';
       treatmentActions = 'Treatment plan, considering counseling, follow-up and/or pharmacotherapy';
    } else if (score >= 15 && score <= 19) {
       diagnosis = 'Moderately Severe';
       treatmentActions = 'Active treatment with pharmacotherapy and/or psychotherapy';
    } else if (score >= 20 && score <= 27) {
       diagnosis = 'Severe';
       treatmentActions = 'Immediate initiation of pharmacotherapy and, if severe impairment or poor response to therapy, expedited referral to a mental health specialist for psychotherapy and/or collaborative management';
    }
   
    return (
       <div>
         <p>Your PHQ-9 score is: <strong>{score}</strong></p>
         <p>Diagnosis: <strong>{diagnosis}</strong></p>
         <p>Proposed Treatment Actions: <strong>{treatmentActions}</strong></p>
       </div>
    );
   };
   
   export default ScoreComponent;
   