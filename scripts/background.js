const activeDelete = {
  state: false,
  setState: function () {
    this.state = !this.state;
  },
};
chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    args: [activeDelete],
    target: { tabId: tab.id },
    files: ["scripts/delete.js"],
  });
});
