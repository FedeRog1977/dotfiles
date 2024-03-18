import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import Typography from "../elements/Typography";

interface FootnoteProps {
    func: () => void;
    funcResp: boolean;
}

const DropDown: FC<FootnoteProps> = (
    { func, funcResp }: any
) => {
    return (
        <Button
            className='instant-gram-expand'
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