package com.myfabricapp;

import android.content.Context;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.BuildConfig;
import java.lang.reflect.InvocationTargetException;
import java.lang.ClassNotFoundException;
import java.lang.NoSuchMethodException;
import java.lang.IllegalAccessException;
import android.util.Log;

public class FlipperInitializer {
    public static void initializeFlipper(Context context, ReactInstanceManager reactInstanceManager) {
        if (BuildConfig.DEBUG) {
            if (reactInstanceManager != null) {
                try {
                    Class<?> aClass = Class.forName("com.myfabricapp.ReactNativeFlipper");
                    aClass.getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
                            .invoke(null, context, reactInstanceManager);
                } catch (ClassNotFoundException e) {
                    Log.e("FlipperInitializer", "ReactNativeFlipper class not found", e);
                } catch (NoSuchMethodException e) {
                    Log.e("FlipperInitializer", "initializeFlipper method not found", e);
                } catch (IllegalAccessException e) {
                    Log.e("FlipperInitializer", "Illegal access to initializeFlipper method", e);
                } catch (InvocationTargetException e) {
                    Log.e("FlipperInitializer", "Error invoking initializeFlipper method", e);
                }
            } else {
                Log.e("FlipperInitializer", "ReactInstanceManager is null");
            }
        } else {
            Log.d("FlipperInitializer", "Flipper is not initialized because the app is not in debug mode");
        }
    }
}