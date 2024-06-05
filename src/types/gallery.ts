export type galleryImages = {
    image: string,
    imageTitle: string,
    description: string,
}

export type galleryData = {
    title: string,
    thumbnail : string,
    hasComment: boolean,
    images : galleryImages[],
}