import { loadManifest } from '@angular-architects/module-federation';

loadManifest('/assets/config/remotes.json', true)
  .then(() => import('./bootstrap'))
  .catch(err => console.error(err));
