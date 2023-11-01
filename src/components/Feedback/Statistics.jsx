import React from 'react';
import css from './Feedback.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) {
  return (
    <div>
      <p className={css.item}>Good:{good}</p>
      <p className={css.item}>Neutral:{neutral}</p>
      <p className={css.item}>Bad:{bad}</p>
      <p className={css.total}>Total:{total}</p>
      <p className={css.total}>Positive feedback:{positiveFeedback}%</p>
    </div>
  );
}
