import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import Typography from "../elements/Typography";

interface DropDownProps {
    className:
    | 'regular'
    | 'dense';
    func: () => void;
    funcResp: boolean;
}

const DropDown: FC<DropDownProps> = (
    { className, func, funcResp }: any
) => {
    return (
        <Button
            className={`expand-${className}`}
            func={func}
            content={
                <>
                    {funcResp === false &&
                        <Typography
                            type='h4'
                            content={
                                <FontAwesomeIcon icon={faChevronDown} />
                            }
                        />
                    }
                    {funcResp === true &&
                        <Typography
                            type='h4'
                            content={
                                <FontAwesomeIcon icon={faChevronUp} />
                            }
                            color='#87CEEB'
                        />
                    }
                </>
            }
        />
    )
}

export default DropDown;