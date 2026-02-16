export default function Pad({ color, on , onClick, id}) {

  return (
    <>
      <button
        style={{ backgroundColor: color }}
        className={on ? "on" : null}
        onClick={() => onClick(id)}
      ></button>
    </>
  );
}
