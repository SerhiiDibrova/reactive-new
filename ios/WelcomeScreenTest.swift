package WelcomeScreenTest

import XCTest
import React

class WelcomeScreenTest: XCTestCase {
    
    var app: XCUIApplication!
    
    override func setUp() {
        super.setUp()
        app = XCUIApplication()
        app.launch()
        navigateToWelcomeScreen()
    }
    
    func navigateToWelcomeScreen() {
        app.buttons["GoToWelcomeScreen"].tap()
    }
    
    func testRendersWelcomeScreen() {
        let welcomeScreen = app.otherElements["WelcomeScreen"]
        XCTAssertTrue(welcomeScreen.exists)
        
        let accessibilityLabel = welcomeScreen.accessibilityLabel
        XCTAssertTrue(accessibilityLabel != nil && !accessibilityLabel!.isEmpty)
        
        XCTAssertFalse(RCTLog.hasRedboxErrors())
        XCTAssertTrue(welcomeScreen.isHittable)
    }
}