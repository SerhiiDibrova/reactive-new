package com.myfabricapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.ReactPackage;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyFabricAppPackage implements ReactPackage {

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

class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView(reactContext);
    }

    @ReactMethod
    public void setWidth(UgoiraView view, int width) {
        int validatedWidth = Math.max(width, 1);
        view.setWidth(validatedWidth);
        view.requestLayout();
    }
}