package com.myfabricapp

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.ReactInstanceManager
import com.facebook.react.ReactInstanceEventListener
import com.facebook.react.bridge.ReactContext
import okhttp3.OkHttpClient
import com.facebook.flipper.okhttp.FlipperOkhttpInterceptor
import com.facebook.flipper.plugins.fresco.FrescoFlipperPlugin
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class MyNativeModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val reactInstanceManager: ReactInstanceManager = ReactInstanceManager.builder().setApplication(reactContext.applicationContext).build()
    private val frescoFlipperPlugin = FrescoFlipperPlugin()
    private val networkFlipperPlugin = NetworkFlipperPlugin()

    @ReactMethod
    fun apply(builder: OkHttpClient.Builder) {
        CoroutineScope(Dispatchers.Main).launch {
            val currentContext = reactInstanceManager.currentReactContext
            if (currentContext == null) {
                reactInstanceManager.addReactInstanceEventListener(object : ReactInstanceEventListener {
                    override fun onReactContextInitialized(context: ReactContext) {
                        addFlipperPlugins(context, builder)
                        reactInstanceManager.removeReactInstanceEventListener(this)
                    }
                })
            } else {
                addFlipperPlugins(currentContext, builder)
            }
        }
    }

    private fun addFlipperPlugins(context: ReactContext, builder: OkHttpClient.Builder) {
        val interceptor = FlipperOkhttpInterceptor(networkFlipperPlugin)
        builder.addInterceptor(interceptor)
        frescoFlipperPlugin.addToOkHttpClient(builder)
    }

    override fun getName(): String {
        return "MyNativeModule"
    }
}