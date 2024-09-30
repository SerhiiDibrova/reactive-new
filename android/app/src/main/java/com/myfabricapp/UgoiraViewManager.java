package com.myfabricapp;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class UgoiraViewManager extends SimpleViewManager<UgoiraView> {
    private final Lock lock = new ReentrantLock();

    @Override
    public String getName() {
        return "UgoiraView";
    }

    @Override
    protected UgoiraView createViewInstance(ThemedReactContext context) {
        return new UgoiraView(context);
    }

    public void setPaused(UgoiraView view, boolean paused) {
        lock.lock();
        try {
            if (paused) {
                view.pauseAnimation();
            } else {
                view.resumeAnimation();
            }
        } finally {
            lock.unlock();
        }
    }
}