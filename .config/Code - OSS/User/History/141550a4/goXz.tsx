import { FC, ReactElement } from "react";
import { useMobile } from "../../scripts/display/useMobile";

interface SpacingProps {
    mX?: number;
    mY?: number;
    mT?: number;
    mB?: number;
    mL?: number;
    mR?: number;
    content?: ReactElement;
}

const Spacing: FC<SpacingProps> = (
    {
        mX,
        mY,
        mT,
        mB,
        mL,
        mR,
        content,
    }: any
) => {
    const isMobile = useMobile();

    return (
        <div
            style={{
                marginTop: mX ?
                    mX / 2
                    :
                    (mT ? mT : 0),
                marginBottom: mX ?
                    mX / 2
                    :
                    (mB ? mB : 0),
                marginLeft: mY ?
                    mY / 2
                    :
                    (mL ? mL : 0),
                marginRight: mY ?
                    mY / 2
                    :
                    (mR ? mR : 0),
                padding: 0,
            }}
        >
            {content && content}
        </div>
    )
}

export default Spacing;