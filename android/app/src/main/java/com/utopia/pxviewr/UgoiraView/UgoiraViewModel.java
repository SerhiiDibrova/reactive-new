package com.utopia.pxviewr.UgoiraView;

import android.graphics.Bitmap;
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

    @Override
    public String getName() {
        return "UgoiraViewModel";
    }

    public String getUri() {
        return uri;
    }

    public void setUri(String uri) {
        this.uri = uri;
    }

    public Integer getDelay() {
        return delay;
    }

    public void setDelay(Integer delay) {
        this.delay = delay;
    }

    public Bitmap getBitmap() {
        return bitmap;
    }

    public void setBitmap(Bitmap bitmap) {
        this.bitmap = bitmap;
    }
}