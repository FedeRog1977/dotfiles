import { imageSliderTestData } from '../../../data/test/ImageSliderTestData';
import Typography from '../../elements/Typography';
import ImageSlider from '../ImageSlider';
import Tile from '../Tile';

function ImageSliderStories() {
    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='t1' fontFamily='sans-serif' content='Image Slider' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <ImageSlider slides={imageSliderTestData.withDesc} />
                }
            />
            <Tile
                type='solid'
                content={
                    <ImageSlider slides={imageSliderTestData.withoutDesc} />
                }
            />
        </>
    );
}

export default ImageSliderStories;