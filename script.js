document.querySelectorAll('.show-more-btn').forEach(button => {
  button.addEventListener('click', () => {
    const additionalImages = button.nextElementSibling;
    if (additionalImages.style.display === 'none' || additionalImages.style.display === '') {
      additionalImages.style.display = 'flex';
      button.textContent = 'Show Less Images';
    } else {
      additionalImages.style.display = 'none';
      button.textContent = 'Show More Images';
    }
  });
});