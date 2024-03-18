import { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronUp,
    faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../elements/Button";
import Typography from "../elements/Typography";
import './styles/DropDown.css'

interface DropDownProps {
    className:
    | 'regular'
    | 'dense';
    func: () => void;
    funcResp: boolean;
    content?: string;
}

const DropDown: FC<DropDownProps> = (
    { className, func, funcResp, content }: any
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
                                <>
                                    {content ?
                                        <>{content}</>
                                        :
                                        <FontAwesomeIcon icon={faChevronDown} />
                                    }
                                </>
                            }
                        />
                    }
                    {funcResp === true &&
                        <Typography
                            type='h4'
                            content={
                                <>
                                    {content ?
                                        <>{content}</>
                                        :
                                        <FontAwesomeIcon icon={faChevronUp} />
                                    }
                                </>
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