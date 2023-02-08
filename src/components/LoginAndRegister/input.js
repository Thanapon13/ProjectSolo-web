export default function Input({
  type,
  placeholder,
  name,
  value,
  onChange,
  autoComplete,
  error
}) {
  return (
    <>
      <input
        type={type || "text"}
        placeholder={placeholder}
        autoComplete={autoComplete}
        name={name}
        value={value}
        onChange={onChange}
      ></input>
      {error && (
        <div style={{ color: "red", fontSize: "0.8rem", textAlign: "left" }}>
          {error}
        </div>
      )}
    </>
  );
}
