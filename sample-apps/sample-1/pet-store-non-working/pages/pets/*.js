function onRequest(context) {
    var pet = callService('GET', '/' + context.uriParams.id);
    if (!pet.img) {
        pet.img = context.app.context + '/public/app/images/pet.png';
    }
    return pet;
}
