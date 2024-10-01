package ios.PxViewR

import UIKit

class WelcomeScreenAccessibilityManager {
    struct AccessibilityLabels {
        static let welcomeTitle = "Welcome Title"
        static let welcomeMessage = "Welcome Message"
        static let continueButton = "Continue Button"
    }
    
    static func isAccessibilityLabelPresent(on view: UIView, label: String) -> Bool {
        return view.accessibilityLabel == label
    }
    
    static func checkAccessibilityLabels(on view: UIView) -> [String: Bool] {
        return [
            AccessibilityLabels.welcomeTitle: isAccessibilityLabelPresent(on: view, label: AccessibilityLabels.welcomeTitle),
            AccessibilityLabels.welcomeMessage: isAccessibilityLabelPresent(on: view, label: AccessibilityLabels.welcomeMessage),
            AccessibilityLabels.continueButton: isAccessibilityLabelPresent(on: view, label: AccessibilityLabels.continueButton)
        ]
    }
    
    static func testRendersWelcomeScreen(on view: UIView) -> Bool {
        let accessibilityChecks = checkAccessibilityLabels(on: view)
        return accessibilityChecks.values.allSatisfy { $0 }
    }
}