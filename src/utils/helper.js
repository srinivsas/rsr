export const searchRestaurant = (searchInput, allRestaurants) => {
  const serchResults = allRestaurants.filter(res => {
    return res.data.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  return serchResults;
};
