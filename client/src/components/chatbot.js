import React from 'react';
import ChatBot from 'react-simple-chatbot';
import ScoreComponent from './status';

const SimpleForm = () => {
  return (
    <ChatBot
      headerTitle="Please answer a few questions"

      style={{
        width: "100%",
        zIndex: 40,
      }}

      steps={[
        {
          id: '1',
          message: 'Little interest or pleasure in doing things',
          trigger: '1-options',
        },
        {
          id: '1-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '2' },
            { value: 'several days', label: 'Several days', trigger: '2' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '2' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '2' },
          ],
        },
        {
          id: '2',
          message: 'Feeling down, depressed or hopeless',
          trigger: '2-options',
        },
        {
          id: '2-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '3' },
            { value: 'several days', label: 'Several days', trigger: '3' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '3' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '3' },
          ],
        }, {
          id: '3',
          message: 'Trouble falling asleep, staying asleep, or sleeping too much',
          trigger: '3-options',
        },
        {
          id: '3-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '4' },
            { value: 'several days', label: 'Several days', trigger: '4' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '4' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '4' },
          ],
        },
        {
          id: '4',
          message: 'Feeling tired or having little energy',
          trigger: '4-options',
        },
        {
          id: '4-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '5' },
            { value: 'several days', label: 'Several days', trigger: '5' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '5' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '5' },
          ],
        },
        {
          id: '5',
          message: 'Poor appetite or overeating',
          trigger: '5-options',
        },
        {
          id: '5-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '6' },
            { value: 'several days', label: 'Several days', trigger: '6' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '6' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '6' },
          ],
        },
        {
          id: '6',
          message: 'Feeling bad about yourself - or that you’re a failure or have let yourself or your family down',
          trigger: '6-options',
        },
        {
          id: '6-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '7' },
            { value: 'several days', label: 'Several days', trigger: '7' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '7' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '7' },
          ],
        },
        {
          id: '7',
          message: 'Trouble concentrating on things, such as reading the newspaper or watching television',
          trigger: '7-options',
        },
        {
          id: '7-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '8' },
            { value: 'several days', label: 'Several days', trigger: '8' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '8' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '8' },
          ],
        },
        {
          id: '8',
          message: 'Moving or speaking so slowly that other people could have noticed. Or, the opposite - being so fidgety or restless that you have been moving around a lot more than usual',
          trigger: '8-options',
        },
        {
          id: '8-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: '9' },
            { value: 'several days', label: 'Several days', trigger: '9' },
            { value: 'more than half the days', label: 'More than half the days', trigger: '9' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: '9' },
          ],
        },
        {
          id: '9',
          message: 'Thoughts that you would be better off dead or of hurting yourself in some way',
          trigger: '9-options',
        },
        {
          id: '9-options',
          options: [
            { value: 'not at all', label: 'Not at all', trigger: 'score' },
            { value: 'several days', label: 'Several days', trigger: 'score' },
            { value: 'more than half the days', label: 'More than half the days', trigger: 'score' },
            { value: 'nearly every day', label: 'Nearly every day', trigger: 'score' },
          ],
        },
        {
          id: 'score',
          message: 'Calculating your score...',
          trigger: 'calculateScore',
        },
        {
          id: 'calculateScore',
          component: <ScoreComponent />,
          asMessage: true,
          end: true,
        },
      ]}
    />
  );
}

export default SimpleForm;