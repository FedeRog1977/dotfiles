import Button from "../elements/Button";
import Search from "../elements/Search";
import InstantGramSearchList from '../elements/InstantGramSearchList'
import { eventData } from "../../data/Events";
import './styles/InstantGramSearchBar.css'
import { useState } from "react";

const InstantGramSearchBar = ({ funcSelect, funcInput, funcButton }: any) => {
    const [showDropDowns, setShowDropDowns] = useState(false);

    const handleClick = () => {
        if (showDropDowns === false) {
            setShowDropDowns(true);
        } else {
            setShowDropDowns(false);
        }
    }

    return (
        <div className='instant-gram-search-bar'>
            <div>
                <Search className='instant-gram-search' func={funcInput} content='Search All Events' />
                <Button className='instant-gram-search' func={funcButton} content='Search' />
                <Button className='instant-gram-expand' func={handleClick} content='Drop Eet' />
            </div>
            {showDropDowns &&
                <div>
                    <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2023]} year='2023' />
                    <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2022]} year='2022' />
                    <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2021]} year='2021' />
                    <InstantGramSearchList className='instant-gram-search' func={funcSelect} items={eventData[2020]} year='2020' />
                </div>
            }
        </div>
    )
};

export default InstantGramSearchBar;