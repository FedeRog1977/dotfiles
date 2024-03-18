import { MiamiVice as MiamiViceComponent } from '../../compounds'
import { PageLayout } from '../../bash-blocks/templates'

export const MiamiVice = () => (
    <PageLayout background={{ type: 'miami', content: 'MIAMI VICE' }}>
        <MiamiViceComponent />
    </PageLayout>
)
