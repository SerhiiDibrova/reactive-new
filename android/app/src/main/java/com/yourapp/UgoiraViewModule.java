package com.yourapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class UgoiraViewModule extends ReactContextBaseJavaModule {
    private final UgoiraViewManager ugoiraViewManager;

    public UgoiraViewModule(ReactApplicationContext reactContext, UgoiraViewManager ugoiraViewManager) {
        super(reactContext);
        this.ugoirViewManager = ugoiraViewManager;
    }

    @Override
    public String getName() {
        return "UgoiraViewModule";
    }

    @ReactMethod
    public void setResizeMode(String mode, Promise promise) {
        try {
            ugoiraViewManager.setResizeMode(mode);
            promise.resolve(null);
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}