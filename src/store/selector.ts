import { useStore } from '.';
import { TState, TVariable } from '../types';

const getState = (): TState => useStore().state;

export const getVariables = (): TVariable[][] => getState().variables;
export const getVariablesNames = (): string[] => getState().variablesNames;
