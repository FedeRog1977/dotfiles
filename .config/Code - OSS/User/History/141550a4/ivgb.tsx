import { FC, ReactElement } from "react";
import { useMobile } from "../../scripts/display/useMobile";

interface SpacingProps {
    mX?: number;
    mY?: number;
    mT?: number;
    mB?: number;
    mL?: number;
    mR?: number;
    children?: ReactElement;
}

const Spacing: FC<SpacingProps> = (
    {
        mX,
        mY,
        mT,
        mB,
        mL,
        mR,
        children,
    }: any
) => {
    return (
        <div
            style={{
                marginTop: mX ?
                    `${mX / 2}px`
                    :
                    (mT ? `${mT}px` : 0),
                marginBottom: mX ?
                    `${mX}px` / 2
                    :
                    (mB ? `${mB}px` : 0),
                marginLeft: mY ?
                    `${mY}px` / 2
                    :
                    (mL ? `${mL}px` : 0),
                marginRight: mY ?
                    `${mY}px` / 2
                    :
                    (mR ? `${mR}px` : 0),
                padding: 0,
            }}
        >
            {children && children}
        </div>
    )
}

export default Spacing;