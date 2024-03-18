import { BookshelfProps, ImageProps } from '../../components/bash-blocks'

export function formatItems(
    imageItems?: ImageProps[],
    bookItems?: BookshelfProps[],
    columns: number
) {
    const imageItemsFormatted: ImageProps[][] = []
    const bookItemsFormatted: BookshelfProps[][] = []
    if (imageItems) {
        for (let i = 0; i < imageItems.length; i += columns) {
            imageItemsFormatted.push(imageItems.slice(i, i + columns))
        }
    } else if (bookItems) {
        for (let i = 0; i < bookItems.length; i += columns) {
            bookItemsFormatted.push(bookItems.slice(i, i + columns))
        }
    }

    console.log('Unformatted Image Items:\n\n', imageItems)
    console.log('Unformatted Book Items:\n\n', bookItems)
    console.log('Formatted Image Items:\n\n', imageItemsFormatted)
    console.log('Formatted Book Items:\n\n', bookItemsFormatted)
    return { imageItemsFormatted, bookItemsFormatted }
}
