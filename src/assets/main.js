

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'a98afc7810msh86e3cced102b0eep162114jsn4cff2d82c4a4',
		'x-rapidapi-host': 'youtube-v31.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
	const result = await response.json();
    return result;
}

(async ()=> {
    try {
        const videos = await fetchData(url);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
    `;
    if (content) {
        content.innerHTML = view;      
    } else {
        console.error("Elemento con ID 'id' no encontrado.");
    }
         
    } catch (error) {
        console.log(error);
    }
}) (); //para que la función se llame así misma

