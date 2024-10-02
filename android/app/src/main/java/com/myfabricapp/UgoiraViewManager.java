package com.myfabricapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.bridge.ThemedReactContext;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    @ReactProp(name = "paused")
    public void setPaused(UgoiraView view, boolean paused) {
        if (view != null) {
            if (paused) {
                view.pauseAnimation();
            } else {
                view.resumeAnimation();
            }
        }
    }
}