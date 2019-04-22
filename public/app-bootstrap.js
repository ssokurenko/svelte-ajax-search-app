(function(d) {
  var container = d.createElement('div');
  container.id = 'svelte-container';
  d.body.appendChild(container);

  var script = d.createElement('script');
  script.type = 'text/javascript';
  script.src = '//svelte-ajax.surge.sh/app.js';
  d.body.appendChild(script);

  var theme = d.createElement('link');
  theme.rel = 'stylesheet';
  theme.type = 'text/css';
  theme.href = '//svelte-ajax.surge.sh/themes/blue.css';
  d.body.appendChild(theme);

}(document));
