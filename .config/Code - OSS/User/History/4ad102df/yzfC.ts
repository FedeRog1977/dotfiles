import { useState } from "react";

export default function handleDropDown() {
    const [showDropDown, setShowDropDown] = useState(false);

    if (showDropDown === false) {
        setShowDropDown(true);
    } else {
        setShowDropDown(false);
    }

    return showDropDown;
};