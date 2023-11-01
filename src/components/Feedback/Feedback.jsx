import React, { useState } from 'react';
import css from './Feedback.module.css';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Section from './Section';
import Statistics from './Statistics';

export default function Feedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleOption(option) {
    switch (option) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
    }
  }

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countPositiveFeedbackPercentage() {
    const total = countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }

  const totalFeedback = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleOption}
        />
      </Section>
      {totalFeedback === 0 ? (
        <Notification message={'There is no feedback'} />
      ) : (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        </Section>
      )}
    </div>
  );
}
