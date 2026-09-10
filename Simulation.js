const simArea = document.getElementById('simArea');
const lightBeam = document.getElementById('lightBeam');
const simStatus = document.getElementById('simStatus');

simArea.addEventListener('mousemove', () => {
  const currentHour = new Date().getHours();
  // Active night window between 6 PM (18) and 6 AM (6)
  const isNight = currentHour >= 18 || currentHour < 6;

  if (isNight) {
    lightBeam.style.display = 'block';
    simStatus.innerText = `Status: ACTIVE [${currentHour}:00] - PIR Motion Detected (Light ON)`;
  } else {
    lightBeam.style.display = 'none';
    simStatus.innerText = `Status: STANDBY [${currentHour}:00] - Ambient Daylight Mode (Light OFF)`;
  }
});

simArea.addEventListener('mouseleave', () => {
  lightBeam.style.display = 'none';
  simStatus.innerText = 'Status: IDLE - Searching for Motion...';
});
