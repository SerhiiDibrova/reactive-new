package com.yourapp;

import android.app.Application;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.soloader.SoLoader;
import com.facebook.react.ReactNativeConfig;
import com.facebook.react.fabric.Fabric;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return MainApplication.this.getPackages();
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }

        @Override
        protected ReactNativeConfig getReactNativeConfig() {
            return ReactNativeConfig.DEFAULT;
        }

        @Override
        protected boolean isFabricEnabled() {
            return true;
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        try {
            SoLoader.init(this, /* native exopackage */ false);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    protected List<ReactPackage> getPackages() {
        return new PackageList(this).getPackages();
    }
}