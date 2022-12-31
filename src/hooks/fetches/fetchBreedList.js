const fetchBreedList = async ({ queryKey }) => {
  const animal = queryKey[1];

  if (!animal) return [];

  const response = await fetch(
    `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
  );

  if (!response.ok) {
    throw new Error(`breeds/${animal} not found`);
  }

  return response.json();
};

export default fetchBreedList;