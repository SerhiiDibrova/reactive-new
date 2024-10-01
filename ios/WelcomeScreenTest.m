#import <XCTest/XCTest.h>
#import <React/RCTLog.h>
#import <React/RCTTestRunner.h>
#import <React/RCTRootView.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>

@interface WelcomeScreenTest : XCTestCase
@property (nonatomic, strong) RCTTestRunner *runner;
@end

@implementation WelcomeScreenTest

- (void)setUp {
    [super setUp];
    self.runner = [[RCTTestRunner alloc] init];
}

- (void)testRendersWelcomeScreen {
    [self.runner runTest:@"WelcomeScreen" withCompletion:^(NSError *error) {
        if (error) {
            RCTLogError(@"Redbox error: %@", error);
        } else {
            RCTRootView *rootView = (RCTRootView *)self.runner.rootView;
            [self checkForRedboxErrors];
            BOOL isAccessibilityLabelPresent = [self isAccessibilityLabelPresent:@"welcomeScreenLabel" inView:rootView];
            XCTAssertTrue(isAccessibilityLabelPresent, @"Accessibility label is not present");
        }
    }];
}

- (void)checkForRedboxErrors {
    // Implement error monitoring logic here
    NSArray *redboxErrors = [RCTLog getRedboxErrors];
    for (NSString *error in redboxErrors) {
        RCTLogError(@"Redbox error: %@", error);
    }
}

- (BOOL)isAccessibilityLabelPresent:(NSString *)label inView:(UIView *)view {
    if ([view.accessibilityLabel isEqualToString:label]) {
        return YES;
    }
    for (UIView *subview in view.subviews) {
        if ([self isAccessibilityLabelPresent:label inView:subview]) {
            return YES;
        }
    }
    return NO;
}

@end