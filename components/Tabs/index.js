// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


const url = "https://lambda-times-backend.herokuapp.com/topics"

// console logged the url response
// axios.get(url)
// 	.then((response) => {console.log(response)})

// iterate over topics and create new tabs

function createTab(item){
	const tab = document.createElement('div')
	tab.classList.add('tab')
	tab.textContent = item
	document.querySelector('.topics').appendChild(tab)

	return tab
}

axios.get(url)
	.then((response) => {return response.data.topics})
	.then((list) => {list.forEach((item) => createTab(item))})