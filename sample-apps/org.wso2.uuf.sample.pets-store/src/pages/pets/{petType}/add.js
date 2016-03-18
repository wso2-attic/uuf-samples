function onRequest(context) {
    switch (request.method) {
        case 'GET':
            return [{id: 'cat', name: "Cat"}, {id: 'dog', name: "Dog"}, {id: 'bunny', name: "Bunny"}];
        case 'POST':
            var result = callService('POST', '/', context.formParam);
            if (result.error) {
                response.sendError(500, pets.message);
            } else {
                response.sendRedirect(context.app.context + '/pets/' + result.id);
            }
            break;
    }
}