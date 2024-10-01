package com.myfabricapp

import android.app.Application
import android.os.Bundle
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactRootView
import com.facebook.react.fabric.Fabric
import com.facebook.soloader.SoLoader
import com.myfabricapp.packages.MyCustomPackage

class MainApplication : Application(), ReactApplication {
    private val reactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return listOf(MyCustomPackage())
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate()
        SoLoader.init(this, false)
        Fabric.with(this, reactNativeHost)
        ReactInstanceManager.builder()
            .setApplication(this)
            .setReactNativeHost(reactNativeHost)
            .setUseDeveloperSupport(BuildConfig.DEBUG)
            .setInitialLifecycleState(LifecycleState.RESUMED)
            .build()
    }

    fun createRootView(): ReactRootView {
        return ReactRootView(this)
    }
}