import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach!",
  },
  winter: {
    text: 'Burr it is cold!',
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <h1>{text}</h1>
    </div>
  );
};

export default SeasonDisplay;
