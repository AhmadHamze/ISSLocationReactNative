// The ISS api, no token is needed
const iss_api:string = 'https://api.wheretheiss.at/v1/satellites/25544';

export async function getIss():Promise<number[]> {
    const response = await fetch(iss_api);
    const data = await response.json();
    const { latitude, longitude } = data;
    return [<number>latitude, <number>longitude];
}
