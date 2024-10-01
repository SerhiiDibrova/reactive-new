package com.yourapp

import Foundation
import React

@objc(ReactNativeBridge)
class ReactNativeBridge: NSObject, RCTBridgeModule {
    static func moduleName() -> String {
        return "ReactNativeBridge"
    }

    static func requiresMainQueueSetup() -> Bool {
        return true
    }

    func initializeBridge() {
        let bridge = RCTBridge(delegate: self, launchOptions: nil, fabric: true)
    }

    static func moduleConfig() -> [String: Any] {
        return ["fabric": true]
    }
}