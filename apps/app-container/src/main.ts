import { setRemoteDefinitions } from '@nrwl/angular/mf';

fetch('/config/config.json')
  .then((config) => config.json())
  .then((config) => setRemoteDefinitions(config.remotes))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
