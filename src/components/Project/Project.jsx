export default function Project({ id, img, demo, github }) {
  return (
    <li>
      <div>
        <img src={`${img}.jpg`} />
        <p>{id}</p>
      </div>
      <div></div>
    </li>
  );
}
