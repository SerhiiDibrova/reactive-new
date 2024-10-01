package com.myfabricapp

import android.app.Application
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactNativeConfig
import com.facebook.react.fabric.Fabric
import com.facebook.react.turbomodule.core.TurboModuleManager
import com.facebook.react.modules.network.NetworkingModule
import com.facebook.react.modules.storage.AsyncStorageModule
import com.facebook.react.modules.viewmanager.ViewManager
import com.facebook.react.modules.camera.CameraModule
import com.facebook.react.modules.image.ImageModule
import com.facebook.react.modules.location.LocationModule

class MainApplication : Application(), ReactApplication {
    private val reactNativeHost = object : ReactNativeHost(this) {
        override fun getUseDeveloperSupport(): Boolean {
            return BuildConfig.DEBUG
        }

        override fun getPackages(): List<ReactPackage> {
            return listOf(
                NetworkingModule(),
                AsyncStorageModule(),
                CameraModule(),
                ImageModule(),
                LocationModule()
            )
        }

        override fun getJSMainModuleName(): String {
            return "index"
        }

        override fun getReactNativeConfig(): ReactNativeConfig? {
            return ReactNativeConfig.Builder()
                .setFabric(true)
                .setTurboModules(true)
                .build()
        }
    }

    override fun onCreate() {
        super.onCreate()
        Fabric.initialize(this)
        TurboModuleManager.initialize(this)
    }

    override fun getReactNativeHost(): ReactNativeHost {
        return reactNativeHost
    }
}