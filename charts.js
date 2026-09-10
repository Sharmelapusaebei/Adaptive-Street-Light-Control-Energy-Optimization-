document.addEventListener('DOMContentLoaded', () => {
  // 1. Weekly Power Saved vs Used (42.6% Energy Saving Metric)
  const pieData = {
    labels: ['Power Saved (42.6%)', 'Power Consumed (57.4%)'],
    datasets: [{
      data: [42.6, 57.4],
      backgroundColor: ['#2dce89', '#f5365c']
    }]
  };

  new Chart(document.getElementById('pieChartDash'), { type: 'pie', data: pieData });
  new Chart(document.getElementById('pieChartFull'), { type: 'pie', data: pieData });

  // 2. Weekly Energy Savings Trend Line
  const lineData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Energy Saved (kWh)',
      data: [14.2, 18.5, 15.1, 17.8, 21.0, 29.4, 27.6],
      borderColor: '#11cdef',
      backgroundColor: 'rgba(17, 205, 239, 0.1)',
      fill: true
    }]
  };

  new Chart(document.getElementById('lineChartDash'), { type: 'line', data: lineData });
  new Chart(document.getElementById('lineChartFull'), { type: 'line', data: lineData });

  // 3. Yearly Usage Comparison (2024, 2025, 2026)
  new Chart(document.getElementById('barChartYearly'), {
    type: 'bar',
    data: {
      labels: ['2024 (Static Baseline)', '2025 (Partial Sensor)', '2026 (Adaptive CPS)'],
      datasets: [{
        label: 'Total Usage (MWh)',
        data: [1638, 1250, 940],
        backgroundColor: ['#e14eca', '#f3a4b5', '#2dce89']
      }]
    }
  });
});
