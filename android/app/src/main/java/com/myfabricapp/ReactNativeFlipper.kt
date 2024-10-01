package com.myfabricapp

import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactContext
import com.facebook.react.modules.network.FlipperOkhttpInterceptor
import okhttp3.OkHttpClient

class FrescoFlipperPlugin {
    companion object {
        fun addToNativeModulesQueueThread(reactContext: ReactContext) {
            // Implementation for adding FrescoFlipperPlugin to native modules queue
        }
    }
}

class ReactNativeFlipper {

    fun apply(builder: OkHttpClient.Builder) {
        val reactInstanceManager = ReactInstanceManager.getInstance()
        var reactContext: ReactContext? = reactInstanceManager.currentReactContext

        if (reactContext == null) {
            reactInstanceManager.addReactInstanceEventListener(object : ReactInstanceManager.ReactInstanceEventListener {
                override fun onReactContextInitialized(reactContext: ReactContext) {
                    reactInstanceManager.removeReactInstanceEventListener(this)
                    reactContext.runOnNativeModulesQueueThread {
                        try {
                            builder.addInterceptor(FlipperOkhttpInterceptor(reactContext))
                            FrescoFlipperPlugin.addToNativeModulesQueueThread(reactContext)
                        } catch (e: Exception) {
                            // Handle exception
                        }
                    }
                }
            })
        } else {
            builder.addInterceptor(FlipperOkhttpInterceptor(reactContext))
            reactContext.runOnNativeModulesQueueThread {
                try {
                    FrescoFlipperPlugin.addToNativeModulesQueueThread(reactContext)
                } catch (e: Exception) {
                    // Handle exception
                }
            }
        }
    }
}