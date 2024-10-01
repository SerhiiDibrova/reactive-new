#import <React/RCTBridgeModule.h>
#import <React/RCTLog.h>
#import <UIKit/UIKit.h>

@interface WelcomeScreenModule : NSObject <RCTBridgeModule>
@end

@implementation WelcomeScreenModule

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(testRendersWelcomeScreen:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
    @try {
        UIView *welcomeScreen = [[UIView alloc] initWithFrame:[UIScreen mainScreen].bounds];
        welcomeScreen.backgroundColor = [UIColor whiteColor];
        
        UILabel *welcomeLabel = [[UILabel alloc] initWithFrame:CGRectMake(0, 0, welcomeScreen.frame.size.width, 100)];
        welcomeLabel.text = @"Welcome to the App!";
        welcomeLabel.textAlignment = NSTextAlignmentCenter;
        welcomeLabel.center = welcomeScreen.center;
        
        [welcomeScreen addSubview:welcomeLabel];
        
        BOOL success = (welcomeScreen != nil);
        if (success) {
            resolve(@{@"status": @"Welcome screen rendered successfully"});
        } else {
            reject(@"render_error", @"Failed to render welcome screen", nil);
        }
    } @catch (NSError *error) {
        reject(@"render_exception", @"An exception occurred", error);
    }
}

@end