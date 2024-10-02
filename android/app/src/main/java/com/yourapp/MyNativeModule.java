package com.yourapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactModule;

@ReactModule(name = "MyNativeModule")
public class MyNativeModule extends ReactContextBaseJavaModule {

    public MyNativeModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "MyNativeModule";
    }

    @ReactMethod
    public void createRootView(Promise promise) {
        try {
            // Logic to create root view
            promise.resolve("Root view created");
        } catch (Exception e) {
            promise.reject("ERROR", "Failed to create root view", e);
        }
    }
}