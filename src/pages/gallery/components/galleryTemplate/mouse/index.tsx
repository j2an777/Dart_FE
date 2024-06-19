import { useEffect, useRef, useState } from 'react';
import * as S from './styles';
import { GalleryDataProps } from '@/types/gallery';

const GalleryMouse = ({galleryData}: GalleryDataProps) => {
    const galleryRef = useRef(null);
    const [items, setItems] = useState([]);

    useEffect(() => {
        const generateItems = () => {
            const rows = [
                { id: 1, count: 4 },
                { id: 2, count: 3 },
                { id: 3, count: 4 },
            ];

            const newItems = rows.map((row) => {
                return Array.from({ length: row.count }, (_, index) => {
                    const itemId = `${row.id}-${index}`;
                    const image = images.find((v) => v.id === itemId);
                    return {
                        id: itemId,
                        rowId: row.id,
                        image: image.image,
                    }
                })
            });

            setItems(newItems);
        };
        generateItems();
    }, []);

    return (
      <div></div>
    )
}

export default GalleryMouse