const infosElem = document.querySelectorAll(".faq-info");
const box = document.querySelector(".image > .box");

let isEdit = false;

infosElem.forEach((elem) => {
  const icon = elem.querySelector(".arrow-icon");
  const liElem = elem.querySelectorAll("li");
  const p = elem.querySelector("p");
  liElem.forEach((li) => {
    li.addEventListener("mouseover", () => {
      box.style.animation = ".5s linear moving";
      box.classList.toggle("move");
    });
    li.addEventListener("mouseleave", () => {
      box.style.animation =
        "4s cubic-bezier(0.32, 0.43, 0.7, 1.03) 0s infinite normal none running floating, 1.5s ease 0s 1 normal none running back";
      box.classList.toggle("move");
    });
    li.addEventListener("click", (e) => {
      isEdit = true;

      if (e.target.classList.value === "active") {
        isEdit = false;
      }

      if (isEdit) {
        isEdit = false;
        resetElems();
      }

      e.target.classList.toggle("active");
      icon.classList.toggle("arrow-toggle");
      p.classList.toggle("hidden");
    });
  });
});

const resetElems = () => {
  for (let item of infosElem) {
    item.querySelector(".arrow-icon").classList.remove("arrow-toggle");
    item.querySelector("li").classList.remove("active");
    item.querySelector("p").classList.add("hidden");
  }
};
