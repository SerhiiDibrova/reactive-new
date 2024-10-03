package com.example;

import React, { useEffect, useRef } from 'react';
import { requireNativeComponent } from 'react-native';

const UgoiraView = requireNativeComponent('UgoiraView');

const UgoiraViewWrapper = (props) => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => {
            isMounted.current = false;
        };
    }, []);

    useEffect(() => {
        if (isMounted.current) {
            props.resumeAnimation && props.resumeAnimation();
        }
    }, [props]);

    return <UgoiraView {...props} />;
};

export default UgoiraViewWrapper;