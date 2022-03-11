import { getRecomendations } from './get-recomendations'

import { mockArtist, mockRecommendations } from 'mock'

describe('get recommendations', () => {
  it('should be able to get a recommendations', async () => {
    const response = await getRecomendations(mockArtist.name)

    expect(response.request.method).toBe('GET')
    expect(response.config.url).toBe('/recommendations')
    expect(response.config.params?.name).toBe(mockArtist.name)
    expect(response.status).toBe(200)
    expect(response.data).toEqual(mockRecommendations)
  })
})
