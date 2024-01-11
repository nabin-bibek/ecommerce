
// A mock function to mimic making an async request for data
export function  fetchOrdersOfUser(userId) {
  return new Promise(async (resolve) => {
    const response = await fetch("order/user/"+userId);
    const data = await response.json();
    resolve({ data });
  });
}

export function updateUser(update) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/user/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchUserInfo() {
  const token = localStorage.getItem('token');
  return new Promise(async (resolve) => {
    const response = await fetch("/user/",{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function signOut() {
  return new Promise(async (resolve) => {
    resolve({ data: "success" });
  });
}
