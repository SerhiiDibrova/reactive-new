#import <React/RCTViewManager.h>
#import <React/RCTBridge.h>
#import <React/RCTLog.h>
#import "UgoiraView.h"

@interface UgoiraViewManager : RCTViewManager
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE()

- (UIView *)createViewWithBridge:(RCTBridge *)bridge
{
    return [[UgoiraView alloc] init];
}

RCT_EXPORT_METHOD(setPaused:(nonnull NSNumber *)reactTag paused:(BOOL)paused)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UIView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]]) {
            UgoiraView *ugoiraView = (UgoiraView *)view;
            @try {
                [ugoiraView setPaused:paused];
            } @catch (NSException *exception) {
                RCTLogError(@"Error while setting paused state: %@", exception.reason);
            }
        } else {
            RCTLogError(@"Invalid view type for reactTag: %@", reactTag);
        }
    });
}

@end