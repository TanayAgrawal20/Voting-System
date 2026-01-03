const BASE_URL = "http://localhost:5500/api";
const SOCKET_URL = "http://localhost:5500";

let electionId = localStorage.getItem("publicElectionId");
let electionName =
  localStorage.getItem("publicElectionName") || "Live Election";

document.getElementById("electionName").innerText = electionName;

let socket = io(SOCKET_URL);
let chart;

socket.on("connect", () => {
  socket.emit("joinElection", electionId);
});

// Load initial data
async function loadInitial() {
  const res = await fetch(`${BASE_URL}/public/candidates/${electionId}`);
  const candidates = await res.json();
  updateUI(candidates);
  drawChart(candidates);
}

// Live updates
socket.on("vote-update", (data) => {
  if (String(data.electionId) !== String(electionId)) return;
  updateUI(data.candidates);
  drawChart(data.candidates);
});

// Update vote list
function updateUI(candidates) {
  const voteList = document.getElementById("voteList");
  voteList.innerHTML = "";

  candidates
    .sort((a, b) => b.votes - a.votes)
    .forEach((c) => {
      voteList.innerHTML += `
        <div class="candidate-card">
          <div class="candidate-info">
            <img src="http://localhost:5500/uploads/${
              c.candidatePhoto || "default.png"
            }"
                 onerror="this.src='http://localhost:5500/uploads/default.png'">
            <div>
              <strong>${c.name}</strong><br>
              <small>${c.partyName || ""}</small>
            </div>
          </div>
          <div class="vote-count">${c.votes}</div>
        </div>
      `;
    });
}

// Draw bar chart
function drawChart(candidates) {
  const ctx = document.getElementById("voteChart");

  const labels = candidates.map((c) => c.name);
  const votes = candidates.map((c) => c.votes);

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Votes",
          data: votes,
          backgroundColor: "#0d6efd",
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
}

loadInitial();
