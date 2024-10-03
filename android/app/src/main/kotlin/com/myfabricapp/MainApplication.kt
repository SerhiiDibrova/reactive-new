package com.myfabricapp

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.soloader.SoLoader
import com.facebook.react.shell.MainReactPackage
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import android.view.View
import android.widget.FrameLayout

class MainApplication : Application(), ReactApplication {

    private val mReactNativeHost: ReactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return listOf(
                MainReactPackage(),
                UgoiraViewManager()
            )
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return mReactNativeHost
    }

    override fun onCreate() {
        super.onCreate()
        SoLoader.init(this, false)
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
    fun setResizeMode(view: UgoiraView, mode: String) {
        view.setResizeMode(mode)
    }
}

class UgoiraView(context: ThemedReactContext) : FrameLayout(context) {
    private var resizeMode: String = "contain"

    fun setResizeMode(mode: String) {
        resizeMode = when (mode) {
            "contain", "cover", "stretch" -> mode
            else -> "contain"
        }
    }
}