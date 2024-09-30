package com.utopia.pxviewr.UgoiraView;

import android.content.Context;
import android.graphics.Bitmap;
import android.graphics.drawable.AnimationDrawable;
import android.graphics.drawable.BitmapDrawable;
import android.util.Log;
import android.widget.ImageView;

import com.bumptech.glide.Glide;
import com.bumptech.glide.request.target.SimpleTarget;
import com.bumptech.glide.request.transition.Transition;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;

import java.util.ArrayList;

import io.reactivex.Observable;
import io.reactivex.ObservableEmitter;
import io.reactivex.ObservableOnSubscribe;
import io.reactivex.ObservableSource;
import io.reactivex.Observer;
import io.reactivex.annotations.NonNull;
import io.reactivex.disposables.Disposable;
import io.reactivex.functions.Function;

public class UgoiraView extends ImageView {
    private ArrayList<UgoiraViewModel> models;
    private AnimationDrawable animationDrawable;
    private int width;
    private int height;

    public UgoiraView(Context context) {
        super(context);
        animationDrawable = new AnimationDrawable();
    }

    private void setupAnimationDrawable() {
        for (UgoiraViewModel model : models) {
            BitmapDrawable drawable = new BitmapDrawable(this.getResources(), model.getBitmap());
            animationDrawable.addFrame(drawable, model.getDelay());
        }
        animationDrawable.setOneShot(false);
        animationDrawable.start();
        this.setImageDrawable(animationDrawable);
    }

    public void setImages(final ReadableArray images) {
        if (images == null) return;
        models = new ArrayList<>(images.size());
        for (int index = 0; index < images.size(); index++) {
            ReadableMap map = images.getMap(index);
            models.add(new UgoiraViewModel(map.getString("uri"), map.getInt("delay"), null));
        }
        maybeLoadImages();
    }

    private void maybeLoadImages() {
        if (width > 0 && height > 0 && models != null && models.size() > 0) {
            final Context context = this.getContext();
            Observable.fromIterable(models).flatMap(new Function<UgoiraViewModel, ObservableSource<UgoiraViewModel>>() {
                @Override
                public ObservableSource<UgoiraViewModel> apply(@NonNull final UgoiraViewModel model) throws Exception {
                    return Observable.create(new ObservableOnSubscribe<UgoiraViewModel>() {
                        @Override
                        public void subscribe(@NonNull final ObservableEmitter<UgoiraViewModel> e) throws Exception {
                            Glide.with(context).asBitmap()
                                    .load(model.getUri())
                                    .into(new SimpleTarget<Bitmap>(width, height) {
                                        @Override
                                        public void onResourceReady(Bitmap resource, Transition<? super Bitmap> transition) {
                                            model.setBitmap(resource);
                                            e.onNext(model);
                                            e.onComplete();
                                        }
                                    });
                        }
                    });
                }
            }).subscribe(new Observer<UgoiraViewModel>() {
                @Override
                public void onSubscribe(@NonNull Disposable d) {
                }

                @Override
                public void onNext(@NonNull UgoiraViewModel ugoiraViewModel) {
                }

                @Override
                public void onError(@NonNull Throwable e) {
                }

                @Override
                public void onComplete() {
                    setupAnimationDrawable();
                }
            });
        }
    }

    public void setWidth(int width) {
        this.width = width;
        maybeLoadImages();
    }

    public void setHeight(int height) {
        this.height = height;
        maybeLoadImages();
    }

    public void setImageScaleType(String resizeMode) {
        ScaleType scaleType;
        switch (resizeMode) {
            case "contain":
                scaleType = ScaleType.FIT_CENTER;
                break;
            case "cover":
                scaleType = ScaleType.CENTER_CROP;
                break;
            case "stretch":
                scaleType = ScaleType.FIT_XY;
                break;
            case "center":
                scaleType = ScaleType.CENTER_INSIDE;
                break;
            default:
                scaleType = ScaleType.CENTER_CROP;
                break;
        }
        this.setScaleType(scaleType);
    }

    public void pauseAnimation() {
        if (animationDrawable.isRunning()) {
            this.post(animationDrawable::stop);
        }
    }

    public void resumeAnimation() {
        if (!animationDrawable.isRunning()) {
            this.post(animationDrawable::start);
        }
    }
}
```

```gradle
android {
    ...
    defaultConfig {
        ...
        jniLibs.srcDirs = ['src/main/jniLibs']
        buildFeatures {
            fabric = true
        }
    }
    ...
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
    ...
}
```

```ruby
platform :ios, '11.0'
use_frameworks!

target 'YourApp' do
  pod 'React-Core', :path => '../node_modules/react-native/'
  pod 'React-RCTImage', :path => '../node_modules/react-native/Libraries/Image'
  pod 'React-RCTText', :path => '../node_modules/react-native/Libraries/Text'
  pod 'React-RCTWebView', :path => '../node_modules/react-native/Libraries/WebView'
  pod 'React-RCTAnimation', :path => '../node_modules/react-native/Libraries/NativeAnimation'
  pod 'React-RCTFabric', :path => '../node_modules/react-native/Libraries/Fabric'
  ...
end