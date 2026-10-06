import { useEffect } from 'react';
import { profile } from '../data/content.js';

// Sets the browser tab title, e.g. "Projects — [Your Name]".
export default function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — ${profile.name}` : profile.name;
  }, [title]);
}
