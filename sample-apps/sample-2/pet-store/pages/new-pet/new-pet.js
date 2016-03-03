function onRequest(context) {
    if (context.method == 'POST') {
        var pet = callService('POST', '/', context.formParam);
        if (!pet.error) {
            response.sendRedirect(context.app.context + '/pets/' + pet.id);
        } else {
            response.sendError('500');
        }
    }
}