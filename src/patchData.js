const patchData = async function patchData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sizeStock: { ...data },
    }),
  });
  return response.json();
};
export default patchData;
