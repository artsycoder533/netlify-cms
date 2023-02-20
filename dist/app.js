function renderHero(data) {
  const header = document.querySelector(".hero");
  header.style.backgroundImage = `url('${data.background_image}')`;
  header.querySelector("h1").textContent = data.title;
  header.querySelector("p").textContent = data.subtitle;
}

fetch("/data/hero.yml")
  .then((response) => response.text())
  .then((yaml) => {
    const data = jsyaml.load(yaml);
    renderHero(data);
  });
