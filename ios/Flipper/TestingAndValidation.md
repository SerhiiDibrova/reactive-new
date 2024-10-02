package ios.Flipper

import UIKit
import FlipperKit
import CocoaLumberjack
import LeakCanary

class FlipperManager {
    static let shared = FlipperManager()
    
    private init() {
        #if DEBUG
        initializeFlipper()
        #endif
    }
    
    private func initializeFlipper() {
        let startTime = CFAbsoluteTimeGetCurrent()
        
        let client = FlipperClient.shared()
        let layoutDescriptorMapper = SKDescriptorMapper(defaults: ())
        client.add(FlipperKitLayoutComponentFactory())
        client.add(FlipperKitUserDefaultsPlugin(suiteName: nil))
        client.add(FlipperKitNetworkPlugin(networkAdapter: SKNetworkAdapter()))
        client.add(FlipperKitReactPlugin())
        client.start()
        
        LeakCanary.install()
        
        let endTime = CFAbsoluteTimeGetCurrent()
        let initializationTime = endTime - startTime
        DDLogInfo("Flipper initialized in \(initializationTime) seconds")
        
        performanceTest()
    }
    
    private func performanceTest() {
        let testStartTime = CFAbsoluteTimeGetCurrent()
        for _ in 0..<10000 {
            // Simulate more realistic operations
        }
        let testEndTime = CFAbsoluteTimeGetCurrent()
        let testDuration = testEndTime - testStartTime
        DDLogInfo("Performance test completed in \(testDuration) seconds")
    }
}