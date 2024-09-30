package com.utopia.pxviewr.UgoiraView;

import android.graphics.Bitmap;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.Arguments;

public class UgoiraViewModel extends ReactContextBaseJavaModule {
    private String uri;
    private Integer delay;
    private Bitmap bitmap;

    public UgoiraViewModel(ReactApplicationContext reactContext, String uri, Integer delay, Bitmap bitmap) {
        super(reactContext);
        this.uri = uri;
        this.delay = delay;
        this.bitmap = bitmap;
    }

    @NonNull
    @Override
    public String getName() {
        return "UgoiraViewModel";
    }

    @ReactMethod
    public void getUri(Promise promise) {
        promise.resolve(uri);
    }

    @ReactMethod
    public void setUri(String uri) {
        if (uri != null) {
            this.uri = uri;
        } else {
            promise.reject("Invalid URI");
        }
    }

    @ReactMethod
    public void getDelay(Promise promise) {
        promise.resolve(delay);
    }

    @ReactMethod
    public void setDelay(Integer delay) {
        if (delay != null) {
            this.delay = delay;
        } else {
            promise.reject("Invalid delay");
        }
    }

    @ReactMethod
    public void getBitmap(Promise promise) {
        if (bitmap != null) {
            WritableMap map = Arguments.createMap();
            // Convert bitmap to a format that can be sent to JavaScript
            promise.resolve(map);
        } else {
            promise.reject("Bitmap is null");
        }
    }

    @ReactMethod
    public void setBitmap(Bitmap bitmap) {
        if (bitmap != null) {
            this.bitmap = bitmap;
        } else {
            promise.reject("Invalid bitmap");
        }
    }
}