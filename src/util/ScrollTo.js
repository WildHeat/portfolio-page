const scrollTo = (targetClassname) => {
  const element = document.getElementsByClassName(targetClassname)[0];
  const headerOffset =
    document.getElementsByClassName("header-container")[0].offsetHeight - 1;
  const yScrollPosition = element.offsetTop - headerOffset;
  window.scrollTo({ top: yScrollPosition, behavior: "smooth" });
};

export default scrollTo;
