package WelcomeScreenModule

import Foundation
import React
import RCTLog

@objc(WelcomeScreenModule)
class WelcomeScreenModule: NSObject, RCTBridgeModule {
    static func moduleName() -> String {
        return "WelcomeScreenModule"
    }

    @objc
    func presentWelcomeScreen() {
        DispatchQueue.main.async {
            guard let rootViewController = UIApplication.shared.keyWindow?.rootViewController else {
                RCTLogError("Root view controller is not available.")
                return
            }
            let welcomeScreenVC = WelcomeScreenViewController()
            do {
                try rootViewController.present(welcomeScreenVC, animated: true)
            } catch {
                RCTLogError("Failed to present WelcomeScreenViewController: \(error.localizedDescription)")
            }
        }
    }
}