package com.utopia.pxviewr;

import android.app.Application;
import android.content.Context;

import com.squareup.leakcanary.LeakCanary;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import java.lang.reflect.InvocationTargetException;
import java.util.List;
import com.utopia.pxviewr.UgoiraView.UgoiraViewPackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            var packages = new PackageList(this).getPackages();
            packages.add(new UgoiraViewPackage());
            return packages;
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, false);
        initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
        if (LeakCanary.isInAnalyzerProcess(this)) {
            return;
        }
        LeakCanary.install(this);
    }

    private static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
        if (BuildConfig.DEBUG) {
            try {
                Class<?> aClass = Class.forName("com.utopia.pxviewr.ReactNativeFlipper");
                aClass.getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
                        .invoke(null, context, reactInstanceManager);
            } catch (ClassNotFoundException | NoSuchMethodException | IllegalAccessException | InvocationTargetException e) {
                e.printStackTrace();
            }
        }
    }
}