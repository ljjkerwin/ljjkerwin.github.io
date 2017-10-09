(function () {
  if (process.env.NODE_ENV === "development") {
    if (module.hot) {
      const reporter = window.__webpack_hot_middleware_reporter__;
      const success = reporter.success;
      const DEAD_CSS_TIMEOUT = 500;

      reporter.success = function() {
        let links = document.querySelectorAll("link[href][rel=stylesheet]");
        let len = links.length;

        for (let i = 0; i < len; i++) {
          (function (link) {
            let nextStyleHref = link.href.replace(/(\?\d+)?$/, `?${Date.now()}`);
            let newLink = link.cloneNode();
            newLink.href = nextStyleHref;
            link.parentNode.appendChild(newLink);
            setTimeout(() => {
              link.parentNode && link.parentNode.removeChild(link);
            }, DEAD_CSS_TIMEOUT);
          })(links[i]);
        }

        success();
      };
    }
  }
})();