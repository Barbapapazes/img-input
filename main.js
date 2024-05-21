const input = document.querySelector('input')
const img = document.querySelector('img')

input.addEventListener('change', (event) => {
  const target = event.target

  const [file] = target.files

  const fileSrc = URL.createObjectURL(file)
  img.src = fileSrc
})
