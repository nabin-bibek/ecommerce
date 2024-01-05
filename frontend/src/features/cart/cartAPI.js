
export function addToCart(item) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function fetchItemsByUserId() {
  const token = localStorage.getItem('token');
  return new Promise(async (resolve) => {
    const response = await fetch("/cart",{
      method: "GET",
      headers:{
          "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      }});
    
    const data = await response.json();
    resolve({ data });
  });
}

export function updateCart(update) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: { "content-type": "application/json" ,
      Authorization: `Bearer ${token}`,}
    });
    const data = await response.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  const token = localStorage.getItem("token");

  return new Promise(async (resolve) => {
    const response = await fetch("/cart/" + itemId, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    resolve({ data: { id: itemId } });
  });
}

export function resetCart(userId){
  return new Promise(async (resolve)=>{
  const response = await fetchItemsByUserId(userId)
  const items = response.data;
  for (let item of items){
    await deleteItemFromCart(item.id);
  }
  resolve({status:'success'});
  })
}