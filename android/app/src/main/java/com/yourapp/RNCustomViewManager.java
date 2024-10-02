package com.yourapp;

import android.content.Context;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.view.View;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class RNCustomViewManager extends SimpleViewManager<RNCustomView> {
    public static final String REACT_CLASS = "RNCustomView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected RNCustomView createViewInstance(ThemedReactContext reactContext) {
        return new RNCustomView(reactContext);
    }

    @ReactProp(name = "propertyName")
    public void setPropertyName(RNCustomView view, String propertyName) {
        view.setPropertyName(propertyName);
    }
}

class RNCustomView extends View {
    private Paint paint;
    private String propertyName;
    private long startTime;

    public RNCustomView(Context context) {
        super(context);
        paint = new Paint();
        startTime = System.currentTimeMillis();
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
        invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (propertyName != null) {
            long elapsedTime = System.currentTimeMillis() - startTime;
            float animatedValue = (float) (Math.sin(elapsedTime / 500.0) * 127 + 128);
            paint.setColor((int) animatedValue << 16 | (int) animatedValue << 8 | (int) animatedValue);
            canvas.drawRect(0, 0, getWidth(), getHeight(), paint);
        }
    }
}