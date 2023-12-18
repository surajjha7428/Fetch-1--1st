
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('fetchUsersBtn').addEventListener('click', fetchUsers);

    function fetchUsers() {
        fetch('https://reqres.in/api/users')
            .then(response => response.json())
            .then(data => {
                displayUsers(data.data);
            })
            .catch(error => {
                console.error("There was an error fetching users:", error);
            });
    }

    function displayUsers(users) {
        const usersList = document.getElementById('usersList');
        if (!usersList) return; 

        usersList.innerHTML = ''; 

        users.forEach(user => {
            const userCard = document.createElement('div');
            userCard.classList.add('user-card');

            const avatar = document.createElement('img');
            avatar.src = user.avatar;
            avatar.alt = 'User Avatar';

            const userDetails = document.createElement('div');
            userDetails.classList.add('user-details');

            const name = document.createElement('span');
            name.classList.add('name');
            name.textContent = user.first_name;

            const email = document.createElement('span');
            email.classList.add('email');
            email.textContent = user.email;

            userDetails.appendChild(name);
            userDetails.appendChild(email);

            userCard.appendChild(avatar);
            userCard.appendChild(userDetails);

            usersList.appendChild(userCard);
        });
    }
});

