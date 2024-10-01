#import <Foundation/Foundation.h>
#import <RNSplashScreen.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTView.h>

@interface SplashScreenManager : NSObject <RCTBridgeModule>
@end

@implementation SplashScreenManager

RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

RCT_EXPORT_METHOD(showSplashScreen:(NSInteger)duration)
{
    [RNSplashScreen show];
    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(duration * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{
        [self dismissSplashScreen];
    });
}

- (void)dismissSplashScreen
{
    [RNSplashScreen dismiss];
}

@end