export type AggregationNumericalProps = {
    2020: number
    2021: number
    2022: number
    2023: number
    2024: number
    total: number
    unique?: number
}

export type AggregationAlphabeticalProps = {
    2020: string | string[]
    2021: string | string[]
    2022: string | string[]
    2023: string | string[]
    2024: string | string[]
    total: string | string[]
    unique?: string[]
}

// TEMP REFACTOR

export type AggregationProps = {
    2024: string | string[]
    '2024Occurrences': number
    2023: string | string[]
    '2023Occurrences': number
    2022: string | string[]
    '2022Occurrences': number
    2021: string | string[]
    '2021Occurrences': number
    2020: string | string[]
    '2020Occurrences': number
    total: string | string[]
    totalOccurrences: number
    unique?: string[]
    uniqueOccurrences?: number
}
