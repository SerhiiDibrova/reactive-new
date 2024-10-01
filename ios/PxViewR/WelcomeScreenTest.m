#import <XCTest/XCTest.h>
#import <React/RCTLog.h>
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTBridge.h>

@interface WelcomeScreenTest : XCTestCase
@property (nonatomic, strong) XCUIApplication *app;
@end

@implementation WelcomeScreenTest

- (void)setUp {
    [super setUp];
    self.app = [[XCUIApplication alloc] init];
    [self.app launch];
}

- (void)testRendersWelcomeScreen {
    XCUIElement *welcomeScreen = [self.app.otherElements elementMatchingIdentifier:@"WelcomeScreen"];
    
    if (![welcomeScreen waitForExistenceWithTimeout:5]) {
        RCTLogError(@"Welcome screen did not render in time.");
        XCTFail(@"Welcome screen did not render.");
    }
    
    XCTAssertTrue(welcomeScreen.exists, @"Welcome screen should exist.");
    if (welcomeScreen.exists) {
        XCTAssertEqualObjects(welcomeScreen.accessibilityLabel, @"Welcome to the App", @"Accessibility label should match.");
    }
}

@end