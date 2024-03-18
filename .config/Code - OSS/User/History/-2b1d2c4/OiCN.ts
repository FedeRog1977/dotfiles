import { useEffect, useState } from 'react'
import { ProjectProps } from '../../../../../scripts'
import { miamiViceContent } from '../content'

export function useMiamiVice() {
    const allVideos = miamiViceContent.tileOne

    const [video, setVideo] = useState(allVideos[0])

    const handleSelect = (e: any) => {
        for (var i in allVideos) {
            const fullName = allVideos[i].heading

            if (fullName.includes(e.currentTarget.value)) {
                console.log('Event JSON Value:', fullName)

                setVideo(allVideos[i])
            }
        }
    }

    return {
        handleInput,
        executeInput,
        handleSelect,
        event,
        sportEvent,
        showSportOnEvent,
    }
}
