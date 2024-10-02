package com.myfabricapp;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactRootView;
import com.facebook.soloader.SoLoader;
import com.facebook.react.fabric.Fabric;
import com.facebook.react.fabric.ReactNativeConfig;

import java.util.List;

public class MyReactNativeHost extends ReactNativeHost {

    public MyReactNativeHost(Application application) {
        super(application);
    }

    @Override
    public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return MainApplication.getPackages();
    }

    @Override
    protected ReactInstanceManager createReactInstanceManager() {
        return ReactInstanceManager.builder()
                .setApplication(getApplication())
                .setJSMainModulePath("index")
                .addPackages(getPackages())
                .setUseDeveloperSupport(getUseDeveloperSupport())
                .setInitialLifecycleState(LifecycleState.RESUMED)
                .setFabricEnabled(true)
                .build();
    }
}