package MyNativeModule

import Foundation
import React
import Android

@objc(MyNativeModule)
class MyNativeModule: NSObject {

    @objc
    func showToast(_ message: String) {
        let toast = Toast.makeText(ReactApplicationContext.currentActivity, message, Toast.LENGTH_SHORT)
        toast.show()
    }

    @objc
    func getDeviceInfo(_ callback: @escaping RCTResponseSenderBlock) {
        let deviceInfo = [
            "model": Build.MODEL,
            "manufacturer": Build.MANUFACTURER,
            "version": Build.VERSION.RELEASE
        ]
        callback([NSNull(), deviceInfo])
    }

    @objc
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}