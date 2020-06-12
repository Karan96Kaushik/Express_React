const axios = require("axios")
const { PythonShell } = require("python-shell")

// let pyshell = new PythonShell('gogoanime_get_link.py');

var link = "https://gogoanimetv.io/anime/hunter-x-hunter-2011-dub-/12189/"

axios.get(link)
	.then(function (response) {
		// console.log(response);
		console.log(response.status);

		let options = {
			mode: 'text',
			// pythonPath: './gogoanime_get_link.py',
			pythonOptions: ['-u'], // get print results in real-time
			// scriptPath: 'gogoanime_get_link.py',
			args: [response.data, 'value2', 'value3']
		};

		PythonShell.run('gogoanime_get_eps.py', options, function (err, results) {
			if (err) throw err;

			var El = JSON.parse(results[0])[0]

			axios.get(El.value).then(function (response) {
				// console.log(response);
				console.log(response.status);

				let options = {
					mode: 'text',
					// pythonPath: './gogoanime_get_link.py',
					pythonOptions: ['-u'], // get print results in real-time
					// scriptPath: 'gogoanime_get_link.py',
					args: [response.data, 'value2', 'value3']
				};

				PythonShell.run('gogoanime_get_vid.py', options, function (err, results) {
					if (err) throw err;
					var El = JSON.parse(results[0])

					console.log(El.name, El.link)
					
					
				});

			})
				.catch(function (error) {
					console.log(error);
				})

			JSON.parse(results[0]).forEach(element => {
				console.log(element)

				if (false)
					axios.get(link)
						.then(function (response) {
							// console.log(response);
							console.log(response.status);

							let options = {
								mode: 'text',
								// pythonPath: './gogoanime_get_link.py',
								pythonOptions: ['-u'], // get print results in real-time
								// scriptPath: 'gogoanime_get_link.py',
								args: [response.data, 'value2', 'value3']
							};

							PythonShell.run('gogoanime_get_vid.py', options, function (err, results) {
								if (err) throw err;
								JSON.parse(results[0]).forEach(element => {
									console.log(element)
								});
							});

						})
						.catch(function (error) {
							console.log(error);
						})
						.finally(function () {
							// always executed
						});
			});
		});

	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
		// always executed
	});