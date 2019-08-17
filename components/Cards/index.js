// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.


const url2 = "https://lambda-times-backend.herokuapp.com/articles"
//javascript articles
axios.get(url2)
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.javascript})
	.then((list) => {list.forEach((item) => createArticle(item))})

//bootstrap
axios.get(url2)
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.bootstrap})
	.then((list) => {list.forEach((item) => createArticle(item))})

//jquery
axios.get(url2)
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.jquery})
	.then((list) => {list.forEach((item) => createArticle(item))})

//node
axios.get(url2)
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.node})
	.then((list) => {list.forEach((item) => createArticle(item))})

//technology
axios.get(url2)
	.then((response) => {return response.data.articles})
	.then((objObj) => {return objObj.technology})
	.then((list) => {list.forEach((item) => createArticle(item))})





function createArticle(obj){
	//card div
	const card = document.createElement('div')
	card.classList.add('card')
	document.querySelector('.cards-container').appendChild(card)

	//headline div
	const headliner = document.createElement('div')
	headliner.classList.add('headline')
	headliner.textContent = obj.headline
	card.appendChild(headliner)

	//author div
	const author = document.createElement('div')
	author.classList.add('author')
	card.appendChild(author)

	//img-container div
	const imageDiv = document.createElement('div')
	imageDiv.classList.add('img-container')
	author.appendChild(imageDiv)

	//image
	const image = document.createElement('img')
	image.src = obj.authorPhoto
	imageDiv.appendChild(image)

	//span
	const span = document.createElement('span')
	span.textContent = obj.authorName
	author.appendChild(span)

	return card
}
