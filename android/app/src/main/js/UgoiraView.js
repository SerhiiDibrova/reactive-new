package com.example.ugoiraview;

import React, { useEffect } from 'react';
import { requireNativeComponent, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

const NativeUgoiraView = requireNativeComponent('UgoiraView');

const UgoiraView = ({ height, style }) => {
    useEffect(() => {
        // Handle side effects related to height changes if necessary
    }, [height]);

    return (
        <NativeUgoiraView
            style={[style, { height }]}
            height={height}
        />
    );
};

UgoiraView.propTypes = {
    height: PropTypes.number.isRequired,
    style: ViewPropTypes.style,
};

UgoiraView.defaultProps = {
    style: {},
};

export default UgoiraView;