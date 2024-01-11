export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    const response = await fetch("/product");
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchProductsByFilters(filter, sort,pagination) {
  const token = localStorage.getItem("token");

  // filter = {"category":["smartphone","laptops"]}
  // sort = {_sort:"price",_order="desc"}

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

  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/product?" + queryString,{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
    const data = await response.json();
    const totalItems = await response.headers.get("X-Total-Count");
    resolve({ data: { products: data, totalItems: +totalItems } });
  });
}


export function fetchProductById(id) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/product/" + id,{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchCategories() {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/category",{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchBrands() {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/brand",{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
    const data = await response.json();
    resolve({ data });
  });
}

export function createProduct(product) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/product/", {
      method: "POST",
      body: JSON.stringify(product),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function updateProduct(update) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch(
      "/product/"+update.id,
      {
        method: "PATCH",
        body: JSON.stringify(update),
        headers: { "content-type": "application/json",
        Authorization: `Bearer ${token}`, },
      }
    );
    const data = await response.json();
    resolve({ data });
  });
}