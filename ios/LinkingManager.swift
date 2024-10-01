package ios

import Foundation
import React
import UIKit

class LinkingManager: NSObject {
    static let shared = LinkingManager()

    func handleOpenURL(_ url: URL) {
        RCTLinkingManager.application(UIApplication.shared, open: url, options: [:])
    }
    
    func handleIncomingURL(_ url: URL) {
        RCTLinkingManager.application(UIApplication.shared, open: url, options: [:])
    }
}