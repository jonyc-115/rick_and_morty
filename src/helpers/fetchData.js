export const fetchData = async (url) => {
  try {
    const res = await fetch(url);

    if (!res.ok)
      throw new Error(`Error en la solicitud: ${res.status} ${res.statusText}`);

    const json = await res.json();

    return json;
  } catch (err) {
    throw new Error(`Error al procesar la solicitud: ${err.message}`);
  }
};
