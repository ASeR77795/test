const deleteBtn = document.querySelector(".deleteBtn");
const noBtn = document.querySelector(".noBtn");
const p = document.querySelector(".text");
const errorMessage = "non deleted";
let timeoutId;
noBtn.disabled = true;
const promise = new Promise((resolve, reject) => {
  deleteBtn.onclick = () => {
    noBtn.disabled = false;
    timeoutId = setTimeout(() => {
      p.innerText = "";
      resolve();
    }, 5000);
  };
  noBtn.onclick = () => {
    clearTimeout(timeoutId);
    noBtn.disabled = true;
    reject(new Error(errorMessage));
  };
});
promise.then(() => {
  console.log("deleted");
});
promise.catch((error) => {
  console.error(error);
});
