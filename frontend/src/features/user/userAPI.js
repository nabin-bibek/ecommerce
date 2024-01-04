
// A mock function to mimic making an async request for data
export function  fetchOrdersOfUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("order/user/"+userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  return new Promise(async (resolve) => {
    const response = await fetch("/user/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserInfo(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("/user/" + userId);
    const data = await response.json();
    resolve({ data });
  });
}