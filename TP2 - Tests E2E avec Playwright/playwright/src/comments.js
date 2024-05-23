const sectionEl = document.querySelector('#comments');
const countEl = sectionEl.querySelector('#comments-count');
const loadingEl = sectionEl.querySelector("#comments-loading");
const listEl = sectionEl.querySelector("#comments-list");

const observer = new IntersectionObserver((entries, observer) => {
  if (entries[0]?.isIntersecting !== true) return;

  loadComments();
  observer.disconnect();
});
observer.observe(sectionEl);

async function loadComments() {
  const comments = await fetch( `${document.location.origin}/api.php` )
    .then(res => res.json() );

  // Update comment count
  countEl.innerHTML = comments.length;

  for (const comment of comments) {
    const commentEl = document.createElement('li');
    commentEl.classList.add('list-none')
    commentEl.innerHTML = `
      <h5 class="font-mono font-bold">${comment.username}</h5>
      <p>${comment.comment}</p>
    `;
    listEl.appendChild(commentEl);
  }

  // Hide loading
  loadingEl.classList.add('hidden');
  listEl.classList.remove('hidden');
}