/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


function carousel(){
    //component
    const carousel = document.createElement('div')
    carousel.classList.add('carousel')
    document.body.appendChild(carousel)

    //left button
    const left = document.createElement('div')
    left.classList.add('left-button')
    carousel.appendChild(left)

    //first img
    const img1 = document.createElement('img')
    img1.src = "#"
    carousel.appendChild(img1)

    //second img
    const img2 = document.createElement('img')
    img2.src = "#"
    carousel.appendChild(img2)

    //third img
    const img3 = document.createElement('img')
    img3.src = "#"
    carousel.appendChild(img3)


    //fourth img
    const img4 = document.createElement('img')
    img4.src = "#"
    carousel.appendChild(img4)


    //right button
    const right = document.createElement('div')
    right.classList.add('right-button')
    carousel.appendChild(right)

    return carousel

}

carousel()


let ind = 0
function increment(n, cb){
    return n +1
}

function decrement(n, cb){
    return n-1
}


///event listeners 
const leftButton = document.querySelector('.left-button')
leftButton.addEventListener('click', increment)

const rightButton = document.querySelector('.right-button')
leftButton.addEventListener('click', decrement)



console.log(document.querySelectorAll('.img-container'))

