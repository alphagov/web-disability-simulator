const name = 'dyslexia';

function load(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0];

    chrome.tabs.executeScript(activeTab.id, 
      { file: 'simulations/dyslexia/content.js' },
      () => {
        if(callback) {
          callback(name);
        }
      });
  });  
}

function start() {
  load(() => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      const activeTab = tabs[0];

      chrome.tabs.sendMessage(activeTab.id, 
        { action: 'startSimulation', simulation: name });
    });    
  });
}

function stop() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    const activeTab = tabs[0];

    chrome.tabs.sendMessage(activeTab.id, 
      { action: 'stopSimulation', simulation: name });
  });
}

export { load, start, stop };