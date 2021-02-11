import './index.scss';

const debugText = '-'.repeat(200);

let debugMode = false;

declare global {
  interface Window {
    toggleDebugMode: () => void;
  }
}

window.toggleDebugMode = () => {
  debugMode = !debugMode;

  const spinners = [
    ...document.getElementsByClassName('spinner-grow'),
    ...document.getElementsByClassName('spinner-border')
  ];
  spinners.forEach(spinner => spinner.classList.toggle('stop-animation', debugMode));

  const inputs = [
    ...document.getElementsByTagName('input'),
    ...document.getElementsByTagName('textarea')
  ];
  inputs.forEach(input => {
    input.value = debugMode ? debugText : '';
  });

  const options = [...document.getElementsByTagName('option')];
  options.forEach(select => {
    select.innerText = debugMode ? debugText : '';
  });

  const allFields = [...inputs, ...document.getElementsByTagName('select')];
  allFields.forEach(field => {
    field.classList.toggle('show-padding', debugMode);
  });
};
