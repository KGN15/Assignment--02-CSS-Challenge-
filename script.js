const hamber = document.querySelector(".hamber");
  const drawer = document.querySelector(".mobile-drawer");

  hamber.addEventListener("click", () => {
    hamber.classList.toggle("active");
    drawer.classList.toggle("open");
  });

  // বাইরে ক্লিক করলে drawer বন্ধ
  drawer.addEventListener("click", (e) => {
    if (e.target === drawer) {
      drawer.classList.remove("open");
      hamber.classList.remove("active");
    }
  });