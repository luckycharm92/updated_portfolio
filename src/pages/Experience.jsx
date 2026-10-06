import { experience } from '../data/content.js';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Experience() {
  usePageTitle('Experience');

  return (
    <>
      <PageHeader
        sticker="internships & programmes"
        title="Experience"
        intro="Where I've worked, what I built, and what I learned along the way."
      />
      <ol className="timeline">
        {experience.map((job) => (
          <li key={`${job.org}-${job.role}`} className="timeline__item">
            <p className="timeline__dates">{job.dates}</p>
            <article className="card">
              <div className="job__head">
                {job.logo && (
                  <img className="job__logo" src={`./${job.logo}`} alt={`${job.org} logo`} />
                )}
                <div>
                  <h2 className="card__title">{job.role}</h2>
                  <p className="card__meta">{job.org} · {job.location}</p>
                </div>
              </div>
              <ul className="card__points">
                {job.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
              <ul className="tags" aria-label="Skills">
                {job.tags.map((t) => <li key={t} className="tag">{t}</li>)}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </>
  );
}
