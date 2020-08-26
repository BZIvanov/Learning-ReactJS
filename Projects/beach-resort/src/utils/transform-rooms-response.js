export default (roomsResponse) => {
  return roomsResponse.map((room) => {
    const id = room.sys.id;
    const images = room.fields.images.map((image) => image.fields.file.url);

    return { ...room.fields, images, id };
  });
};
