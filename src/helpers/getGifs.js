
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=TFEZJCuPBzBBhFIzShCwcGS189Moorcc`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    // Para sacar solamente el id de la imágenes
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
};


