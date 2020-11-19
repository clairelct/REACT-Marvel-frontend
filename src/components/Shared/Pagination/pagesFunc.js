//Fonction pagination
const pagesFunc = ({ limit, total, setPages }) => {
  console.log(setPages);
  const newPages = [];
  let elem = 1;
  for (let i = 1; i <= total; i += limit) {
    newPages.push(elem);
    elem++;
  }
  setPages(newPages);
};

export default pagesFunc;
