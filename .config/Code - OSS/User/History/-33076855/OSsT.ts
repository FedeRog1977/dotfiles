import {
    BookshelfProps,
    ImageProps,
} from '../../components/bash-blocks'

export function formatItems(imageItems?: ImageProps[], bookItems?: BookshelfProps[], columns: number) {
    
    if (imageItems) {
        const imageItemsFormatted: ImageProps[][] = []
    
        for (let i = 0; i < imageItems.length; i += columns) {
            imageItemsFormatted.push(imageItems.slice(i, i + columns))
        }} else if (bookItems){

        const bookItemsFormatted: BookshelfProps[] = []
    
        for (let i = 0; i < bookItems.length; i += columns) {
            bookItemsFormatted.push(bookItems.slice(i, i + columns))
        }

    console.log('Unformatted Items:\n\n', items)
    console.log('Formatted Items:\n\n', itemsFormatted)
    return itemsFormatted
}
