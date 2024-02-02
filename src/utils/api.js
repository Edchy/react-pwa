export async function getData() {
  try {
    // const response = await fetch(`http://192.168.10.122:5173/beers`);
    // const response = await fetch(`http://localhost:3000/beers`);
    const response = await fetch(`https://filthy-colt-fedora.cyclic.app/beers`);
    const data = await response.json();

    return data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
}
