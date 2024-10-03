package com.example;

import React from 'react';
import { requireNativeComponent } from 'react-native';
import PropTypes from 'prop-types';

const UgoiraView = requireNativeComponent('UgoiraView');

const UgoiraComponent = ({ width }) => {
    return <UgoiraView style={{ width }} />;
};

UgoiraComponent.propTypes = {
    width: PropTypes.number.isRequired,
};

export default UgoiraComponent;