package com.myfabricapp;

import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class UgoiraViewTest {
    private UgoiraView ugoiraView;

    @Before
    public void setUp() {
        ugoiraView = new UgoiraView();
    }

    @Test
    public void testSetWidth_ValidWidth() {
        ugoiraView.setWidth(100);
        assertEquals(100, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_ZeroWidth() {
        ugoiraView.setWidth(0);
        assertEquals(0, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_NegativeWidth() {
        ugoiraView.setWidth(-50);
        assertEquals(0, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_ConsecutiveUpdates() {
        ugoiraView.setWidth(150);
        assertEquals(150, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());

        ugoiraView.setWidth(200);
        assertEquals(200, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_InvalidWidthState() {
        ugoiraView.setWidth(-10);
        assertEquals(0, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_ExtremelyLargeWidth() {
        ugoiraView.setWidth(Integer.MAX_VALUE);
        assertEquals(Integer.MAX_VALUE, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }

    @Test
    public void testSetWidth_ConsistentStateAfterInvalid() {
        ugoiraView.setWidth(100);
        assertEquals(100, ugoiraView.getWidth());
        ugoiraView.setWidth(-100);
        assertEquals(0, ugoiraView.getWidth());
        assertTrue(ugoiraView.isLayoutUpdated());
    }
}