package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.modules.core.DeviceEventManagerModule

class UgoiraModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName(): String {
        return "UgoiraModule"
    }

    @ReactMethod
    fun setImageScaleType(scaleType: String, promise: Promise) {
        val validScaleTypes = listOf("fitCenter", "centerCrop", "center", "fitXY")
        if (validScaleTypes.contains(scaleType)) {
            UgoiraViewManager.setScaleType(scaleType)
            promise.resolve(null)
        } else {
            promise.reject("INVALID_SCALE_TYPE", "The provided scale type is invalid.")
        }
    }
}