export default (ts) =>
  ts
    ? [
        {
          fileName: 'overmind/actions.ts',
          code: `
import { Action } from 'overmind'

export const getPost: Action<string> = async ({ state, api }, id) {
  state.isLoadingPost = true
  try {
    state.currentPost = await api.getPost(id)
  } catch (error) {
    state.error = error
  }
  state.isLoadingPost = false
}
              `,
        },
      ]
    : [
        {
          fileName: 'overmind/actions.js',
          code: `
export const getPost = async ({ state, api }, id) {
  state.isLoadingPost = true
  try {
    state.currentPost = await api.getPost(id)
  } catch (error) {
    state.error = error
  }
  state.isLoadingPost = false
}
            `,
        },
      ]
