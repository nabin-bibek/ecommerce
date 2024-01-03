
export function createOrder(order) {
  return new Promise(async (resolve) => {
    const response = await fetch("/order/", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    resolve({ data });
  });
}