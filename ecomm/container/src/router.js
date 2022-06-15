export class Router {
  constructor(root, routes) {
    this.root = root;
    this.routes = routes;
    this.init();
  }

  init() {
    this.render(this.routes.find((route) => route.path === (window.location.hash || '#')));
    this.onNavigation();
  }

  onNavigation() {
    window.onhashchange = (e) => {
      this.render(this.routes.find((route) => route.path === e.newURL.split('/').pop()));
    };
  }

  navigate(url) {
    window.location.hash = url;
  }

  render(route) {
    if (!route) {
      window.location.hash = this.routes.find((route) => route.default)?.path || '#';
      return;
    }

    if (!route.canActivate || route.canActivate && route.canActivate()) {
      this.root.innerHTML = route.template;
      route.render();
    }
  }
}
