;(function() {
	"use strict";

	var userLogin = prompt("Кто пришел?");

	if (userLogin != null && userLogin != "" ) {
		if (userLogin == "Админ") {
			var password = prompt("Введите пароль!");
			if (password != null) {
				if (password == "Черный Властелин") {
					console.log("Добро пожаловать!");
				} else {
					console.log("Пароль неверен!");
				}
			} else {
				console.log("Вход отменен.");
			}
		} else {
			console.log("Я вас не знаю");
		}
	} else {
		console.log("Вход отменен.");
	}
})();
