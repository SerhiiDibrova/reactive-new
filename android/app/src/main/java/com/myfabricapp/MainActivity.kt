package com.myfabricapp

import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeConfig
import com.myfabricapp.BuildConfig

class MainActivity : ReactActivity() {
    override fun getMainComponentName(): String {
        return "MyFabricApp"
    }

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableNewArchitecture()
    }

    private fun enableNewArchitecture() {
        if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
            (application as ReactApplication).reactNativeHost.apply {
                ReactNativeConfig.setNewArchitectureEnabled(true)
            }
        }
    }
}