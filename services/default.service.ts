export const postRequest = (url: string, payload: object) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
      "content-type": "application/json",
    },
  });
};

export const getRequest = (url: string) => {
  return fetch(url);
};