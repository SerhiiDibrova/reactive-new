package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.ReactContext;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    public void setHeight(ReactContext reactContext, UgoiraView view, int height) {
        view.setHeight(height);
    }

    public void setImageScaleType(ReactContext reactContext, UgoiraView view, String resizeMode) {
        view.setImageScaleType(resizeMode);
    }

    public void pauseAnimation(ReactContext reactContext, UgoiraView view) {
        view.pauseAnimation();
    }

    public void resumeAnimation(ReactContext reactContext, UgoiraView view) {
        view.resumeAnimation();
    }
}