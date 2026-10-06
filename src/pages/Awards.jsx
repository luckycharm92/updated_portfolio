import { awards, leadership } from '../data/content.js';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="14" r="6" />
      <path d="M8.5 9.2 6 3h4l2 4 2-4h4l-2.5 6.2" />
      <path d="m12 11.5.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 13.6l2-.3z" />
    </svg>
  );
}

export default function Awards() {
  usePageTitle('Awards & Leadership');

  return (
    <>
      <PageHeader
        sticker="humble brag"
        title="Awards & leadership"
        intro="A few moments I'm proud of:"
      />
      <div className="two-col">
        <section aria-labelledby="awards-title">
          <h2 id="awards-title" className="section__title">Awards</h2>
          <div className="stack">
            {awards.map((a) => (
              <article key={a.title} className="card award">
                <span className="award__medal"><MedalIcon /></span>
                <div>
                  <h3 className="card__title">{a.title}</h3>
                  <p className="card__meta">{a.issuer} · {a.date}</p>
                  <p>{a.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="leadership-title">
          <h2 id="leadership-title" className="section__title">Leadership</h2>
          <div className="stack">
            {leadership.map((l) => (
              <article key={l.title} className="card card--dark">
                <h3 className="card__title">{l.title}</h3>
                <p className="card__meta">{l.org} · {l.date}</p>
                <p>{l.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
