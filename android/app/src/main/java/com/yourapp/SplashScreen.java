package com.yourapp;

import android.app.Activity;
import android.view.View;
import android.view.Window;

public class SplashScreen {
    public static void show(Activity activity) {
        Window window = activity.getWindow();
        window.setFlags(Window.FEATURE_NO_TITLE, Window.FEATURE_NO_TITLE);
        activity.setContentView(R.layout.splash_screen);
        window.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_FULLSCREEN);
    }
}