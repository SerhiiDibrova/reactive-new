package PxViewR

import Foundation
import React

class DeepLinkingManager: NSObject {
    @objc static func handleOpenURL(_ url: URL) {
        RCTLinkingManager.application(UIApplication.shared, open: url, options: [:])
    }
}