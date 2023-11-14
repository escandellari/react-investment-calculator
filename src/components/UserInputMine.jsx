export default function UserInput({ name, onChangeValue }) {
  function handleChange(event) {
    onChangeValue(name, event.target.value);
  }

  return (
    <li>
      <label>{name}</label>
      <input type="text" onChange={handleChange} />
    </li>
  );
}
