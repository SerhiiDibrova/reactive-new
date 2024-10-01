package com.myfabricapp.ugoiraview;

import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";
    private UgoiraView ugoiraView;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        ugoiraView = new UgoiraView(reactContext);
        return ugoiraView;
    }

    @ReactMethod
    public void resumeAnimation() {
        if (ugoiraView != null) {
            ugoiraView.resumeAnimation();
        }
    }
}