package com.myfabricapp

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    companion object {
        const val REACT_CLASS = "UgoiraView"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(context: ThemedReactContext): UgoiraView {
        return UgoiraView(context)
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