function onPermissionError(error) {
	alert("You are not permit access to camera/microphone for calling. To continue, refresh page!\nError details:\n\n" + error);
}
function onSuccess() {
	//@TODO Realise call timer
}
function onError(error) {
	alert("Error while calling:\n\n" + error.message);
}