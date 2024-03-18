import { FC, ReactElement } from "react";
import Button from "../elements/Button";
import Typography from "../elements/Typography";
import '../elements/styles/Typography.css'
import './styles/DropDown.css'

interface OptionProps {
    type?:
    | string
    | 't1'
    | 't2'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'body'
    | 'caption'
    | 'footnote';
    className:
    | 'regular'
    | 'semi-dense'
    | 'dense';
    func: () => void;
    id: string;
    prefix?: string;
    content: string;
}

const Option: FC<OptionProps> = (
    { type, className, func, id, prefix, content }: any
) => {
    return (
        <Button
            className={`expand-${className}`}
            func={func}
            content={
                <>
                    <Typography
                        type={type ? type : 'h4'}
                        content={
                            <option
                                key={id}
                                value={content}
                                style={{}}
                            >
                                {prefix &&
                                    <>{prefix}{': '}</>
                                }
                            </option>
                        }
                    />
                    <Typography
                        type={type ? type : 'h4'}
                        content={content}
                    />
                </>
            }
        />
    )
}

export default Option;