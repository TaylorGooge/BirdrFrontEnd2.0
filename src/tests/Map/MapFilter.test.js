import { test, it } from 'vitest'
import { getSeason } from '../Components/Map/TabbedMap/MapFilter'

it('getSeason param options', () => {
  test('getSeason returns with null param', async ({ expect }) => {
    let result = getSeason();
    expect(result).toHaveReturned()

  })

  test('getSeason returns with date param', async ({ expect }) => {
    let result = getSeason('01/01/2020');
    expect(result).toHaveReturned()

  })

})

it('getSeason season return', () => {
  test('getSeason returns with null param', async ({ expect }) => {
     let result = getSeason('01/01/2020');
    expect(result).toHaveReturned()

  })

  test('getSeason returns with date param', async ({ expect }) => {
    let result = getSeason('01/01/2020');
    expect(result).toHaveReturned()

  })

})