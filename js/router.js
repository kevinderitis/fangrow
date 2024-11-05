const router = {
    routes: {
        '/': () => components.homePage(),
        '/platform/:id': (params) => components.platformPage(params.id)
    },

    navigate: function(path) {
        const route = this.matchRoute(path);
        if (route) {
            history.pushState(null, '', path);
            this.handleRoute();
        }
    },

    matchRoute: function(path) {
        for (const routePath in this.routes) {
            const pattern = new RegExp('^' + routePath.replace(/:(\w+)/g, '([^/]+)') + '$');
            const match = path.match(pattern);
            if (match) {
                const params = {};
                const paramNames = (routePath.match(/:\w+/g) || []).map(param => param.slice(1));
                paramNames.forEach((param, index) => {
                    params[param] = match[index + 1];
                });
                return { handler: this.routes[routePath], params };
            }
        }
        return null;
    },

    handleRoute: function() {
        const path = window.location.pathname;
        const route = this.matchRoute(path);
        if (route) {
            const content = route.handler(route.params);
            document.getElementById('app').innerHTML = content;
        } else {
            document.getElementById('app').innerHTML = '<h1>404 - Page Not Found</h1>';
        }
    }
};

window.addEventListener('popstate', () => router.handleRoute());
window.addEventListener('load', () => router.handleRoute());