import { FC, ReactElement } from 'react'
import Button, { ButtonProps } from '../elements/Button'
import Typography from '../elements/Typography'
import './styles/DropDown.css'

interface DropDownProps {
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
        | 'footnote'
    backgroundType:
        | 'regular-clear'
        | 'dense-clear'
        | 'regular-solid'
        | 'dense-solid'
    func: () => void
    funcResp: boolean
    content?: string | ReactElement
    position?: ButtonProps['position']
}

const DropDown: FC<DropDownProps> = ({
    type,
    backgroundType,
    func,
    funcResp,
    content,
    position,
}: any) => (
    <Button
        className={`expand-${backgroundType}`}
        func={func}
        content={
            <>
                {funcResp === false && (
                    <Typography
                        type={type ? type : 'body'}
                        content={<>{content ? <>{content}</> : <>Expand</>}</>}
                    />
                )}
                {funcResp === true && (
                    <Typography
                        type={type ? type : 'body'}
                        content={
                            <>{content ? <>{content}</> : <>Contract</>}</>
                        }
                        color="var(--font-3)"
                    />
                )}
            </>
        }
        position={position}
    />
)

export default DropDown
