(() => {
  const exampleDomain = document.querySelector('h1');
  let h2 = document.createElement("h2");
  h2.innerHTML = 'Welcome';
  exampleDomain.prepend(h2);
})();