package com.yourapp;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.AttributeSet;
import android.view.View;
import android.widget.ImageView;
import android.widget.FrameLayout;

import androidx.annotation.Nullable;

public class UgoiraView extends FrameLayout {
    private ImageView imageView;
    private Bitmap[] frames;
    private int currentFrame;
    private boolean isPlaying;
    private int width;
    private int height;
    private ResizeMode resizeMode;

    public enum ResizeMode {
        FIT_CENTER,
        CENTER_CROP,
        CENTER_INSIDE
    }

    public UgoiraView(Context context) {
        super(context);
        init();
    }

    public UgoiraView(Context context, @Nullable AttributeSet attrs) {
        super(context, attrs);
        init();
    }

    public UgoiraView(Context context, @Nullable AttributeSet attrs, int defStyleAttr) {
        super(context, attrs, defStyleAttr);
        init();
    }

    private void init() {
        imageView = new ImageView(getContext());
        addView(imageView);
        currentFrame = 0;
        isPlaying = false;
        width = LayoutParams.WRAP_CONTENT;
        height = LayoutParams.WRAP_CONTENT;
        resizeMode = ResizeMode.FIT_CENTER;
    }

    public void setImages(int[] imageResIds) {
        frames = new Bitmap[imageResIds.length];
        for (int i = 0; i < imageResIds.length; i++) {
            frames[i] = BitmapFactory.decodeResource(getResources(), imageResIds[i]);
        }
    }

    public void setImages(Bitmap[] bitmaps) {
        frames = bitmaps;
    }

    public void setWidth(int width) {
        this.width = width;
        requestLayout();
    }

    public void setHeight(int height) {
        this.height = height;
        requestLayout();
    }

    public void setResizeMode(ResizeMode resizeMode) {
        this.resizeMode = resizeMode;
        requestLayout();
    }

    public void play() {
        isPlaying = true;
        post(playRunnable);
    }

    public void pause() {
        isPlaying = false;
        removeCallbacks(playRunnable);
    }

    private final Runnable playRunnable = new Runnable() {
        @Override
        public void run() {
            if (isPlaying && frames != null && frames.length > 0) {
                imageView.setImageBitmap(frames[currentFrame]);
                currentFrame = (currentFrame + 1) % frames.length;
                postDelayed(this, 100);
            }
        }
    };

    @Override
    protected void onMeasure(int widthMeasureSpec, int heightMeasureSpec) {
        int measuredWidth = MeasureSpec.getSize(widthMeasureSpec);
        int measuredHeight = MeasureSpec.getSize(heightMeasureSpec);
        setMeasuredDimension(width > 0 ? width : measuredWidth, height > 0 ? height : measuredHeight);
    }

    @Override
    protected void onLayout(boolean changed, int left, int top, int right, int bottom) {
        int widthSpec = MeasureSpec.makeMeasureSpec(width, MeasureSpec.EXACTLY);
        int heightSpec = MeasureSpec.makeMeasureSpec(height, MeasureSpec.EXACTLY);
        imageView.measure(widthSpec, heightSpec);
        imageView.layout(0, 0, width, height);
        switch (resizeMode) {
            case FIT_CENTER:
                imageView.setScaleType(ImageView.ScaleType.FIT_CENTER);
                break;
            case CENTER_CROP:
                imageView.setScaleType(ImageView.ScaleType.CENTER_CROP);
                break;
            case CENTER_INSIDE:
                imageView.setScaleType(ImageView.ScaleType.CENTER_INSIDE);
                break;
        }
    }
}