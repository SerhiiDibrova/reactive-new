package UgoiraView;

import React from 'react';
import { requireNativeComponent } from 'react-native';

const NativeUgoiraView = requireNativeComponent('UgoiraView');

const UgoiraView = ({ images, width, height, resizeMode, paused }) => {
    return (
        <NativeUgoiraView
            images={images}
            style={{ width, height }}
            resizeMode={resizeMode}
            paused={paused}
        />
    );
};

export default UgoiraView;