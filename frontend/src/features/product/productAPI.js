export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("/product");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort) {
  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

  // let filterKey='';
  let queryString = "";
  for (let key in filter) {
    const categoryValues = filter[key];
    if (categoryValues.length) {
      const lastCategoryValue = categoryValues[categoryValues.length - 1];
      queryString += `${key}=${lastCategoryValue}&`;
     
    }
  }
  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
    console.log(queryString);
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/product?"+ queryString);
    const data = await response.json();
    resolve({ data });
  });
}
