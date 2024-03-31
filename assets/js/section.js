const docSliderElement = document.querySelector('.container')
const sections = []

const images = []

for (let i = 0; i < 24; i++) {
  sections.push(
    `
      <div class="image-container">
        <img src="./assets/imgs/P-${i < 9 ? `0${i + 1}` : i + 1}.png"
      </div>
    `
  )
}

docSliderElement.innerHTML = sections.join('')
