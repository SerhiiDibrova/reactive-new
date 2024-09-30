package com.yourapp;

import java.util.Arrays;
import java.util.List;

public class UgoiraViewProps {
    private List<String> images;
    private int width;
    private int height;
    private String resizeMode;
    private boolean paused;

    private static final List<String> VALID_RESIZE_MODES = Arrays.asList("cover", "contain", "stretch", "center");
    private static final String DEFAULT_RESIZE_MODE = "contain";

    public UgoiraViewProps(List<String> images, int width, int height, String resizeMode, boolean paused) {
        this.images = images;
        this.width = width;
        this.height = height;
        setResizeMode(resizeMode);
        this.paused = paused;
    }

    public void setResizeMode(String resizeMode) {
        if (VALID_RESIZE_MODES.contains(resizeMode)) {
            this.resizeMode = resizeMode;
        } else {
            this.resizeMode = DEFAULT_RESIZE_MODE;
        }
    }

    public List<String> getImages() {
        return images;
    }

    public int getWidth() {
        return width;
    }

    public int getHeight() {
        return height;
    }

    public String getResizeMode() {
        return resizeMode;
    }

    public boolean isPaused() {
        return paused;
    }
}