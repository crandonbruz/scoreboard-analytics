const newFormHandler = async (event) => {
  event.preventDefault();

  
  const teamName  = document.querySelector('#teamName').value.trim();
  const pitcherName  = document.querySelector('#pitcherName').value.trim();
  
  const firstBase  = document.querySelector('#firstBase').value.trim();
  const secondBase  = document.querySelector('#secondBase').value.trim();
  
  const thirdBase  = document.querySelector('#thirdBase').value.trim();
  const shortStop  = document.querySelector('#shortStop').value.trim();
  
  const catcher  = document.querySelector('#catcher').value.trim();
  const leftField  = document.querySelector('#leftField').value.trim();
  
  const centerField  = document.querySelector('#centerField').value.trim();
  const rightField  = document.querySelector('#rightField').value.trim();
  const dh  = document.querySelector('#dh').value.trim();
  
  


  if (  teamName && pitcherName && firstBase && secondBase && thirdBase && shortStop && catcher && leftField && centerField && rightField && dh) {
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({  teamName, pitcherName, firstBase, secondBase, thirdBase, shortStop, catcher, leftField, centerField, rightField, dh  }),
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

document
  .querySelector('.post-list')
  .addEventListener('click', delButtonHandler);
