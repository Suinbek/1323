image_array = [
  '1.jpg',
  '2.jpg',
  '3.jpg'
]

function get_random_image(){

  random_index = Math.floor(Math.random() * image_array.length);

  selected_image = image_array[random_index]

  document.getElementById('image_shower').src = `./1323/${selected_image}`
}
