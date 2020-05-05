function onPermissionError(error) {
	prompt("", "Вы не предоставили доступ к камере/микрофону. Для звонка обновите страницу!\n\n" + error);
}
function onSuccess() {
	// Здесь реализовать таймер
}
function onError(error) {
	alert(error.message);
}