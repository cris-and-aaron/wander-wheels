const EndInput = ({state, setter}) => {
  return <input type="text" placeholder="To..." className="input" name="end" required value={state} onChange={e => setter(e.target.value)}/>;
};
export default EndInput;
