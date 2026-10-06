import Sticker from './Sticker.jsx';

export default function PageHeader({ sticker, title, intro }) {
  return (
    <header className="page-header">
      <Sticker tilt={-3}>{sticker}</Sticker>
      <h1>{title}</h1>
      {intro && <p className="lead">{intro}</p>}
    </header>
  );
}
