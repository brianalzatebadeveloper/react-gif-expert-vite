export const getGifs = async ( category ) => {
  const apiKey = 'elXxL2WW2tJsN3kw3ZfE2YFHSASGFKVJ';
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=10`);
  const { data } = await response.json();
  
  const gifs = data.map( img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));
  
  return gifs;
}