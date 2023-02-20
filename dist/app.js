function renderHero(data) {
  const header = document.querySelector(".hero");
  header.style.backgroundImage = `url('${data.background_image}')`;
  header.querySelector("h1").textContent = data.heading;
  header.querySelector("p").textContent = data.subheading;
}

fetch("./data/hero.yml")
  .then((response) => response.text())
  .then((yaml) => {
    const data = jsyaml.load(yaml);
    renderHero(data);
  });
