export default function Pad({ color, on }) {
  return (
    <>
      <button
      style={{ backgroundColor: color}}
      className={on ?  "on" : null}
      >

      </button>
    </>
  );
}
