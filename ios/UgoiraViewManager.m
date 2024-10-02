#import <React/RCTViewManager.h>

@interface UgoiraViewManager : RCTViewManager
@end

@implementation UgoiraViewManager

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setResizeMode:(NSString *)resizeMode resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    NSArray *acceptedValues = @[@"fitCenter", @"centerCrop", @"centerInside", @"contain", @"cover", @"stretch"];
    
    if (![acceptedValues containsObject:resizeMode]) {
        NSError *error = [NSError errorWithDomain:@"UgoiraViewManager" code:400 userInfo:@{NSLocalizedDescriptionKey: @"Invalid resizeMode value."}];
        reject(@"invalid_resize_mode", @"The provided resizeMode is not valid.", error);
        return;
    }
    
    // Handle the resizing behavior here
    // ...

    resolve(@{@"status": @"success", @"resizeMode": resizeMode});
}

@end