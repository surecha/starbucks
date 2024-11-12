const searchEl = document.querySelector('.search')
//아래는 .search를 다시 찾아서 input을 선택하므로 느림
// const searchInputEl=document.querySelector('.search input');
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
  //돋보기 아이콘을 클릭해도 focus 되도록
  searchInputEl.focus()
})
searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused')
  searchInputEl.setAttribute('placeholder', '통합검색')
})
searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused')
  searchInputEl.setAttribute('placeholder', '')
})

const thisYear = document.querySelector('footer')
thisYear.textContent = new Date().getFullYear() //2024
