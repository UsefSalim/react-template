import { isEqual } from 'lodash';

export const compareProps = (prevProps, nextProps) => isEqual(prevProps, nextProps);
