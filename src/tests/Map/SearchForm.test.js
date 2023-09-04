import { test, it } from 'vitest'
import { postSearchByBird, postSearchByGroup } from '../Components/Map/TabbedMap/SearchForm'

it('postSearchByBird param options', () => {
  test('postSearchByBird returns with null param', async ({ expect }) => {
    let result = postSearchByBird();
    expect(result).toHaveReturned()

  })

  it('postSearchByGroup param options', () => {
    test('postSearchByGroup returns with null param', async ({ expect }) => {
      let result = postSearchByGroup();
      expect(result).toHaveReturned()

    })




  })