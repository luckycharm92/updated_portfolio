import { profile } from '../data/content.js';

export default function Footer() {
  return (
    <footer className="container footer">
      <div className="contact">
        <h2>Got a project or a role in mind?</h2>
        <p>My inbox is always open.</p>
        <div className="contact__actions">
          <a className="btn btn--white" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          {profile.socials.map((s) => (
            <a key={s.label} className="contact__social" href={s.url} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="copyright">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
