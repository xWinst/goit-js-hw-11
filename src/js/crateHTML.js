export default function createHTML(data) {
    return data
        .map(
            ({
                webformatURL,
                largeImageURL,
                tags,
                likes,
                views,
                comments,
                downloads,
            }) => `<a class="photo-card" href="${largeImageURL}">
                        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
                        <div class="info">
                            <p class="info-item">
                                <b>Likes</b>
                                </br>${likes}
                            </p>
                            <p class="info-item">
                                <b>Views</b>
                                </br>${views}
                            </p>
                            <p class="info-item">
                                <b>Comments</b>
                                </br>${comments}
                            </p>
                            <p class="info-item">
                                <b>Downloads</b>
                                </br>${downloads}
                            </p>
                        </div>
                    </a>`
        )
        .join('');
}
