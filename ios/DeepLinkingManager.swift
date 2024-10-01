package ios

import Foundation
import React
import UIKit

class DeepLinkingManager {
    static func handleDeepLink(url: URL?, sourceApplication: String?, annotation: Any?) {
        guard let validURL = url else {
            print("Invalid URL")
            return
        }
        
        let validSourceApplication = sourceApplication ?? ""
        
        let success = RCTLinkingManager.application(UIApplication.shared, open: validURL, sourceApplication: validSourceApplication, annotation: annotation)
        
        if !success {
            print("Failed to handle deep link")
        }
    }
}