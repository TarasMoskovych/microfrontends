import { getManifest, loadRemoteModule, LoadRemoteModuleOptions } from '@angular-architects/module-federation';
import { WebComponentWrapper } from '@angular-architects/module-federation-tools';
import { Route } from '@angular/router';

export interface Remote {
  title: string;
  path: string;
  load: 'loadComponent' | 'loadChildren';
  type: 'module' | 'script' | 'manifest' | undefined;
  data: RemoteData;
}

export interface RemoteData {
  remoteName: string,
  remoteEntry: string;
  remoteApp: string;
  exposedModule: string;
  entryModule: string;
  elementName: string;
}

export const getRemoteRoutes = () => {
  return (Object.values(getManifest()['routes']) as Remote[])
    .filter((remote: Remote) => remote.path)
    .map(({ path, data, title, load, type }: Remote) => {
      const route: Route = { title, path, data };

      if (['loadComponent', 'loadChildren'].includes(load)) {
        const { remoteEntry, exposedModule, entryModule } = data;

        Object.assign(route, {
          [load]: () => loadRemoteModule({
            type,
            remoteEntry,
            exposedModule,
          } as LoadRemoteModuleOptions).then(m => m[entryModule]),
        });
      } else {
        Object.assign(route, { component: WebComponentWrapper });
      }

      return route;
    });
};
