function onRequest(context) {
    return callService('GET','/' + context.uriParams.id);
}
