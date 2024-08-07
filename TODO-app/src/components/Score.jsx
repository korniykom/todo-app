/* eslint-disable react/prop-types */
export default function Score({ currentValue, maxValue }) {
  return (
    <p>
      {currentValue}/{maxValue}
    </p>
  );
}
