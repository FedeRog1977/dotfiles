import {
    BookProps,
    BookshelfProps,
    ImageProps,
} from '../../components/bash-blocks'

export function formatItems(items: BookshelfProps[], columns: number) {
    const itemsFormatted: BookshelfProps[][] = []

    for (let i = 0; i < items.length; i += columns) {
        itemsFormatted.push(items.slice(i, i + columns))
    }

    console.log('Unformatted Items:\n\n', items)
    console.log('Formatted Items:\n\n', itemsFormatted)
    return itemsFormatted
}
