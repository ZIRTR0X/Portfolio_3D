$.ajax({
    url: '/infos',
    type: 'GET',
    dataType: 'json',
})
.done(function(data) {
    createAllProjects(data);
})
.fail(function() {
    console.log("Erreur lors de la requête AJAX");
});
