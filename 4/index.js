const list = document.querySelector(".notifications");
const renderNotification = (text) => {
  const notificationElem = document.createElement("li");
  notificationElem.classList.add("notification");
  notificationElem.innerText = text;
  list.append(notificationElem);
  setTimeout(() => {
    notificationElem.remove();
  }, 5000);
};

renderNotification("first");
setTimeout(() => {
  renderNotification("second");
  setTimeout(() => {
    renderNotification("third");
    setTimeout(() => {
      renderNotification("fourth");
    }, 3000);
  }, 3000);
}, 3000);
