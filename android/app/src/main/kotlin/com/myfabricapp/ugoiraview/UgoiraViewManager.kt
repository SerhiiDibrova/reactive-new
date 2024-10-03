package com.myfabricapp.ugoiraview

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ViewManager

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "images")
    fun setImages(view: UgoiraView, images: ReadableArray?) {
        if (images != null && images.size() > 0) {
            view.setImages(images)
        }
    }

    @ReactProp(name = "width")
    fun setWidth(view: UgoiraView, width: Int) {
        if (width >= 0) {
            view.setWidth(width)
        }
    }

    @ReactProp(name = "height")
    fun setHeight(view: UgoiraView, height: Int) {
        if (height >= 0) {
            view.setHeight(height)
        }
    }

    @ReactProp(name = "resizeMode")
    fun setResizeMode(view: UgoiraView, resizeMode: String?) {
        if (resizeMode != null) {
            view.setResizeMode(resizeMode)
        }
    }

    @ReactProp(name = "paused")
    fun setPaused(view: UgoiraView, paused: Boolean) {
        view.setPaused(paused)
    }
}

class UgoiraViewPackage : ReactPackage {
    override fun createNativeModules(reactContext: ReactApplicationContext): List<NativeModule> {
        return emptyList()
    }

    override fun createViewManagers(reactContext: ReactApplicationContext): List<ViewManager<*, *>> {
        return listOf(UgoiraViewManager())
    }
}