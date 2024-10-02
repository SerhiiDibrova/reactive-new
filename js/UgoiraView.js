package js;

import React from 'react';
import { requireNativeComponent } from 'react-native';

const UgoiraView = requireNativeComponent('UgoiraView');

const UgoiraComponent = ({ height, width, otherProp1, otherProp2, ...props }) => {
    return (
        <UgoiraView
            style={{ height, width }}
            height={height}
            width={width}
            otherProp1={otherProp1}
            otherProp2={otherProp2}
            {...props}
        />
    );
};

UgoiraComponent.setHeight = (height) => {
    // Implementation for setting height
};

export default UgoiraComponent;