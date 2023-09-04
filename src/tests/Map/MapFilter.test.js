import { test, it } from 'vitest'
import { getSeason } from '../../Components/Map/TabbedMap/MapFilter'

it('getSeason param options', () => {
  test('getSeason returns', async ({ expect }) => {
    let result = getSeason();
    expect(result).toHaveReturned()

  })


})
