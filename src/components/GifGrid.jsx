import { GifGridItem } from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);

    return (
        <>
            <h1>{category}</h1>
            {
                isLoading && (<h2>Cargando...</h2>)
            }
            <br></br>
            <div className="card-grid">
                {images.map((image) => (
                    <GifGridItem
                        key={image.id}
                        {...image}>
                    </GifGridItem>
                ))}
            </div>
            <br></br>
        </>
    );
};