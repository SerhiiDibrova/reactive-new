package UgoiraView;

#import <React/RCTViewManager.h>
#import "UgoiraView.h"

@interface UgoiraViewManager : RCTViewManager
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE(UgoiraView)

- (UIView *)view
{
    return [[UgoiraView alloc] init];
}

RCT_EXPORT_METHOD(setImages:(nonnull NSNumber *)reactTag images:(NSArray<NSString *> *)images)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UgoiraView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]] && [images isKindOfClass:[NSArray class]] && images.count > 0 && [images everyObjectIsKindOfClass:[NSString class]]) {
            [view setImages:images];
        } else {
            NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid images input. Expected a non-empty array of strings."}];
            [self.bridge.eventDispatcher sendAppEventWithName:@"UgoiraViewError" body:@{@"error": error.localizedDescription}];
        }
    });
}

RCT_EXPORT_METHOD(setWidth:(nonnull NSNumber *)reactTag width:(CGFloat)width)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UgoiraView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]] && width > 0) {
            [view setWidth:width];
        } else {
            NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid width input. Width must be a positive number."}];
            [self.bridge.eventDispatcher sendAppEventWithName:@"UgoiraViewError" body:@{@"error": error.localizedDescription}];
        }
    });
}

RCT_EXPORT_METHOD(setHeight:(nonnull NSNumber *)reactTag height:(CGFloat)height)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UgoiraView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]] && height > 0) {
            [view setHeight:height];
        } else {
            NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid height input. Height must be a positive number."}];
            [self.bridge.eventDispatcher sendAppEventWithName:@"UgoiraViewError" body:@{@"error": error.localizedDescription}];
        }
    });
}

RCT_EXPORT_METHOD(setResizeMode:(nonnull NSNumber *)reactTag resizeMode:(NSString *)resizeMode)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UgoiraView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]] && [resizeMode isKindOfClass:[NSString class]]) {
            [view setResizeMode:resizeMode];
        } else {
            NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid resize mode input. Expected a string."}];
            [self.bridge.eventDispatcher sendAppEventWithName:@"UgoiraViewError" body:@{@"error": error.localizedDescription}];
        }
    });
}

RCT_EXPORT_METHOD(setPaused:(nonnull NSNumber *)reactTag paused:(BOOL)paused)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UgoiraView *view = [self.bridge.uiManager viewForReactTag:reactTag];
        if ([view isKindOfClass:[UgoiraView class]]) {
            [view setPaused:paused];
        } else {
            NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid paused input. Expected a UgoiraView instance."}];
            [self.bridge.eventDispatcher sendAppEventWithName:@"UgoiraViewError" body:@{@"error": error.localizedDescription}];
        }
    });
}

@end