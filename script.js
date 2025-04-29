document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const charts        = document.querySelectorAll('.circle-chart');

  
  // Animate one chart's circle from 0 → its data-percentage
  function animateChart(chart) {
    const pct    = chart.dataset.percentage;
    const circle = chart.querySelector('.circle');
    circle.style.strokeDasharray = `${pct}, 100`;
  }

  // Show only charts matching 'cat', hide others
  function filterSkills(cat) {
    charts.forEach(chart => {
      if (chart.dataset.category === cat) {
        chart.style.display = 'flex';
        animateChart(chart);
      } else {
        chart.style.display = 'none';
        // reset hidden ones back to 0 so they re-animate next time
        chart.querySelector('.circle').style.strokeDasharray = '0, 100';
      }
    });
  }

  // Wire up button clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // toggle active class
      document.querySelector('.filter-btn.active')?.classList.remove('active');
      btn.classList.add('active');
      // filter
      filterSkills(btn.dataset.filter);
    });
  });

  // INITIAL STATE: show "design" charts and mark button active
  const defaultCat = 'design';
  document.querySelector(`.filter-btn[data-filter="${defaultCat}"]`)?.classList.add('active');
  filterSkills(defaultCat);
});

const showAwardsBtn = document.getElementById('show-awards');
const showCertificationsBtn = document.getElementById('show-certifications');
const awardsSection = document.getElementById('awards-section');
const certificationsSection = document.getElementById('certifications-section');

showAwardsBtn.addEventListener('click', () => {
  awardsSection.classList.remove('hidden');
  certificationsSection.classList.add('hidden');
  showAwardsBtn.classList.add('active');
  showCertificationsBtn.classList.remove('active');
});

showCertificationsBtn.addEventListener('click', () => {
  certificationsSection.classList.remove('hidden');
  awardsSection.classList.add('hidden');
  showCertificationsBtn.classList.add('active');
  showAwardsBtn.classList.remove('active');
});

