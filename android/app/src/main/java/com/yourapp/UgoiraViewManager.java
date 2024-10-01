package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    public void setPaused(UgoiraView view, boolean paused) {
        if (paused) {
            view.pauseAnimation();
        } else {
            view.resumeAnimation();
        }
    }

    public void setImages(UgoiraView view, String[] images) {
        view.setImages(images);
    }

    public void setWidth(UgoiraView view, int width) {
        view.setWidth(width);
    }

    public void setHeight(UgoiraView view, int height) {
        view.setHeight(height);
    }

    public void setScalingMode(UgoiraView view, String scalingMode) {
        view.setScalingMode(scalingMode);
    }
}