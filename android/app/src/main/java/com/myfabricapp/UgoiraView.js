package com.myfabricapp;

import React from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraView = requireNativeComponent('UgoiraView');

const UgoiraViewComponent = ({ images, width, height, resizeMode, paused, style }) => {
    return (
        <UgoiraView
            style={[{ width, height }, style]}
            images={images}
            resizeMode={resizeMode}
            paused={paused}
        />
    );
};

UgoiraViewComponent.propTypes = {
    images: PropTypes.array.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    resizeMode: PropTypes.string,
    paused: PropTypes.bool,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

UgoiraViewComponent.defaultProps = {
    resizeMode: 'cover',
    paused: false,
};

export default UgoiraViewComponent;