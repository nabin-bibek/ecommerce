
export function createOrder(order) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/order/", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}


export function updateOrder(order) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/order/" + order.id, {
      method: "PATCH",
      body: JSON.stringify(order),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchAllOrders(sort, pagination) {
  const token = localStorage.getItem("token");

  let queryString = "";

  for (let key in sort) {
    queryString += `${key}=${sort[key]}&`;
  }
  for (let key in pagination) {
    queryString += `${key}=${pagination[key]}&`;
  }

  return new Promise(async (resolve) => {
    const response = await fetch("/order?" + queryString ,{
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    const totalOrders = await response.headers.get("X-Total-Count");
    resolve({ data: { orders: data, totalOrders: +totalOrders } });
  });
}
