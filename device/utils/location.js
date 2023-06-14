const KEY = "AIzaSyDDKk-rrLHU2SCw0OUpg8MMKc5dbiAqmZc";

export const getPreviewLocation = ({ lat, lng }) => {
  const previewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=13&size=400x200&maptype=roadmap&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:red%7Clabel:G%7C${lat},${lng}&key=${KEY}`;
  return previewUrl;
};

export const convertCoordinateToAddress = async ({ lat, lng }) => {
  const response = await fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${KEY}`
  );
  if (!response.ok) {
    throw new Error("Failed To fetch address");
  }
  const data = await response.json();
  const address = data.results[0].formatted_address;
  return address;
};
