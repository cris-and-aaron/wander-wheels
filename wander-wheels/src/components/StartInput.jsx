const StartingInput = ({state, setter}) => {
    return (
      <input
        type="text"
        placeholder="From..."
        className="input"
        name="start"
        required
        value={state}
        onChange={(e) => setter(e.target.value)}
      />
    );
}
export default StartingInput;