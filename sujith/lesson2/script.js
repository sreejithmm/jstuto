function fetchData()
{
	let req = new XMLHttpRequest()
	req.open('GET', 'https://jsonplaceholder.typicode.com/todos/1');
	req.onload = function ()
	{
		let data = JSON.parse(this.response)

		if (req.status >= 200 && req.status < 400) {
			const res = document.getElementById('data')
			filldata(res, data.userId)
			filldata(res, data.id)
			filldata(res, data.title)
			filldata(res, data.completed)
		} else {
			const res = document.getElementById('data')
			res.innerHTML = "Kaliyan sakhavu neethi palikkukka"
		}
	}

	req.onerror = function ()
	{
		const res = document.getElementById('data')
		res.innerHTML = "Kaliyan neethi palikkukka"
	}
	req.send();
}

function filldata(container, data)
{
	const child = document.createElement('div')
	child.setAttribute('class', 'myd')
	child.innerHTML = data;
	container.appendChild(child)
}