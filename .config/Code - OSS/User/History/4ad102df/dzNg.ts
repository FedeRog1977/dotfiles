import { FC, ReactElement, useState } from "react";

interface handleDropDownProps {
    content: ReactElement;
}

const handleDropDown: FC<handleDropDownProps> = (
    { content }: any
) => {
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
        { content }
        < />
    )
};

export default handleDropDown;