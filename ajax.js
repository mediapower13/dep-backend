document.getElementById('searchBtn').addEventListener('click', function () {
  const username = document.getElementById('username').value;
  const profileDiv = document.getElementById('profile');
  
  // Clear previous results
  profileDiv.innerHTML = '';

  // GitHub API URL
  const url = `https://api.github.com/users/${username}`;

  // AJAX call to fetch user data
  fetch(url)
      .then(response => {
          if (!response.ok) {
              throw new Error('User not found');
          }
          // if not return 
          return response.json();
      })
      .then(data => {
          // Create and display profile information
          const profileHTML = `
              <div class="user-profile">
                  <img src="${data.avatar_url}" alt="${data.login}" class="avatar">
                  <h2>${data.name}</h2>
                  <p>Username: <strong>${data.login}</strong></p>
                  <p>Followers: ${data.followers}</p>
                  <p>Following: ${data.following}</p>
                  <p>Public Repos: ${data.public_repos}</p>
                  <a href="${data.html_url}" target="_blank">View Profile on GitHub</a>
              </div>
          `;
          profileDiv.innerHTML = profileHTML;
      })
      .catch(error => {
          profileDiv.innerHTML = `<p class="error">${error.message}</p>`;
      });
});
 