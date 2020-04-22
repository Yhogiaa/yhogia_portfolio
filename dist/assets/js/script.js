function project() {
    $.getJSON('data/project.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#project').append('<section class="spotlight"> <div class="image"><img src="images/' + data.img + '" alt="" /></div> <div class="content"> <h2>' + data.projectName + '</h2> <p> Technology : ' + data.technology + '</p></div></section>');
        });
    });
}

function experience() {
    $.getJSON('data/experience.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#experience').append('<li class="icon solid fa-laptop"><h3> ' + data.workPlace + ' (' + data.workYear + ') </h3 > <p> ' + data.workDetail.join('<br/>') + '</p> </li > ');
        });
    });
}

function training() {
    $.getJSON('data/training.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#table').append('<tr> <th>' + data.no + '</th> <td>' + data.year + '</td> <td>' + data.description + '</td> </tr>');
        });
    });
}

function profile() {
    $.getJSON('data/profile.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#profile').append('<div class="div-img"><img src="images/' + data.img + '" class="img-circle"></div><div id="profile" class="inner"><h2>Hello</h2> <p> My Name is ' + data.name + ' <br /> and <br /> I am a ' + data.job + ' </p></div> ');
        });
    });
}

function about() {
    $.getJSON('data/profile.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#about').append('<p>' + data.about + '</p>');
        });
    });
}

function link() {
    $.getJSON('data/profile.json', function (data) {
        let entity = data.data;
        $.each(entity, function (i, data) {
            $('#link').append('<li><a href="' + data.linkin + '" class="icon brands fa-linkedin"><span class="label">Linkedin</span></a></li> <li><a href="' + data.github + '" class="icon brands fa-github"><span class="label">Github</span></a></li> <li><a href="' + data.facebook + '" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li> <li><a href="' + data.instagram + '" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li> <li><a href="' + data.email + '" class="icon solid fa-envelope"><span class="label">Email</span></a></li>');
        });
    });
}




profile();
about();
project();
experience();
training();
link();

