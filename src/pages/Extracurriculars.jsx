import { extracurriculars } from '../data/content.js';
import PageHeader from '../components/PageHeader.jsx';
import Sticker from '../components/Sticker.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Extracurriculars() {
  usePageTitle('Extracurriculars');

  return (
    <>
      <PageHeader
        sticker="off the clock"
        title="Extracurriculars"
        intro="The clubs, events and hobbies that keep me curious outside of work."
      />
      <div className="grid">
        {extracurriculars.map((x, i) => (
          <article
            key={x.name}
            className="card note"
            style={{ '--tilt': `${i % 2 === 0 ? -0.8 : 0.8}deg` }}
          >
            {x.sticker && (
              <Sticker variant="yellow" tilt={4} className="note__sticker">{x.sticker}</Sticker>
            )}
            <h2 className="card__title">{x.name}</h2>
            <p className="card__meta">{x.role} · {x.dates}</p>
            <p>{x.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
