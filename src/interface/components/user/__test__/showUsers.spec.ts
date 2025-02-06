import { afterEach, describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ShowUsers from '../ShowUsers.vue'

describe('ShowUsers.vue', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })
  test('Should render diarist ✍', () => {
    expect(ShowUsers).toBeDefined()
  })

  test('Should render the data diarist fields', () => {
    const wrapper = mount(ShowUsers, {})

    console.log(wrapper.html())
    // const diaristName = wrapper.find('strong')
    // expect(wrapper.html()).toContain('Debitis saepe cum vo')
    // const diarist = wrapper.findAll('strong.data-diarist-name')
    // expect(wrapper.findAllComponents('label-diarist-name').at(0)?.text()).toBe(
    //   'Debitis saepe cum vo',
    // )

    // expect(diarist.attributes('data-diarist-name')).toBe('Matheus fabio')
    // expect(showUsers.findAll('[label-diarist-name]')).toHaveLength(6)
  })
})
