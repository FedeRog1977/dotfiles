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
    fontFamily?:
    | 'serif'
    | 'sans-serif';
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
    { type, fontFamily, className, func, id, prefix, content }: any
) => {
    return (
        <Button
            className={`expand-${className}`}
            func={func}
            content={
                <div
                    className={
                        (fontFamily === 'serif' ? `${type}-serif` : `${type}-sans-serif`)
                    }
                >
                    <option
                        key={id}
                        value={content}
                    >
                        {prefix &&
                            <>{prefix}{': '}</>
                        }
                    </option>
                    {content}
                </div>
            }
        />
    )
}

export default Option;