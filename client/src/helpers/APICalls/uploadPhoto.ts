const uploadPhoto = async (image: string): Promise<string> => {
  const fd = new FormData();

  fd.append('image', image);

  return await fetch(`/profile-photo`, {
    method: 'POST',
    headers: { 'Content-Type': 'multipart/form-data' },
    body: fd,
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadPhoto;
