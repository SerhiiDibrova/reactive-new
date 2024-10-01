package com.myfabricapp;

import com.facebook.react.ReactApplication;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import android.view.View;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyFabricAppPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new UgoiraViewManager());
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new UgoiraViewManager());
        return viewManagers;
    }
}

class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
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
        // Implementation for pausing the UgoiraView
    }
}

class UgoiraView extends View {
    public UgoiraView(ThemedReactContext context) {
        super(context);
    }
}