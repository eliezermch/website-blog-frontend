async function getData(_url: string, authToken: string | undefined) {
  try {
    const options =
      authToken !== undefined
        ? {
            headers: {
              'Content-Type': 'application/json',
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

async function postData(_url: string, _data: any, authToken: string | undefined) {
  try {
    const options =
      authToken !== undefined
        ? {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${authToken}`,
            },
            body: JSON.stringify(_data),
          }
        : {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Token ${authToken || ''}`,
            },
            body: JSON.stringify(_data),
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

async function markAsDoneData(_url: string, authToken: string) {
  try {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${authToken}`,
      },
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
    return { error: error?.toString() };
  }
}

async function updateData(
  _url: string,
  _data: {
    title: string;
    description: string;
  },
  authToken: string
) {
  try {
    const options = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${authToken}`,
      },
      body: JSON.stringify(_data),
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

async function deleteData(_url: string, id: number, authToken: string) {
  try {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Token ${authToken}`,
      },
    };

    const res = await fetch(`${_url}${id}`, options);

    return {
      status: res.status,
      error: res.statusText,
    };
  } catch (error) {
    console.error(error);
    return { error: error?.toString() };
  }
}

function getRandomHexColor() {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function componentToHex(c: number) {
    const hex = c.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  // Ensure higher brightness by making the sum of color components higher
  const minBrightness = 500; // Tweak this value as needed
  let r, g, b;

  do {
    r = getRandomInt(200, 255);
    g = getRandomInt(200, 255);
    b = getRandomInt(200, 255);
  } while (r + g + b < minBrightness);

  return '%23' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export { getData, postData, markAsDoneData, deleteData, updateData, getRandomHexColor };
