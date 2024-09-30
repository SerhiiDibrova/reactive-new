package com.utopia.pxviewr.UgoiraView;

import android.graphics.Bitmap;
import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;

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
        this.uri = uri;
    }

    @ReactMethod
    public void getDelay(Promise promise) {
        promise.resolve(delay);
    }

    @ReactMethod
    public void setDelay(Integer delay) {
        this.delay = delay;
    }

    @ReactMethod
    public void getBitmap(Promise promise) {
        promise.resolve(bitmap);
    }

    @ReactMethod
    public void setBitmap(Bitmap bitmap) {
        this.bitmap = bitmap;
    }
}