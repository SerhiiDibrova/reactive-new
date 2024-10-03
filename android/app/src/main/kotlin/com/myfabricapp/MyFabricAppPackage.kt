package com.myfabricapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.uimanager.ThemedReactContext

class UgoiraViewManager : ViewManager<UgoiraView, UgoiraViewShadowNode>() {
    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    override fun createShadowNodeInstance(): UgoiraViewShadowNode {
        return UgoiraViewShadowNode()
    }

    override fun updateExtraData(root: UgoiraView, extraData: Any) {}

    override fun getShadowNodeClass(): Class<UgoiraViewShadowNode> {
        return UgoiraViewShadowNode::class.java
    }
}

class UgoiraNativeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "UgoiraNativeModule"
    }

    @ReactMethod
    fun pauseAnimation() {
        // Implementation for pausing the animation
    }
}

class MyFabricAppPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return listOf(UgoiraNativeModule(reactContext))
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(UgoiraViewManager())
    }
}