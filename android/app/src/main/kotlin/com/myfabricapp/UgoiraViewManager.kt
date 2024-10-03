package com.myfabricapp

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ThemedReactContext
import com.facebook.react.ReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.uimanager.ViewManager
import com.facebook.react.bridge.ReactApplicationContext

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    companion object {
        const val REACT_CLASS = "UgoiraView"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "images")
    fun setImages(view: UgoiraView, images: ReadableArray) {
        view.setImages(images)
    }

    @ReactProp(name = "width")
    fun setWidth(view: UgoiraView, width: Int) {
        view.setWidth(width)
    }

    @ReactProp(name = "height")
    fun setHeight(view: UgoiraView, height: Int) {
        view.setHeight(height)
    }

    @ReactProp(name = "resizeMode")
    fun setResizeMode(view: UgoiraView, resizeMode: String) {
        view.setResizeMode(resizeMode)
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