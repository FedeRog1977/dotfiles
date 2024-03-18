import type { ComponentMeta, ComponentStory } from '@storybook/react'
import { VideoTile as VideoTileComponent } from './video-tile.component'
import introTileImg from '../../../../media/images/pages/intro-tile.jpg'

const meta: ComponentMeta<typeof VideoTileComponent> = {
    title: 'BashBlocks / ImageTile',
    component: VideoTileComponent,
    args: {
        heading: 'Welcome to BrittonsBashRC',
        subHeading: 'Where autism aligns at its finest',
        video: 'tgbNymZ7vqY',
    },
}

export default meta

export const ImageTile: ComponentStory<typeof VideoTileComponent> = (args) => (
    <VideoTileComponent {...args} />
)
