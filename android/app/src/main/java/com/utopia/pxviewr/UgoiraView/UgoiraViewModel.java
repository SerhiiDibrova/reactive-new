package com.utopia.pxviewr.UgoiraView;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

public class UgoiraViewModel extends ReactContextBaseJavaModule {
    private String uri;
    private Integer delay;
    private String bitmapUri;

    public UgoiraViewModel(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "UgoiraViewModel";
    }

    @ReactMethod
    public void setUri(String uri) {
        this.uri = uri;
    }

    @ReactMethod
    public String getUri() {
        return uri;
    }

    @ReactMethod
    public void setDelay(Integer delay) {
        this.delay = delay;
    }

    @ReactMethod
    public Integer getDelay() {
        return delay;
    }

    @ReactMethod
    public void setBitmapUri(String bitmapUri) {
        this.bitmapUri = bitmapUri;
    }

    @ReactMethod
    public String getBitmapUri() {
        return bitmapUri;
    }
}