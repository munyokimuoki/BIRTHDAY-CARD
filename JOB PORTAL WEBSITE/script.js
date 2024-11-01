const sortBtns = document.querySelectorAll(".job-id > *");
const sortItems = document.querySelectorAll(".job-container > *");

sortBtns.forEach((btn) => {
    btn.addEventListener("click" ,() => {
        sortBtns.forEach((btn) => btn.classList.remove("active"));
        btn.classList.add("active");

        const targetdata = btn.getAttribute ("data-target");

        sortItems.forEach((item) => {
          item.classList.add("delete");
        if(
          item.getAttribute("data-item") === 
        targetdata ||
         targetdata === "all"
        ) {
          item.classList.remove("delete");
          }
        });
        });
    });