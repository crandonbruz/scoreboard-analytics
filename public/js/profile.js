const newFormHandler = async (event) => {
  event.preventDefault();

  console.log('Form submit button clicked');
  
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
  
  console.log('Team Name:', teamName);
  // ... other fields ...
console.log({teamName, pitcherName, firstBase, secondBase, thirdBase, shortStop, catcher, leftField, centerField, rightField, dh  })
  if (  teamName && pitcherName && firstBase && secondBase && thirdBase && shortStop && catcher && leftField && centerField && rightField && dh ) {
    console.log('pitcherName:', pitcherName);
    const response = await fetch(`/api/selection`, {
      method: 'POST',
      body: JSON.stringify({  teamName, pitcherName, firstBase, secondBase, thirdBase, shortStop, catcher, leftField, centerField, rightField, dh  }),
      headers: {
        'Content-Type': 'application/json',
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

    const response = await fetch(`/api/selection/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/all-posts');
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
// document
//   .querySelector('.btn btn-primary')
//   .addEventListener('click', delButtonHandler);
