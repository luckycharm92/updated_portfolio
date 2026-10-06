import { projects } from '../data/content.js';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Projects() {
  usePageTitle('Projects');

  return (
    <>
      <PageHeader
        sticker="my favourite bit"
        title="Things I've built"
        intro="Side projects, experiments and things that solved a real problem for someone."
      />
      <div className="grid">
        {projects.map((p) => (
          <article key={p.name} className="card project">
            <div className="project__shot" style={{ backgroundColor: p.tint }}>
              {p.image ? (
                <img src={`./${p.image}`} alt={`Screenshot of ${p.name}`} />
              ) : (
                <span className="placeholder">Screenshot</span>
              )}
            </div>
            <h2 className="card__title">{p.name}</h2>
            <p>{p.blurb}</p>
            <ul className="tags" aria-label="Tech stack">
              {p.stack.map((s) => <li key={s} className="tag">{s}</li>)}
            </ul>
            {(p.demo || p.code) && (
              <div className="project__links">
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer">Live demo</a>}
                {p.code && <a href={p.code} target="_blank" rel="noreferrer">Source code</a>}
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  );
}
