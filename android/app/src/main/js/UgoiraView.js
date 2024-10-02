package com.yourapp;

import React, { useRef, useEffect } from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

const UgoiraViewNative = requireNativeComponent('UgoiraView');

const UgoiraView = ({ width, images, style }) => {
    const ugoiraRef = useRef(null);

    useEffect(() => {
        setWidth(width);
    }, [width]);

    const setWidth = (newWidth) => {
        if (ugoiraRef.current) {
            ugoiraRef.current.setNativeProps({ width: newWidth });
        }
    };

    return (
        <UgoiraViewNative
            ref={ugoiraRef}
            style={[{ width }, style]}
            width={width}
            images={images}
        />
    );
};

UgoiraView.propTypes = {
    width: PropTypes.number.isRequired,
    images: PropTypes.arrayOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object
    ])).isRequired,
    style: ViewPropTypes.style,
};

UgoiraView.defaultProps = {
    style: {},
};

export default UgoiraView;