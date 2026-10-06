import { Link } from 'react-router-dom';
import { profile, about } from '../data/content.js';
import Sticker from '../components/Sticker.jsx';
import Highlight from '../components/Highlight.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function Home() {
  usePageTitle('');

  return (
    <>
      <section className="hero">
        <div className="hero__text">
          <Sticker tilt={-3}>{profile.greeting}</Sticker>
          <h1 className="hero__title">
            <Highlight text={profile.headline} />
          </h1>
          <p className="lead">{profile.intro}</p>
          <div className="hero__actions">
            <Link to="/projects" className="btn btn--primary">View projects</Link>
          </div>
        </div>

        <div className="hero__photo-wrap">
          <div className="hero__photo">
            {profile.photo ? (
              <img src={`./${profile.photo}`} alt={`Portrait of ${profile.name}`} />
            ) : (
              <span className="placeholder">[your photo or illustrated avatar]</span>
            )}
          </div>
          <Sticker variant="yellow" tilt={-6} className="hero__sticker">
            {profile.photoSticker}
          </Sticker>
        </div>
      </section>

      <section className="section" aria-labelledby="about-title">
        <h2 id="about-title" className="section__title">A bit about me</h2>
        <div className="tiles">
          <div className="tile tile--dark tile--wide">
            <p>{about.story}</p>
          </div>
          <div className="tile tile--yellow">
            <span className="tile__label">fun fact</span>
            <p>{about.funFact}</p>
          </div>
          {about.tiles.map((t) => (
            <div key={t.title} className="tile">
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
