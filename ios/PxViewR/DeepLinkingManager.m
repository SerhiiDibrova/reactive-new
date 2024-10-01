#import <Foundation/Foundation.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTView.h>
#import <UIKit/UIKit.h>

@interface DeepLinkingManager : NSObject <RCTBridgeModule>
@end

@implementation DeepLinkingManager

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(handleDeepLink:(NSString *)url) {
    NSURL *nsUrl = [NSURL URLWithString:url];
    if (nsUrl) {
        NSString *scheme = nsUrl.scheme;
        NSString *host = nsUrl.host;
        NSString *path = nsUrl.path;

        if ([scheme isEqualToString:@"myapp"]) {
            if ([host isEqualToString:@"screen1"]) {
                [self navigateToScreen:@"Screen1"];
            } else if ([host isEqualToString:@"screen2"]) {
                [self navigateToScreen:@"Screen2"];
            }
        }
    }
}

- (void)navigateToScreen:(NSString *)screenName {
    NSDictionary *userInfo = @{@"screen": screenName};
    [[NSNotificationCenter defaultCenter] postNotificationName:@"NavigateToScreen" object:nil userInfo:userInfo];
}

+ (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
    if ([url.scheme isEqualToString:@"myapp"]) {
        [self handleDeepLink:[url absoluteString]];
        return YES;
    }
    return NO;
}

@end