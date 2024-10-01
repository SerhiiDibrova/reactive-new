package com.yourapp;

import com.facebook.react.ReactApplicationContext;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UgoiraViewPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new UgoiraViewManager());
        return viewManagers;
    }
}

package com.yourapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.bridge.ReactMethod;

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

    @ReactMethod
    public void setPaused(boolean paused) {
        UgoiraView ugoiraView = getViewInstance();
        if (ugoiraView != null) {
            ugoiraView.setPaused(paused);
        }
    }

    private UgoiraView getViewInstance() {
        // Logic to retrieve the current instance of UgoiraView
        return null; // Placeholder for actual implementation
    }
}