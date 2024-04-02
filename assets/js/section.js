const docSliderElement = document.querySelector(".container");
const sections = [];

const imageNames = [
  "P-01.png",
  "P-02.png",
  "P-03.jpg",
  "P-04.png",
  "P-05.png",
  "P-06.png",
  "P-07.png",
  "P-08.png",
  "P-09.png",
  "P-10.png",
  "P-11.png",
  "P-12.png",
  "P-13.png",
  "P-14.png",
  "P-15.png",
  "P-16.png",
  "P-17.png",
  "P-18.png",
  "P-19.png",
  "P-20.png",
  "P-21.png",
  "P-22.png",
  "P-23.jpg",
  "P-24.png",
];

for (let i = 0; i < imageNames.length; i++) {
  sections.push(
    `
      <div class="image-container">
        <img src="./assets/imgs/${imageNames[i]}"
      </div>
    `
  );
}
docSliderElement.innerHTML = sections.join("");
