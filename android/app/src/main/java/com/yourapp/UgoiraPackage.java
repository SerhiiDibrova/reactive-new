package com.yourapp;

import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.ReactPackage;
import com.facebook.react.fabric.FabricComponents;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UgoiraPackage implements ReactPackage {

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        UgoiraViewManager ugoiraViewManager = new UgoiraViewManager();
        viewManagers.add(ugoiraViewManager);
        FabricComponents.register("UgoiraView", ugoiraViewManager);
        return viewManagers;
    }

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }
}