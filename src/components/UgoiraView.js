package com.example;

import React from 'react';
import { requireNativeComponent, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraViewNative = requireNativeComponent('UgoiraView');

const UgoiraView = ({ paused, style }) => {
    return <UgoiraViewNative paused={paused} style={style} />;
};

UgoiraView.propTypes = {
    paused: PropTypes.bool,
    style: ViewPropTypes.style,
};

UgoiraView.defaultProps = {
    paused: false,
};

export default UgoiraView;