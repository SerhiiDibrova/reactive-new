package com.myfabricapp;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.bridge.Promise;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MyFabricAppPackage implements ReactPackage {

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new UgoiraViewManager(reactContext));
        return modules;
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new UgoiraViewManager(reactContext));
        return viewManagers;
    }
}

package com.myfabricapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class UgoiraViewManager extends ReactContextBaseJavaModule {

    public UgoiraViewManager(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UgoiraViewManager";
    }

    @ReactMethod
    public void setPaused(boolean paused, Promise promise) {
        // Implementation of setPaused functionality
        promise.resolve(null);
    }
}