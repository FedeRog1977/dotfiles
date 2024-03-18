import { miamiViceContent } from '../content'

export function useMiamiVice() {
    const allVideos = miamiViceContent.tileOne

    const [video, setVideo] = useState(allVideos[0])

    const handleSelect = (e: any) => {
        for (var i in allVideos) {
            const fullName = allVideos[i].heading

            if (fullName.includes(e.currentTarget.value)) {
                setVideo(allVideos[i])
            }
        }
    }

    return {
        handleSelect,
        video,
    }
}
