import { useEffect, useState } from "react"

const useImagesLoaded = (images: string[]): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (images && images.length > 0) {
            const imgElements = images.map(src => {
                const img = new Image();
                img.src = src;
                return img;
            });

            Promise.all(
                imgElements.map(
                    img => 
                        new Promise<void>(resolve => {
                            if (img.complete) {
                                resolve();
                            } else {
                                img.onload = () => resolve();
                                img.onerror = () => resolve();
                            }
                        })
                )
            ).then(() => {
                setIsLoaded(true);
            });
        } else {
            setIsLoaded(true);
        }
    }, [images]);

    return isLoaded;
}

export default useImagesLoaded;