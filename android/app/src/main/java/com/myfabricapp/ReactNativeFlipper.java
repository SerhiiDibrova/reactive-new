package com.myfabricapp;

import android.content.Context;
import com.facebook.flipper.android.AndroidFlipperClient;
import com.facebook.flipper.core.FlipperClient;
import com.facebook.flipper.plugins.leakcanary.LeakCanaryFlipperPlugin;
import com.facebook.flipper.plugins.network.NetworkFlipperPlugin;
import com.facebook.flipper.plugins.sharedpreferences.SharedPreferencesFlipperPlugin;
import com.facebook.flipper.plugins.inspector.InspectorFlipperPlugin;
import com.facebook.flipper.plugins.databases.DatabasesFlipperPlugin;

public class ReactNativeFlipper {
    public static void initializeFlipper(Context context) {
        FlipperClient client = AndroidFlipperClient.getInstance(context);
        client.addPlugin(new InspectorFlipperPlugin(context));
        client.addPlugin(new NetworkFlipperPlugin());
        client.addPlugin(new SharedPreferencesFlipperPlugin(context));
        client.addPlugin(new DatabasesFlipperPlugin(context));
        client.addPlugin(new LeakCanaryFlipperPlugin());
        client.start();
    }
}