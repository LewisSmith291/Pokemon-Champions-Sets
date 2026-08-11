import { useSyncExternalStore } from 'react';

const query = window.matchMedia('(prefers-color-scheme: dark)');

function subscribe(onChange: () => void) {
  query.addEventListener('change', onChange);
  return () => query.removeEventListener('change', onChange);
}

export default function usePrefersDark() {
  return useSyncExternalStore(subscribe, () => query.matches);
}