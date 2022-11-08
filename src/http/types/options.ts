export type ClientOptions = {
    apiKey?: string,
    agent?: string
}

export type SearchOptions = {
    q?: string,
    size?: number,
    search_after?: any // TODO: Unknown type (maybe string?)
}
