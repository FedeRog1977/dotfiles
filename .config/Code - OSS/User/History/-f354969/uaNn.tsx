import {
    MiamiVice as MiamiViceComponent,
    miamiViceContent,
} from '../../compounds'
import { PageLayout } from '../../bash-blocks/templates'
import { FootnoteTile } from '../../bash-blocks'
import Markdown from 'markdown-to-jsx'

export const MiamiVice = () => (
    <PageLayout background={miamiViceContent.background}>
        <Markdown>Hello man how are you</Markdown>
        <MiamiViceComponent />
        <FootnoteTile {...miamiViceContent.tileTwo} />
    </PageLayout>
)
