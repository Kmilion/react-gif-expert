export const getGifs = async (category) => {
    const api_key = 'NrxP4OrG7gW9Mjq5H9WGIZl5irG0uP47';
    const limit = 10;
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}