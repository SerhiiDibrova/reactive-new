package com.yourapp;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import android.view.View;
import android.widget.ImageView;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import android.os.Handler;
import android.os.Looper;

public class UgoiraViewManager extends SimpleViewManager<ImageView> {
    public static final String REACT_CLASS = "UgoiraView";
    private ImageView imageView;
    private Handler handler;
    private boolean isAnimating;
    private int currentFrame;
    private Bitmap[] frames;

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    @Override
    protected ImageView createViewInstance(ThemedReactContext reactContext) {
        imageView = new ImageView(reactContext);
        handler = new Handler(Looper.getMainLooper());
        return imageView;
    }

    @ReactMethod
    public void startAnimation() {
        if (!isAnimating) {
            isAnimating = true;
            currentFrame = 0;
            loadFrames();
            animateFrames();
        }
    }

    @ReactMethod
    public void stopAnimation() {
        isAnimating = false;
        handler.removeCallbacksAndMessages(null);
    }

    @ReactProp(name = "imageSource")
    public void setImageSource(ImageView view, String imageSource) {
        if (isValidImageSource(imageSource)) {
            new Thread(() -> {
                try {
                    URL url = new URL(imageSource);
                    HttpURLConnection connection = (HttpURLConnection) url.openConnection();
                    connection.setDoInput(true);
                    connection.connect();
                    InputStream input = connection.getInputStream();
                    Bitmap bitmap = BitmapFactory.decodeStream(input);
                    view.post(() -> view.setImageBitmap(bitmap));
                } catch (Exception e) {
                    e.printStackTrace();
                }
            }).start();
        }
    }

    private boolean isValidImageSource(String imageSource) {
        return imageSource != null && (imageSource.startsWith("http://") || imageSource.startsWith("https://"));
    }

    private void loadFrames() {
        frames = new Bitmap[10]; 
        for (int i = 0; i < frames.length; i++) {
            frames[i] = loadFrame(i); 
        }
    }

    private Bitmap loadFrame(int index) {
        String imageUrl = "http://example.com/frame" + index + ".png"; 
        try {
            URL url = new URL(imageUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setDoInput(true);
            connection.connect();
            InputStream input = connection.getInputStream();
            return BitmapFactory.decodeStream(input);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    private void animateFrames() {
        if (isAnimating && frames != null && frames.length > 0) {
            if (frames[currentFrame] != null) {
                imageView.setImageBitmap(frames[currentFrame]);
            }
            currentFrame = (currentFrame + 1) % frames.length;
            handler.postDelayed(this::animateFrames, 100); 
        }
    }
}