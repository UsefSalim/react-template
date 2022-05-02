import React, { memo } from 'react';
import { CircularProgress, SpinnerLoading } from '@sobrus-com/sobrus-design-system';
import ContentLoader from 'react-content-loader';
import { compareProps } from 'helpers';
import PropTypes from 'prop-types';

export const PagesLoader = memo(() => (
  <div
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <SpinnerLoading color="rgb(24, 177, 212)" title="Sobrus - Admin" loading />
  </div>
));

export const ItemsLoader = memo(() => (
  <ContentLoader
    speed={3}
    width={100}
    height={16}
    viewBox="0 0 100 16"
    backgroundColor="#f3f3f3"
    foregroundColor="rgb(24, 177, 212,0.3)"
  >
    <rect x="0" y="0" rx="3" ry="3" width="100" height="16" />
  </ContentLoader>
));

export const ButtonLoader = memo(
  ({ outline, size }) => (
    <CircularProgress
      style={{ marginLeft: 15, marginBottom: -2, color: `${outline ? 'primary' : 'light'}` }}
      size={size}
    />
  ),
  compareProps,
);

ButtonLoader.propTypes = {
  outline: PropTypes.bool,
  size: PropTypes.number,
};
const defaultProps = {
  outline: false,
  size: 26,
};
ButtonLoader.defaultProps = defaultProps;
