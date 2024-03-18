import { Button } from '../../../../bash-blocks'
import { useScreenWidth } from '../../../../../scripts'
import { MiamiViceSearchListProps } from '../types'

export const MiamiViceSearchList: React.FC<MiamiViceSearchListProps> = ({
    ...props
}: MiamiViceSearchListProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {props.items.map(({ heading, subHeading }, index) => (
                <Button
                    key={index}
                    typeType={isMobile ? 'h4' : 'body'}
                    type="regularClear"
                    forceWidth={!isMobile ? 25 : 100}
                    value={names.join(' - ')}
                    link={{ url: '#/blog/miami-vice/#miamiViceResult' }}
                    func={props.func}
                    funcResp={false}
                    content={
                        <>
                            {prefix && prefix + ':'}
                            {names.map((name: string) => (
                                <div key={name}>{name}</div>
                            ))}
                        </>
                    }
                    color="darkerGrey"
                    coarsePadding
                />
            ))}
        </>
    )
}
