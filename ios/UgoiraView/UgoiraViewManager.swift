package UgoiraView

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.uimanager.RCTViewManager
import java.util.concurrent.locks.ReentrantLock

class UgoiraViewManager: RCTViewManager() {
    private val lock = ReentrantLock()

    override fun getName(): String {
        return "UgoiraView"
    }

    override fun createViewInstance(reactContext: ThemedReactContext): UgoiraView {
        return UgoiraView(reactContext)
    }

    @ReactProp(name = "width")
    fun setWidth(view: UgoiraView, width: Int) {
        lock.lock()
        try {
            if (width <= 0) {
                throw IllegalArgumentException("Width must be a positive integer.")
            }
            view.setWidth(width)
            view.requestLayout()
        } finally {
            lock.unlock()
        }
    }
}