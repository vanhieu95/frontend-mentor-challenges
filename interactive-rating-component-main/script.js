const reviewRating = document.querySelector('[data-state="rating"]')
const reviewResult = document.querySelector('[data-state="result"]')
const reviewForm = document.querySelector('.review__form')
const result = document.querySelector('[data-result]')

reviewForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const data = new FormData(e.target)
  const rating = data.get('rating')

  reviewRating.dataset.display = 'false'
  reviewResult.dataset.display = 'true'

  result.textContent = rating;
})
