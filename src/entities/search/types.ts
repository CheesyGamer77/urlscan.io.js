export type SearchResponse = {
    results: SearchResult[],
    total: number,
    took: number,
    has_more: boolean
}

export type SearchResult = {
    task: SearchTask,
    stats: SearchStats,
    page: SearchPage,
    result: string,
    screenshot: string
}

export type SearchTask = {
    visibility: string, // TODO: Convert to enum
    method: string, // TODO: Convert to enum
    domain: string,
    apexDomain: string,
    time: Date,
    uuid: string,
    url: string
}

export type SearchStats = {
    uniqIPs: number,
    uniqCountries: number,
    dataLength: number,
    encodedDataLength: number,
    requests: number
}

export type SearchPage = {
    country: string,
    server: string,
    redirected?: string,
    ip: string,
    mimeType: string,
    url: string,
    tlsValidDays: number,
    tlsAgeDays: number,
    tlsValidFrom: Date,
    domain: string,
    apexDomain: string,
    asnname: string,
    asn: string,
    tlsIssuer: string,
    satus: string
}
