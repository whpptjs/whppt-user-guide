export const state = () => ({
  selectedNavItemIndex: -1,
  showMobileNav: false,
  showSearch: false,
})

export const actions = {}

export const getters = {
  selectedItem(state, __, rootState) {
    const selectedNavItemIndex = state.selectedNavItemIndex
    if (selectedNavItemIndex === -1) return undefined
    else return rootState['whppt/site'].nav.items[selectedNavItemIndex]
  },
}

export const mutations = {
  closeNav(state) {
    state.showSearch = false
    state.selectedNavItemIndex = -1
  },
  selectNavItem(state, idx) {
    state.showSearch = false
    if (state.selectedNavItemIndex === idx) state.selectedNavItemIndex = -1
    else state.selectedNavItemIndex = idx
  },
  toggleMobileNav(state) {
    state.showMobileNav = !state.showMobileNav
    state.selectedNavItemIndex = -1
  },
  toggleSearch(state) {
    state.selectedNavItemIndex = -1
    state.showSearch = !state.showSearch
  },
}
