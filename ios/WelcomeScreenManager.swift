package WelcomeScreenManager

import React.RCTBridgeModule
import UIKit
import React.RCTLog

class WelcomeScreenManager: NSObject, RCTBridgeModule {
    static func moduleName() -> String {
        return "WelcomeScreenManager"
    }

    @objc func renderWelcomeScreen() {
        let welcomeView = UIView(frame: UIScreen.main.bounds)
        welcomeView.backgroundColor = UIColor.white
        
        let welcomeLabel = UILabel()
        welcomeLabel.text = "Welcome to the App"
        welcomeLabel.textAlignment = .center
        welcomeLabel.translatesAutoresizingMaskIntoConstraints = false
        
        welcomeView.addSubview(welcomeLabel)
        
        NSLayoutConstraint.activate([
            welcomeLabel.centerXAnchor.constraint(equalTo: welcomeView.centerXAnchor),
            welcomeLabel.centerYAnchor.constraint(equalTo: welcomeView.centerYAnchor)
        ])
        
        welcomeView.accessibilityLabel = "Welcome screen"
        welcomeView.accessibilityTraits = .header
        
        UIAccessibility.post(notification: .layoutChanged, argument: welcomeView)
        
        if let rootViewController = UIApplication.shared.windows.first(where: { $0.isKeyWindow })?.rootViewController {
            rootViewController.view.addSubview(welcomeView)
        } else {
            RCTLog.error("Failed to get root view controller")
        }
    }

    @objc func showWelcomeScreen() {
        renderWelcomeScreen()
    }
}