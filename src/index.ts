let socket = require("socket.io-client")()

window.addEventListener("DOMContentLoaded", () => {
	const chat = document.getElementById("chat") as HTMLInputElement

	const usernameInput = document.getElementById("username") as HTMLInputElement
	const messageInput = document.getElementById("message") as HTMLInputElement

	document.getElementById("submit").addEventListener("click", () => {
		socket.send(usernameInput.value, messageInput.value)
	})

	socket.on("message", (username, message) => {
		chat.value += `${username}: ${message}` + "\n"
	})
})
