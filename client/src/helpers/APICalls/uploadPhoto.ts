type FieldValues = Record<string, any>;
const uploadPhoto = async (image: FieldValues): Promise<FieldValues> => {
  const fd = new FormData();

  fd.append('picture', image.picture[0]);

  return await fetch(`/profile-photo`, {
    method: 'POST',
    body: fd,
    credentials: 'include',
  })
    .then((res) => res.json())
    .catch(() => ({
      error: { message: 'Unable to connect to server. Please try again' },
    }));
};

export default uploadPhoto;
