const sections = [
  'teaching',
  'reflections',
  'udl',
  'implementation',
  'evaluation',
  'reflection'
];

function markComplete(section) {
  localStorage.setItem(section, 'done');
  alert('Section marked as completed!');
  updateProgress();
}

function updateProgress() {
  let completed = sections.filter(
    s => localStorage.getItem(s) === 'done'
  ).length;

  const bar = document.getElementById('progressBar');
  const text = document.getElementById('progressText');

  if (bar && text) {
    bar.value = completed;
    text.textContent = `${completed} / 6 completed`;
  }
}

document.addEventListener('DOMContentLoaded', updateProgress);
