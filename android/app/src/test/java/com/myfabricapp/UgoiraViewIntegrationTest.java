package com.myfabricapp;

import android.view.View;
import android.widget.FrameLayout;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.rule.ActivityTestRule;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactContext;
import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;
import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.resize;
import static androidx.test.espresso.matcher.ViewMatchers.withId;
import static org.junit.Assert.assertTrue;

@RunWith(AndroidJUnit4.class)
public class UgoiraViewIntegrationTest {

    @Rule
    public ActivityTestRule<ReactActivity> activityRule = new ActivityTestRule<>(ReactActivity.class);

    @Test
    public void testUgoiraViewResizing() {
        ReactInstanceManager instanceManager = ReactNativeHost.getInstance().getReactInstanceManager();
        ReactContext reactContext = instanceManager.getCurrentReactContext();
        FrameLayout ugoiraView = reactContext.findViewById(R.id.ugoiraView);

        onView(withId(R.id.ugoiraView)).perform(resize(300, 300));
        assertTrue(ugoiraView.getWidth() == 300 && ugoiraView.getHeight() == 300);
    }

    @Test
    public void testPerformanceDuringResizing() {
        long startTime = System.currentTimeMillis();
        onView(withId(R.id.ugoiraView)).perform(resize(300, 300));
        long endTime = System.currentTimeMillis();
        long duration = endTime - startTime;
        assertTrue(duration < 1000);
    }

    @Test
    public void testMemoryUsageDuringResizing() {
        Runtime runtime = Runtime.getRuntime();
        long beforeMemory = runtime.totalMemory() - runtime.freeMemory();
        onView(withId(R.id.ugoiraView)).perform(resize(300, 300));
        long afterMemory = runtime.totalMemory() - runtime.freeMemory();
        long memoryUsed = afterMemory - beforeMemory;
        assertTrue(memoryUsed < 1024 * 1024);
    }
}