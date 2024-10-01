package com.example.yourapp

import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.annotations.ReactPropGroup
import com.facebook.react.uimanager.annotations.ReactMethod
import com.facebook.react.uimanager.annotations.ReactProp
import android.util.Log

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

    @ReactMethod
    fun setImages(view: UgoiraView, images: ReadableArray) {
        try {
            if (images.size() == 0) {
                throw IllegalArgumentException("Images array cannot be empty")
            }
            val imageList = mutableListOf<String>()
            for (i in 0 until images.size()) {
                val image = images.getString(i)
                if (image.isNullOrEmpty()) {
                    throw IllegalArgumentException("Invalid image data at index $i")
                }
                imageList.add(image)
            }
            view.setImages(imageList)
        } catch (e: Exception) {
            Log.e(REACT_CLASS, "Error setting images: ${e.message}")
        }
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

    @ReactMethod
    fun pause(view: UgoiraView) {
        view.pause()
    }

    @ReactMethod
    fun resume(view: UgoiraView) {
        view.resume()
    }
}