package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.bridge.ReactContext

class UgoiraViewManager : SimpleViewManager<UgoiraView>() {
    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "paused")
    fun setPaused(view: UgoiraView?, paused: Boolean) {
        if (view == null) {
            return
        }
        if (paused) {
            view.pauseAnimation()
        } else {
            view.resumeAnimation()
        }
    }

    companion object {
        fun registerWith(reactContext: ReactApplicationContext) {
            reactContext
                .getNativeModule(UIManagerModule::class.java)
                ?.registerViewManager("UgoiraView", UgoiraViewManager())
        }
    }
}