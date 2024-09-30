package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    private static final String REACT_CLASS = "UgoiraView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext context) {
        return new UgoiraView(context);
    }

    @ReactProp(name = "paused", defaultBoolean = false)
    public void setPaused(UgoiraView view, boolean paused) {
        if (paused) {
            view.pauseAnimation();
        } else {
            view.resumeAnimation();
        }
    }
}