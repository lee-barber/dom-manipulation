var imright = document.getElementById('box1')
var noimright = document.getElementById('box2')


imright.addEventListener('click', text)
noimright.addEventListener('click', text2)

	function text(){
		imright.innerHTML = 'I am right!'
	}

	function text2(){
		imright.innerHTML = "No, I'm right!"
	}
