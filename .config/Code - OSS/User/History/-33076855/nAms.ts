import {
    BookProps,
    BookshelfProps,
    ImageProps,
} from '../../components/bash-blocks'

export function formatItems(items: ImageProps[] | BookshelfProps[], type: 'image' | 'book', columns: number) {
    
    if (type ==='image') {
        const itemsFormatted: ImageProps[][] = []
    
        for (let i = 0; i < items.length; i += columns) {
            itemsFormatted.push(items.slice(i, i + columns))
        }} else if (type === 'book'){

        const itemsFormatted: BookshelfProps[] = []
    
        for (let i = 0; i < items.length; i += columns) {
            itemsFormatted.push(items.slice(i, i + columns))
        }

    console.log('Unformatted Items:\n\n', items)
    console.log('Formatted Items:\n\n', itemsFormatted)
    return itemsFormatted
}
