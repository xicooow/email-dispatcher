import { getState } from '.';
import { TVariable } from '../types';

export const getVariables = (): TVariable[][] => {
  return getState().variables;
};
