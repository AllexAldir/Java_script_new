$(window).on('load', function () {
    $.get({
        url: 'https://jsonplaceholder.typicode.com/comments?postId=1',
        method: 'GET',
        success: function (response) {
            //console.log(response)
            response.forEach(e => {
                $('#teste').append(`<tr><td>${e.id}</td><td>${e.email}</td><td>${e.name}</td></tr>`)
            });
        }
    })
})