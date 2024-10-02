package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.annotations.ReactProp;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    public static final String REACT_CLASS = "UgoiraView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext context) {
        return new UgoiraView(context);
    }

    @ReactProp(name = "images")
    public void setImages(UgoiraView view, ReadableArray images) {
        view.setImages(images);
    }

    @ReactProp(name = "width")
    public void setWidth(UgoiraView view, int width) {
        view.setWidth(width);
    }

    @ReactProp(name = "height")
    public void setHeight(UgoiraView view, int height) {
        view.setHeight(height);
    }

    @ReactProp(name = "resizeMode")
    public void setResizeMode(UgoiraView view, String resizeMode) {
        view.setResizeMode(resizeMode);
    }

    @ReactProp(name = "paused")
    public void setPaused(UgoiraView view, boolean paused) {
        view.setPaused(paused);
    }

    @Override
    public void onDropViewInstance(UgoiraView view) {
        view.releaseResources();
        super.onDropViewInstance(view);
    }
}