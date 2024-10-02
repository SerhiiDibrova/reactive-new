package com.yourapp;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.Canvas;
import android.util.AttributeSet;
import android.view.MotionEvent;
import android.view.ViewGroup;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

public class UgoiraView extends ViewGroup {
    private Bitmap ugoiraImage;

    public UgoiraView(Context context) {
        super(context);
    }

    public UgoiraView(Context context, AttributeSet attrs) {
        super(context, attrs);
    }

    public UgoiraView(Context context, AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
    }

    public void loadImage(String imagePath) {
        if (ugoiraImage != null) {
            ugoiraImage.recycle();
        }
        ugoiraImage = BitmapFactory.decodeFile(imagePath);
        invalidate();
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        if (ugoiraImage != null) {
            canvas.drawBitmap(ugoiraImage, 0, 0, null);
        }
    }

    @Override
    public boolean onTouchEvent(MotionEvent event) {
        // Handle touch events
        return true;
    }

    @Override
    protected LayoutParams generateDefaultLayoutParams() {
        return new LayoutParams(LayoutParams.MATCH_PARENT, LayoutParams.MATCH_PARENT);
    }

    @Override
    protected LayoutParams generateLayoutParams(AttributeSet attrs) {
        return new LayoutParams(getContext(), attrs);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        layout(0, 0, right - left, bottom - top);
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
    public void loadImage(String imagePath, int viewId) {
        UgoiraView ugoiraView = (UgoiraView) getViewById(viewId);
        if (ugoiraView != null) {
            ugoiraView.loadImage(imagePath);
        }
    }
}