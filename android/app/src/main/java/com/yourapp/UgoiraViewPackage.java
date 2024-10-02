package com.yourapp;

import com.facebook.react.ReactApplicationContext;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.uimanager.ViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.ReactShadowNode;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class UgoiraViewPackage implements ReactPackage {
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Collections.emptyList();
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> viewManagers = new ArrayList<>();
        viewManagers.add(new UgoiraViewManager());
        return viewManagers;
    }
}

public class UgoiraView {
    private String resizeMode;

    public void setResizeMode(String resizeMode) {
        this.resizeMode = resizeMode;
    }

    public String getResizeMode() {
        return resizeMode;
    }
}

class UgoiraViewManager extends ViewManager<UgoiraView, UgoiraViewShadowNode> {
    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    public UgoiraView createViewInstance(ThemedReactContext reactContext) {
        return new UgoiraView();
    }

    @Override
    public void updateExtraData(UgoiraView root, Object extraData) {
        if (extraData instanceof String) {
            root.setResizeMode((String) extraData);
        }
    }

    @Override
    public UgoiraViewShadowNode createShadowNodeInstance() {
        return new UgoiraViewShadowNode();
    }

    @Override
    public Class<UgoiraViewShadowNode> getShadowNodeClass() {
        return UgoiraViewShadowNode.class;
    }
}

class UgoiraViewShadowNode extends ReactShadowNode {
}