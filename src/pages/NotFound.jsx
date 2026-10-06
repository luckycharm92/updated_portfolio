import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader.jsx';
import usePageTitle from '../components/usePageTitle.js';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <div className="not-found">
      <PageHeader
        sticker="404"
        title="This page wandered off."
        intro="The link might be old, or it might have a typo. Either way, home is just a click away."
      />
      <Link to="/" className="btn btn--primary">Take me home</Link>
    </div>
  );
}
