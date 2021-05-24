import {
	createAsyncThunk,
	createEntityAdapter,
	createSelector,
	createSlice,
	EntityState,
	PayloadAction,
} from '@reduxjs/toolkit';

import { REPOSITORY_QUERY } from './service/queries/REPOSITORY_QUERY'
import { apolloClient } from './config/apoloClient';

export const REPOS_FEATURE_KEY = 'repos';

/*
 * Update these interfaces according to your requirements.
 */
export interface ReposEntity {
	id: string;
	name: string;
	type: string
	favorite : boolean
}

export interface ReposState extends EntityState<ReposEntity> {
	loadingStatus: 'not loaded' | 'loading' | 'loaded' | 'error';
	error: string;
}

export const reposAdapter = createEntityAdapter<ReposEntity>();

/**
 * Export an effect using createAsyncThunk from
 * the Redux Toolkit: https://redux-toolkit.js.org/api/createAsyncThunk
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(fetchRepos())
 * }, [dispatch]);
 * ```
 */
export const fetchRepos = createAsyncThunk(
	'repos/fetchStatus',
	async (_, thunkAPI ) => {
		const result = await apolloClient.query({ query: REPOSITORY_QUERY })
		const data = result.data.viewer.repositories.nodes
		return data;
	}
);

export const initialReposState: ReposState = reposAdapter.getInitialState({
	loadingStatus: 'not loaded',
	error: null,
});

export const reposSlice = createSlice({
	name: REPOS_FEATURE_KEY,
	initialState: initialReposState,
	reducers: {
		add: reposAdapter.addOne,
		remove: reposAdapter.removeOne,
		updateOne: reposAdapter.updateOne,
		upsertOne: reposAdapter.upsertOne
		
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchRepos.pending, (state: ReposState) => {
				state.loadingStatus = 'loading';
			})
			.addCase(
				fetchRepos.fulfilled,
				(state: ReposState, action: PayloadAction<ReposEntity[]>) => {
					reposAdapter.setAll(state, action.payload);
					state.loadingStatus = 'loaded';
				}
			)
			.addCase(fetchRepos.rejected, (state: ReposState, action) => {
				state.loadingStatus = 'error';
				state.error = action.error.message;
		});
	},
});

/*
 * Export reducer for store configuration.
 */
export const reposReducer = reposSlice.reducer;

/*
 * Export action creators to be dispatched. For use with the `useDispatch` hook.
 *
 * e.g.
 * ```
 * import React, { useEffect } from 'react';
 * import { useDispatch } from 'react-redux';
 *
 * // ...
 *
 * const dispatch = useDispatch();
 * useEffect(() => {
 *   dispatch(reposActions.add({ id: 1 }))
 * }, [dispatch]);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#usedispatch
 */
export const reposActions = reposSlice.actions;

/*
 * Export selectors to query state. For use with the `useSelector` hook.
 *
 * e.g.
 * ```
 * import { useSelector } from 'react-redux';
 *
 * // ...
 *
 * const entities = useSelector(selectAllRepos);
 * ```
 *
 * See: https://react-redux.js.org/next/api/hooks#useselector
 */
const { selectAll, selectEntities } = reposAdapter.getSelectors();

export const getReposState = (rootState: any): ReposState =>
	rootState[REPOS_FEATURE_KEY];

export const selectAllRepos = createSelector(getReposState, selectAll);

export const selectReposEntities = createSelector(
	getReposState,
	selectEntities
);
