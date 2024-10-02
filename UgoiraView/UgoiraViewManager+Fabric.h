package UgoiraView;

#import <React/RCTViewManager.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTFabricComponents.h>
#import <UIKit/UIKit.h>

@interface UgoiraViewManager : RCTViewManager <RCTBridgeModule>
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE(UgoiraViewManager)

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

- (UIView *)view {
    return [[UIView alloc] init]; // Replace with specific view type if needed
}

RCT_EXPORT_VIEW_PROPERTY(someProperty, NSString)

@end