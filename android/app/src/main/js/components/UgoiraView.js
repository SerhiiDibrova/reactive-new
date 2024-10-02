package components;

import React, { useRef, useEffect } from 'react';
import { requireNativeComponent, View } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraViewNative = requireNativeComponent('UgoiraView');

const UgoiraView = (props) => {
    const ugoiraRef = useRef(null);

    const setHeight = (height) => {
        if (ugoiraRef.current) {
            ugoiraRef.current.setNativeProps({ height });
        }
    };

    useEffect(() => {
        setHeight(props.height || 0);
    }, [props.height]);

    return (
        <View>
            <UgoiraViewNative
                {...props}
                ref={ugoiraRef}
                height={props.height || 0}
            />
        </View>
    );
};

UgoiraView.propTypes = {
    height: PropTypes.number,
};

export default UgoiraView;