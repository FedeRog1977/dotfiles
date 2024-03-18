import { Button } from '../../../../bash-blocks'
import { useScreenWidth } from '../../../../../scripts'
import { InstantGramSearchListProps } from '../types'

export const MiamiViceSearchList: React.FC<InstantGramSearchListProps> = ({
    ...props
}: InstantGramSearchListProps) => {
    const { isMobile } = useScreenWidth()

    return (
        <>
            {props.items.map(
                ({
                    id,
                    prefix,
                    names,
                }: InstantGramSearchListProps['items'][0]) => (
                    <Button
                        key={id}
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
                        subContent={id.slice(-2)}
                        subContentTop
                        color="darkerGrey"
                        coarsePadding
                    />
                )
            )}
        </>
    )
}
