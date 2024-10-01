package ReactNativeBridge

import Foundation
import React

@objc(PxViewR)
class ReactNativeBridge: NSObject {
    
    @objc
    func sourceURL(for buildConfiguration: String) -> URL? {
        let bundleURL: String
        
        #if DEBUG
        bundleURL = "http://localhost:8081/index.bundle?platform=ios&dev=true"
        #else
        bundleURL = "https://your-production-url.com/index.bundle?platform=ios&dev=false"
        #endif
        
        return URL(string: bundleURL)
    }
}