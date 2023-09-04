import { test, it } from 'vitest'
import { postBirdSighting } from '../Components/Map/TabbedMap/ReportForm'

it('postBirdSightings param options', () => {
  test('postBirdSighting returns with null param', async ({ expect }) => {
    let result = postBirdSighting();
    expect(result).toHaveReturned()

  })



})