const newFormHandler = async (event) => {
  event.preventDefault();

  const playerName = document.querySelector('#playerName').value.trim();
  const teamName  = document.querySelector('#teamName').value.trim();
  const pitcherName  = document.querySelector('#pitcherName').value.trim();
  const winLose  = document.querySelector('#teamName').value.trim();
  


  if (playerName && teamName && pitcherName && winLose) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({ playerName, teamName  }),
      headers: {
        'teamName -Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create post');
    }
  }
};

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete post');
    }
  }
};

document
  .querySelector('.new-post-form')
  .addEventListener('submit', newFormHandler);

// document
  // .querySelector('.post-list')
  // .addEventListener('click', delButtonHandler);
