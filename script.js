const envelope = document.getElementById('envelope');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('closeBtn');

openBtn.addEventListener('click', () => {
    envelope.classList.add('opened');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    envelope.classList.remove('opened');
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block';
});

// Click on envelope to toggle open/close
envelope.addEventListener('click', () => {
    envelope.classList.toggle('opened');
    if (envelope.classList.contains('opened')) {
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    } else {
        closeBtn.style.display = 'none';
        openBtn.style.display = 'block';
    }
});