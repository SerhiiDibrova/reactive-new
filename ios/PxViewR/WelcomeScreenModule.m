#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@interface WelcomeScreenModule : NSObject <RCTBridgeModule>
@end

@implementation WelcomeScreenModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(initializeWelcomeScreen:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    @try {
        UIViewController *welcomeScreen = [[UIViewController alloc] init];
        welcomeScreen.view.backgroundColor = [UIColor whiteColor];
        
        UILabel *welcomeLabel = [[UILabel alloc] initWithFrame:CGRectMake(50, 100, 300, 50)];
        welcomeLabel.text = @"Welcome to the App!";
        welcomeLabel.textAlignment = NSTextAlignmentCenter;
        welcomeLabel.accessibilityLabel = @"Welcome Label";
        [welcomeScreen.view addSubview:welcomeLabel];
        
        UIWindow *keyWindow = [UIApplication sharedApplication].keyWindow;
        keyWindow.rootViewController = welcomeScreen;
        [keyWindow makeKeyAndVisible];
        
        if (keyWindow.rootViewController == welcomeScreen) {
            resolve(@{@"status": @"Welcome screen initialized"});
        } else {
            NSError *error = [NSError errorWithDomain:@"WelcomeScreen" code:500 userInfo:@{NSLocalizedDescriptionKey: @"Failed to display welcome screen"}];
            RCTLogError(@"Error displaying welcome screen: %@", error);
            reject(@"display_error", @"Failed to display welcome screen", error);
        }
    } @catch (NSException *exception) {
        NSError *error = [NSError errorWithDomain:@"WelcomeScreen" code:500 userInfo:@{NSLocalizedDescriptionKey: exception.reason}];
        RCTLogError(@"Error initializing welcome screen: %@", error);
        reject(@"initialization_error", @"Failed to initialize welcome screen", error);
    }
}

RCT_EXPORT_METHOD(checkAccessibilityLabels:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    @try {
        UIViewController *rootViewController = [UIApplication sharedApplication].keyWindow.rootViewController;
        NSMutableArray *accessibilityLabels = [NSMutableArray array];
        
        for (UIView *subview in rootViewController.view.subviews) {
            if ([subview isKindOfClass:[UILabel class]]) {
                UILabel *label = (UILabel *)subview;
                if (label.accessibilityLabel) {
                    [accessibilityLabels addObject:label.accessibilityLabel];
                }
            }
        }
        
        resolve(@{@"accessibilityLabels": accessibilityLabels});
    } @catch (NSException *exception) {
        NSError *error = [NSError errorWithDomain:@"AccessibilityLabels" code:500 userInfo:@{NSLocalizedDescriptionKey: exception.reason}];
        RCTLogError(@"Error checking accessibility labels: %@", error);
        reject(@"accessibility_error", @"Failed to check accessibility labels", error);
    }
}

@end