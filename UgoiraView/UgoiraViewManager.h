package UgoiraView;

#import <React/RCTViewManager.h>
#import <React/RCTBridge.h>
#import <React/RCTLog.h>
#import "UgoiraView.h"

@interface UgoiraViewManager : RCTViewManager
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE(UgoiraView)

- (UIView *)view
{
    return [[UgoiraView alloc] init];
}

RCT_EXPORT_METHOD(setImages:(nonnull NSNumber *)reactTag images:(NSArray *)images)
{
    if (![images isKindOfClass:[NSArray class]] || images.count == 0) {
        RCTLogError(@"Invalid or empty images parameter");
        return;
    }
    UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
    if (view) {
        [view setImages:images];
    } else {
        RCTLogError(@"View not found for reactTag: %@", reactTag);
    }
}

RCT_EXPORT_METHOD(setWidth:(nonnull NSNumber *)reactTag width:(CGFloat)width)
{
    if (width < 0) {
        RCTLogError(@"Width must be a non-negative value");
        return;
    }
    UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
    if (view) {
        [view setWidth:width];
    } else {
        RCTLogError(@"View not found for reactTag: %@", reactTag);
    }
}

RCT_EXPORT_METHOD(setHeight:(nonnull NSNumber *)reactTag height:(CGFloat)height)
{
    if (height < 0) {
        RCTLogError(@"Height must be a non-negative value");
        return;
    }
    UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
    if (view) {
        [view setHeight:height];
    } else {
        RCTLogError(@"View not found for reactTag: %@", reactTag);
    }
}

RCT_EXPORT_METHOD(setResizeMode:(nonnull NSNumber *)reactTag resizeMode:(NSString *)resizeMode)
{
    NSArray *validModes = @[@"cover", @"contain", @"stretch", @"center"];
    if (![validModes containsObject:resizeMode]) {
        RCTLogError(@"Invalid resize mode");
        return;
    }
    UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
    if (view) {
        [view setResizeMode:resizeMode];
    } else {
        RCTLogError(@"View not found for reactTag: %@", reactTag);
    }
}

RCT_EXPORT_METHOD(setPaused:(nonnull NSNumber *)reactTag paused:(BOOL)paused)
{
    UgoiraView *view = (UgoiraView *)[self.bridge.uiManager viewForReactTag:reactTag];
    if (view) {
        [view setPaused:paused];
    } else {
        RCTLogError(@"View not found for reactTag: %@", reactTag);
    }
}

@end