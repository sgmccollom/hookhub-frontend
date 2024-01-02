export const sortByLastRequest = bins => {
  bins.sort((bin1, bin2) => {
    return bin2.lastRequest.getTime() - bin1.lastRequest.getTime()
  })
}

export const sortByMostRecent = requests => {
  requests.sort((request1, request2) => {
    return request2.time.getTime() - request1.time.getTime()
  })
}