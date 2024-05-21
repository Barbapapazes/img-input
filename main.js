const input = document.querySelector('input')
const img = document.querySelector('img')

input.addEventListener('change', (event) => {
  const target = event.target

  const [file] = target.files

  const fileSrc = URL.createObjectURL(file)
  img.src = fileSrc

  // https://stackoverflow.com/questions/4459379/preview-an-image-before-it-is-uploaded
})
