package src.components;

import React from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraView = ({ paused }) => {
    const NativeUgoiraView = requireNativeComponent('UgoiraView');
    return <NativeUgoiraView paused={paused} />;
};

UgoiraView.propTypes = {
    paused: PropTypes.bool,
};

export default UgoiraView;