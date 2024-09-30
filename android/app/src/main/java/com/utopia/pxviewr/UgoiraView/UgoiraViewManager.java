package com.utopia.pxviewr.UgoiraView;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.annotations.ReactPropGroup;
import com.facebook.react.uimanager.ViewProps;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

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

    @ReactProp(name = "images")
    public void setImages(UgoiraView view, ReadableArray images) {
        view.setImages(images);
    }

    @ReactProp(name = ViewProps.WIDTH)
    public void setWidth(UgoiraView view, int width) {
        view.setWidth(width);
    }

    @ReactProp(name = ViewProps.HEIGHT)
    public void setHeight(UgoiraView view, int height) {
        view.setHeight(height);
    }

    @ReactProp(name = "resizeMode")
    public void setResizeMode(UgoiraView view, String resizeMode) {
        if ("cover".equals(resizeMode) || "contain".equals(resizeMode) || "stretch".equals(resizeMode)) {
            view.setImageScaleType(resizeMode);
        }
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