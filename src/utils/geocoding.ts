export const geocode = async (coordinates: string | number): Promise<{
    lat: number;
    lon: number;
}> => {
    const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(coordinates)}`);
    const geoData = await geoRes.json();

    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {lat, lon};
}
