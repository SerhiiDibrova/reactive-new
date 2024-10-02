package com.yourapp

import Foundation
import React

@objc(ReactNativeModule)
class ReactNativeModule: NSObject, RCTBridgeModule {
    static func moduleName() -> String {
        return "ReactNativeModule"
    }

    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    @objc
    static func getMainComponentName() -> String {
        return "ReactNativeModule"
    }

    @objc
    func exampleMethod(_ callback: @escaping RCTResponseSenderBlock) {
        callback([NSNull(), "Result from exampleMethod"])
    }
}