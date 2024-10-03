package com.myfabricapp.ugoira

import com.facebook.react.bridge.ReadableArray
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import android.util.Log

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    companion object {
        const val REACT_CLASS = "UgoiraView"
        private const val TAG = "UgoiraViewManager"
    }

    override fun getName(): String {
        return REACT_CLASS
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "images")
    fun setImages(view: UgoiraView, images: ReadableArray?) {
        if (images != null && images.size() > 0) {
            try {
                view.setImages(images)
            } catch (e: Exception) {
                Log.e(TAG, "Invalid images provided: ${e.message}")
                view.setImages(ReadableArray()) 
            }
        } else {
            Log.e(TAG, "Images array cannot be null or empty.")
            view.setImages(ReadableArray()) 
        }
    }

    @ReactProp(name = "width")
    fun setWidth(view: UgoiraView, width: Int) {
        if (width > 0) {
            view.setWidth(width)
        } else {
            Log.e(TAG, "Width must be greater than zero. Provided: $width")
        }
    }

    @ReactProp(name = "height")
    fun setHeight(view: UgoiraView, height: Int) {
        if (height > 0) {
            view.setHeight(height)
        } else {
            Log.e(TAG, "Height must be greater than zero. Provided: $height")
        }
    }

    @ReactProp(name = "resizeMode")
    fun setResizeMode(view: UgoiraView, resizeMode: String?) {
        val supportedModes = listOf("cover", "contain", "stretch")
        if (!resizeMode.isNullOrEmpty() && resizeMode in supportedModes) {
            view.setResizeMode(resizeMode)
        } else {
            Log.e(TAG, "Invalid resize mode provided: $resizeMode. Supported modes: $supportedModes")
        }
    }

    @ReactProp(name = "paused")
    fun setPaused(view: UgoiraView, paused: Boolean) {
        view.setPaused(paused)
    }
}