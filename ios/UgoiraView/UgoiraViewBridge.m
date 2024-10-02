#import <React/RCTBridgeModule.h>
#import <React/RCTViewManager.h>
#import "UgoiraView.h"

@interface RCT_EXTERN_MODULE(UgoiraViewManager, RCTViewManager)

RCT_EXTERN_METHOD(setWidth:(nonnull NSNumber *)reactTag width:(nonnull NSNumber *)width)

@end

@implementation UgoiraViewManager

RCT_EXPORT_VIEW_PROPERTY(width, NSNumber)

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}

- (UIView *)view
{
    return [[UgoiraView alloc] init];
}

@end

@implementation UgoiraViewManager (RCT_EXTERN)

RCT_EXTERN_METHOD(setWidth:(nonnull NSNumber *)reactTag width:(nonnull NSNumber *)width)
{
    if ([width isKindOfClass:[NSNumber class]] && [width integerValue] > 0) {
        UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
        view.width = [width floatValue];
        [view setNeedsLayout];
        [view setNeedsDisplay];
    } else {
        NSLog(@"Invalid width value: %@", width);
    }
}

@end