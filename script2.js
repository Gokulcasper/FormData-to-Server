const formEl = document.forms.feedback;
const btn = document.querySelector("form button");

const handleSubmit = (event) => {
  event.preventDefault();

  const formData = new FormData(formEl);
  // 1. QueryString : content-type : application/x-www-form-urlencoded
  // ?fullname=Felix+Noel&type=General+FeedBack&email=jihecuzeta%40mailinator.com&description=Ut+eu+sed+fuga+Inci&terms=on
  const data = [...formData.entries()];

  //   const dataString = data.map(([key, value]) =>`${encodeURIComponent(key)}=${encodeURIComponent(value)}`).join("&"); // Old way

  //   console.log("Using Map : ", dataString);

  //   const dataString2 = new URLSearchParams(formData).toString();

  //   console.log("URLSearchParams : ", dataString2);

  //   // 2. JSON :
  const jsonData = JSON.stringify(Object.fromEntries(formData));

  // Send to Backend
  console.log("JSON BODY : ", jsonData);
};

formEl.addEventListener("submit", handleSubmit);
