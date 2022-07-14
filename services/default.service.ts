export const postRequest = (url: string, data: object) => {
  return fetch(url, {
    method: "POST",
    body: JSON.stringify(data)
  });
};

export const getRequest = (url: string) => {
  return fetch(url);
};