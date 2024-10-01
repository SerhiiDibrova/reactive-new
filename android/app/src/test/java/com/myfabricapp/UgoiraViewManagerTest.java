package com.myfabricapp;

import static org.junit.Assert.assertEquals;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.mock;

import org.junit.Before;
import org.junit.Test;
import org.mockito.ArgumentCaptor;

public class UgoiraViewManagerTest {
    private UgoiraViewManager ugoiraViewManager;
    private View mockView;

    @Before
    public void setUp() {
        ugoiraViewManager = new UgoiraViewManager();
        mockView = mock(View.class);
    }

    @Test
    public void testSetWidth_ValidWidth() {
        ugoiraViewManager.setWidth(mockView, 100);
        ArgumentCaptor<LayoutParams> captor = ArgumentCaptor.forClass(LayoutParams.class);
        verify(mockView).setLayoutParams(captor.capture());
        assertEquals(100, captor.getValue().width);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testSetWidth_NegativeWidth() {
        ugoiraViewManager.setWidth(mockView, -50);
    }

    @Test
    public void testSetWidth_ZeroWidth() {
        ugoiraViewManager.setWidth(mockView, 0);
        ArgumentCaptor<LayoutParams> captor = ArgumentCaptor.forClass(LayoutParams.class);
        verify(mockView).setLayoutParams(captor.capture());
        assertEquals(0, captor.getValue().width);
    }

    @Test
    public void testSetWidth_LargeWidth() {
        ugoiraViewManager.setWidth(mockView, Integer.MAX_VALUE);
        ArgumentCaptor<LayoutParams> captor = ArgumentCaptor.forClass(LayoutParams.class);
        verify(mockView).setLayoutParams(captor.capture());
        assertEquals(Integer.MAX_VALUE, captor.getValue().width);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testSetWidth_ExceedingWidth() {
        ugoiraViewManager.setWidth(mockView, Integer.MAX_VALUE + 1);
    }

    @Test
    public void testSetWidth_ValidLargeWidth() {
        ugoiraViewManager.setWidth(mockView, Integer.MAX_VALUE - 1);
        ArgumentCaptor<LayoutParams> captor = ArgumentCaptor.forClass(LayoutParams.class);
        verify(mockView).setLayoutParams(captor.capture());
        assertEquals(Integer.MAX_VALUE - 1, captor.getValue().width);
    }
}