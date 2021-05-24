import { fetchRepos, reposAdapter, reposReducer } from './repos.slice';

describe('repos reducer', () => {
  it('should handle initial state', () => {
    const expected = reposAdapter.getInitialState({
      loadingStatus: 'not loaded',
      error: null,
    });

    expect(reposReducer(undefined, { type: '' })).toEqual(expected);
  });

  it('should handle fetchReposs', () => {
    let state = reposReducer(undefined, fetchRepos.pending(null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loading',
        error: null,
        entities: {},
      })
    );

    state = reposReducer(state, fetchRepos.fulfilled([{ id: 1 }], null, null));

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'loaded',
        error: null,
        entities: { 1: { id: 1 } },
      })
    );

    state = reposReducer(
      state,
      fetchRepos.rejected(new Error('Uh oh'), null, null)
    );

    expect(state).toEqual(
      expect.objectContaining({
        loadingStatus: 'error',
        error: 'Uh oh',
        entities: { 1: { id: 1 } },
      })
    );
  });
});
