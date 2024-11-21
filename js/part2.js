const userList = document.getElementById("user-list");

document.addEventListener("DOMContentLoaded", async () => {
    // This function should GET the first page of users from reqres.in.
    // The users should be displayed in the user-list element.
    // Each user should be in a new <div> with the user's first name, last name, and profile image.
    // The format should follow the example user in the HTML file.

    // TODO

    let res = await fetch('https://reqres.in/api/users');
    let users = (await res.json()).data;

    const userList = document.getElementById('user-list');

    users.forEach(user => {
        let name = user.first_name + ' ' + user.last_name;

        let div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = '<h2>' + name + '</h2>'

        let img = document.createElement('img');
        img.src = user.avatar;
        img.alt = name;
        div.appendChild(img);

        userList.appendChild(div);

    });
});
