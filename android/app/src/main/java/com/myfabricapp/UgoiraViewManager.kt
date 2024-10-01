package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.myfabricapp.UgoiraView

class UgoiraViewManager(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    private val ugoiraView: UgoiraView = UgoiraView(reactContext)

    override fun getName(): String {
        return "UgoiraViewManager"
    }

    @ReactMethod
    fun resumeAnimation() {
        ugoiraView.resumeAnimation()
    }
}