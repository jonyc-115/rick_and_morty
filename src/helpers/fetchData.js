export const fetchData = async (url) => {
  try {
    const res = await fetch(url);

    console.log(res);

    if (!res.ok)
      throw new Error(`Error en la solicitud: ${res.status} ${res.statusText}`);

    const json = await res.json();

    return json;
  } catch (err) {
    console.log(err);
    throw new Error(err.message);
  }
};
