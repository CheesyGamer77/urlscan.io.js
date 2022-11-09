export type APISearchResponse = {
    results: APISearchResult[],
    total: number,
    took: number,
    has_more: boolean
}

export type APISearchResult = {
    task: APISearchTask,
    stats: APISearchStats,
    page: APISearchPage,
    result: string,
    screenshot: string
}

export type APISearchTask = {
    visibility: "public" | "private" | "unlisted",
    method: string, // TODO: Convert to enum
    domain: string,
    apexDomain: string,
    time: Date,
    uuid: string,
    url: string
}

export type APISearchStats = {
    uniqIPs: number,
    uniqCountries: number,
    dataLength: number,
    encodedDataLength: number,
    requests: number
}

export type APISearchPage = {
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
