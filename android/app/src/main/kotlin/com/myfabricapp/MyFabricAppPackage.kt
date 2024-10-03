package com.myfabricapp

import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.bridge.ReactMethod
import android.view.View

class MyFabricAppPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return emptyList()
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(UgoiraViewManager())
    }
}

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactMethod
    fun setPaused(paused: Boolean) {
        // Implementation for setPaused functionality
    }
}

class UgoiraView(context: ThemedReactContext) : View(context) {
    // Implementation of UgoiraView
}