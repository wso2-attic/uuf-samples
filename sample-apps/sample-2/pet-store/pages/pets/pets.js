function onRequest(context) {
    var pets = callService('GET','/all');
    for (var i = 0; i < pets.length; i++) {
        var pet = pets[i];
        if(pet.price == 0) {
            pet.price = 'Free !!!';
        }
        if(!pet.img) {
            pet.img = context.app.context + '/public/app/images/pet.png';
        }
    }

    return pets;
}
