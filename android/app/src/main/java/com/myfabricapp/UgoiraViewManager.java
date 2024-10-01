package com.myfabricapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";
    private Boolean lastPausedState = null;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    @ReactProp(name = "paused")
    public void setPaused(UgoiraView view, Boolean paused) {
        if (paused == null) {
            return;
        }
        if (lastPausedState == null || lastPausedState != paused) {
            if (paused) {
                view.pauseAnimation();
            } else {
                view.resumeAnimation();
            }
            lastPausedState = paused;
        }
    }
}