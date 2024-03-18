export type BigSearchProps = {
    funcInput: () => void
    funcButton: () => void
    placeholder?: string
    selects?: {
        funcSelect: () => void
        content: {}
        placeholder?: string
    }[]
}
