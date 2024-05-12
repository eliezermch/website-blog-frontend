async function getData(_url: string, authToken: string | undefined) {
  try {
    const options =
      authToken !== undefined
        ? {
            headers: {
              'Content-Type': 'application/json', // Assuming JSON data, set the appropriate header
              Authorization: `Token ${authToken}`,
            },
          }
        : {};

    const res = await fetch(_url, options);
    return {
      data: res.ok ? await res.json() : null,
      success: res.ok,
      status: res.status,
      error: res.statusText,
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export { getData };

async function postData(_url: string, _data: any, authToken: string | undefined) {
  try {
    const options =
      authToken !== undefined
        ? {
            method: 'POST', // Set the method to POST
            headers: {
              'Content-Type': 'application/json', // Assuming JSON data, set the appropriate header
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify(_data), // Convert the JavaScript object to a JSON string
          }
        : {
            method: 'POST', // Set the method to POST
            headers: {
              'Content-Type': 'application/json', // Assuming JSON data, set the appropriate header
              Authorization: `Token ${authToken || ''}`,
            },
            body: JSON.stringify(_data), // Convert the JavaScript object to a JSON string
          };

    const res = await fetch(_url, options);

    return {
      data: await res.json(),
      success: res.ok,
      status: res.status,
      error: res.statusText,
    };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export { postData };
