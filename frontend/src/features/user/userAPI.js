
// A mock function to mimic making an async request for data
export function  fetchOrdersOfUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("order/user/"+userId);
    const data = await response.json();
    resolve({ data });
  });
}
