import { useState } from 'react';
import Typography from '../../elements/Typography';
import Option from '../Option';
import Tile from '../Tile';

function OptionStories() {
    const [showDropDown, setShowDropDown] = useState(false);

    const handleClick = () => {
        if (showDropDown === false) {
            setShowDropDown(true);
        } else {
            setShowDropDown(false);
        }
    }

    return (
        <>
            <Tile
                type='clear-condensed'
                content={
                    <Typography type='t1' fontFamily='sans-serif' content='Option' textAlign='center' paragraphMargins />
                }
            />
            <Tile
                type='solid'
                content={
                    <Option
                        type='h4'
                        className='regular'
                        id='226'
                        prefix='Option prefix'
                        content='option content'
                    />
                }
            />
        </>
    );
}

export default OptionStories;