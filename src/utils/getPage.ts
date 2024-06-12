const getVisiblePage = (page: number) => {
  if (page < 10) return '0' + page.toString();
  else return page.toString();
};

export default getVisiblePage;
