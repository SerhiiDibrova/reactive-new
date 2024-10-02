package com.yourapp;

import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;

public class UgoiraViewModule extends ReactContextBaseJavaModule {

    private UgoiraView ugoiraView;

    public UgoiraViewModule(ReactApplicationContext reactContext, UgoiraView ugoiraView) {
        super(reactContext);
        this.ugoiraView = ugoiraView;
    }

    @Override
    public String getName() {
        return "UgoiraViewModule";
    }

    @ReactMethod
    public void setImages(ReadableArray images, Promise promise) {
        try {
            ugoiraView.setImages(images);
            promise.resolve(null);
        } catch (Exception e) {
            promise.reject("ERROR", e);
        }
    }
}