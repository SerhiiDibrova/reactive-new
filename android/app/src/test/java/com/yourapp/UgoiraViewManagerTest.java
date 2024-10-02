package com.yourapp;

import org.junit.Before;
import org.junit.Test;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;
import static org.mockito.Mockito.when;

public class UgoiraViewManagerTest {

    @Mock
    private SomeDependency someDependency;

    private UgoiraViewManager ugoiraViewManager;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
        ugoiraViewManager = new UgoiraViewManager(someDependency);
    }

    @Test
    public void testGetName() {
        String expectedName = "UgoiraView";
        when(someDependency.getName()).thenReturn(expectedName);
        String actualName = ugoiraViewManager.getName();
        assertEquals(expectedName, actualName);
    }

    @Test
    public void testGetNameWithNull() {
        when(someDependency.getName()).thenReturn(null);
        String actualName = ugoiraViewManager.getName();
        assertEquals(null, actualName);
    }

    @Test
    public void testGetNameWithEmpty() {
        when(someDependency.getName()).thenReturn("");
        String actualName = ugoiraViewManager.getName();
        assertEquals("", actualName);
    }

    @Test
    public void testOtherMethod1() {
        String expectedValue = "ExpectedValue1";
        when(someDependency.otherMethod1()).thenReturn(expectedValue);
        assertEquals(expectedValue, ugoiraViewManager.otherMethod1());
    }

    @Test
    public void testOtherMethod2() {
        String expectedValue = "ExpectedValue2";
        when(someDependency.otherMethod2()).thenReturn(expectedValue);
        assertEquals(expectedValue, ugoiraViewManager.otherMethod2());
    }

    @Test
    public void testPerformanceOfGetName() {
        long startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            ugoiraViewManager.getName();
        }
        long endTime = System.nanoTime();
        long duration = endTime - startTime;
        assertTrue("Performance test failed", duration < 1000000); // 1 millisecond
    }

    @Test
    public void testPerformanceOfOtherMethod1() {
        long startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            ugoiraViewManager.otherMethod1();
        }
        long endTime = System.nanoTime();
        long duration = endTime - startTime;
        assertTrue("Performance test failed", duration < 1000000); // 1 millisecond
    }

    @Test
    public void testPerformanceOfOtherMethod2() {
        long startTime = System.nanoTime();
        for (int i = 0; i < 1000; i++) {
            ugoiraViewManager.otherMethod2();
        }
        long endTime = System.nanoTime();
        long duration = endTime - startTime;
        assertTrue("Performance test failed", duration < 1000000); // 1 millisecond
    }
}