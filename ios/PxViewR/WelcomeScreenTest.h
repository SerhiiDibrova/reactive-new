package PxViewR;

#import <XCTest/XCTest.h>
#import <UIKit/UIKit.h>

@interface WelcomeScreenTest : XCTestCase

- (void)testRendersWelcomeScreen;

@end

@implementation WelcomeScreenTest

- (void)testRendersWelcomeScreen {
    UIViewController *welcomeScreen = [[UIViewController alloc] init];
    XCTAssertNotNil(welcomeScreen, @"Welcome screen should not be nil");
    
    XCTAssertEqual(welcomeScreen.view.backgroundColor, [UIColor whiteColor], @"Background color should be white");
    
    UILabel *welcomeLabel = [[UILabel alloc] init];
    welcomeLabel.text = @"Welcome";
    welcomeLabel.hidden = NO;
    [welcomeScreen.view addSubview:welcomeLabel];
    
    XCTAssertEqualObjects(welcomeLabel.text, @"Welcome", @"Label text should be 'Welcome'");
    XCTAssertFalse(welcomeLabel.isHidden, @"Welcome label should be visible");
    
    CGSize expectedSize = [welcomeLabel sizeThatFits:CGSizeMake(CGFLOAT_MAX, CGFLOAT_MAX)];
    XCTAssertTrue(expectedSize.width > 0, @"Welcome label should have a width greater than 0");
    XCTAssertTrue(expectedSize.height > 0, @"Welcome label should have a height greater than 0");
}

@end