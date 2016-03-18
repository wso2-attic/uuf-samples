function onRequest(context) {
    if (request.method == 'POST') {
        var result = callService('POST', '/', context.formParam);
        if (result.error) {
            response.sendError(500, result.message);
        } else {
            response.sendRedirect(context.app.context + '/pets/' + result.id);
        }
    }
}