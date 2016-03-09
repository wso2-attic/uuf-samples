function onRequest(context) {
    var pet = callService('GET', '/pets?id=' + context.uriParams.id);
    if (pet.price == 0) {
        pet.price = 'Free !!!';
    }
    if (!pet.imgUrl) {
        pet.imgUrl = context.app.context + '/public/app/images/pet.png';
    }
    return pet;
}