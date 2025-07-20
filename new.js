const profText = document.querySelector(".prof");
const textArray = ["Artist", "Designer", "Developer", "Coder"];
let currentIndex = 0;

function changeText() {
  profText.textContent = textArray[currentIndex];
  currentIndex = (currentIndex + 1) % textArray.length;
}

setInterval(changeText, 3000);
changeText();

function verifyStudent() {
  const idInput = document.getElementById('emailOrId');
  const id = idInput.value.trim();
  const passwordInput = document.getElementById('password');
  const password = passwordInput.value.trim();
  const resultBox = document.getElementById('result');
document.getElementById('emailOrId').style.display = 'none'; // Correct field
document.getElementById('password').style.display = 'none'; // Add ID in HTML if missing
document.querySelector('button').style.display = 'none'; // This is okay

  if (!id) return alert('Please enter a valid Email or ID');

  showSpinner(true);

  // Simulate network delay and dummy data
  setTimeout(() => {
    const student = {
      name: "Shantanu barde",
      email: "shantanubarde7@gmail.com",
      mobile: "9876543210",
      domain: "Web Development",
      college: "DAVV University",
      start: "01 June 2024",
      duration: "1 Month",
      photo: "canvabg photo.png",
      assignments: [true, false, true, true],
      certificate: "#"
    };

    const html = `
      <div class="card">
        <img src="${student.photo}" alt="Photo" />
        <h3>${student.name}</h3>
        <p>Email: ${student.email}</p>
        <p>Mobile: ${student.mobile}</p>
        <p>Domain: ${student.domain}</p>
        <p>College: ${student.college}</p>
        <p>Start Date: ${student.start}</p>
        <p>Duration: ${student.duration}</p>
        <h4>Assignment Status</h4>
        <div class="assignment-status">
        ${student.assignments.map((done, i) => `<span>A${i + 1}: ${done ? '✅' : '❌'}<span>`).join('')}
        </div>
        <p>Status: Completed</p>
        <a href="${student.certificate}" target="_blank">View Certificate</a>
      </div>
    `;
    resultBox.innerHTML = html;
    showSpinner(false);
    // showToast('✅ Dummy student data loaded.');
  }, 1200);
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.innerText = msg;
  toast.className = 'toast show';
  setTimeout(() => toast.className = 'toast', 3000);
}
function showSpinner(show) {
  const overlay = document.getElementById('spinnerOverlay');
  overlay.classList.toggle('hidden', !show);
}
