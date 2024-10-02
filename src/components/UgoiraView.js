package src.components;

import React, { useEffect, useState } from 'react';
import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraView = requireNativeComponent('UgoiraView');

const acceptedResizeModes = ['fitCenter', 'centerCrop', 'centerInside', 'contain', 'cover', 'stretch'];

const UgoiraComponent = ({ resizeMode, images, ...props }) => {
    const [validResizeMode, setValidResizeMode] = useState('fitCenter');
    const [validImages, setValidImages] = useState([]);

    useEffect(() => {
        if (acceptedResizeModes.includes(resizeMode)) {
            setValidResizeMode(resizeMode);
        } else {
            console.error(`Invalid resizeMode prop: ${resizeMode}. Accepted values are: ${acceptedResizeModes.join(', ')}`);
            setValidResizeMode('fitCenter');
        }
    }, [resizeMode]);

    useEffect(() => {
        if (Array.isArray(images) && images.length > 0) {
            setValidImages(images);
        } else {
            console.error(`Invalid images prop: ${images}. It must be a non-empty array.`);
            setValidImages([]);
        }
    }, [images]);

    return (
        <View style={{ flex: 1 }}>
            <UgoiraView
                {...props}
                resizeMode={validResizeMode}
                images={validImages}
            />
        </View>
    );
};

UgoiraComponent.propTypes = {
    resizeMode: PropTypes.oneOf(acceptedResizeModes),
    images: PropTypes.array.isRequired,
};

export default UgoiraComponent;