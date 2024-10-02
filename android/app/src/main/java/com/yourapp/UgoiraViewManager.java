package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.UIManagerModule;
import com.yourapp.UgoiraView;

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

    @ReactProp(name = "source")
    public void setSource(UgoiraView view, String source) {
        if (source != null && !source.isEmpty()) {
            view.setSource(source);
        } else {
            throw new IllegalArgumentException("Invalid source provided");
        }
    }

    @ReactProp(name = "autoplay", defaultBoolean = true)
    public void setAutoplay(UgoiraView view, boolean autoplay) {
        view.setAutoplay(autoplay);
    }

    @ReactProp(name = "loop", defaultBoolean = true)
    public void setLoop(UgoiraView view, boolean loop) {
        view.setLoop(loop);
    }

    public void updateView(UgoiraView view, String source, boolean autoplay, boolean loop) {
        setSource(view, source);
        setAutoplay(view, autoplay);
        setLoop(view, loop);
    }

    @Override
    public void removeView(ThemedReactContext reactContext, UgoiraView view) {
        view.cleanup();
    }

    public static void register(ReactApplicationContext reactContext) {
        reactContext.getNativeModule(UIManagerModule.class).registerViewManager(REACT_CLASS, new UgoiraViewManager());
    }
}