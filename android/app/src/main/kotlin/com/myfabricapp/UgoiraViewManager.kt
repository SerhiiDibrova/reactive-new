package com.myfabricapp

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.ThemedReactContext

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    private var isPaused: Boolean = false

    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "paused")
    fun setPaused(view: UgoiraView, paused: Boolean) {
        if (isPaused != paused) {
            isPaused = paused
            try {
                if (paused) {
                    view.pauseAnimation()
                } else {
                    view.resumeAnimation()
                }
            } catch (e: Exception) {
                Log.e("UgoiraViewManager", "Error changing animation state: ${e.message}")
            }
        }
    }
}