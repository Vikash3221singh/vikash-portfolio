const powerButton = document.querySelector('.power-button');
const missionPanel = document.querySelector('.mission-panel');
const closePanelButton = document.querySelector('.close-panel');

if (powerButton && missionPanel) {
  powerButton.addEventListener('click', () => {
    missionPanel.classList.toggle('hidden');
    powerButton.setAttribute(
      'aria-pressed',
      String(!missionPanel.classList.contains('hidden'))
    );
  });
}

if (closePanelButton && missionPanel) {
  closePanelButton.addEventListener('click', () => missionPanel.classList.add('hidden'));
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && missionPanel && !missionPanel.classList.contains('hidden')) {
    missionPanel.classList.add('hidden');
  }
});
