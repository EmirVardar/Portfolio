import { useEffect } from 'react';
import { DEFAULT_DESCRIPTION, fullTitle } from '../data/pageMeta';

export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = fullTitle(title);
    document.querySelector('meta[name="description"]')?.setAttribute('content', description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
