import { VideoTile } from '../../../bash-blocks'
import { useMiamiVice } from './hooks/use-miami-vice.hook'

export const MiamiVice: React.FC = () => {
    const { handleSelect, video } = useMiamiVice()

    return (
        <VideoTile
            type="solid"
            heading={video.heading}
            subHeading={video.subHeading}
            video={video.video}
            controls
        />
    )
}
